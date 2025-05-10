/** @type {import("jscodeshift").Transform} */
// eslint-disable-next-line no-undef
module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {
    quote: 'single',
  };

  const root = j(file.source);

  // add banner comment
  const banner = j.commentBlock(`*
 *
 * The contents of this file was automatically generated from the NHS.UK Frontend.
 *
 * Do not make changes to this file directly.
 *
`);
  const rootComments = root.get().node.comments || [];

  // add banner comment to the top of the file
  root.get().node.comments = [...rootComments, banner];

  if (file.path.includes('common.js')) {
    return root.toSource(printOptions);
  }

  // rewrite requires to imports
  const requires = root.find(j.VariableDeclaration, (path) => {
    return path.declarations.some((declarator) => {
      return (
        declarator.init &&
        declarator.init.type === 'CallExpression' &&
        declarator.init.callee.name === 'require'
      );
    });
  });

  requires.forEach((path) => {
    const declarator = path.value.declarations[0];
    const importedModule = declarator.init.arguments[0].value.replace(
      '../../',
      '@/resources/',
    );

    // Check if destructuring is used
    if (declarator.id.type === 'ObjectPattern') {
      const properties = declarator.id.properties.map((prop) => prop.key.name);
      const importStatement = j.importDeclaration(
        properties.map((name) => j.importSpecifier(j.identifier(name))),
        j.literal(importedModule),
      );
      j(path).replaceWith(importStatement);
    }
    else {
      // Default import
      const importStatement = j.importDeclaration(
        [j.importDefaultSpecifier(j.identifier(declarator.id.name))],
        j.literal(importedModule),
      );
      j(path).replaceWith(importStatement);
    }
  });

  const moduleExports = root.find(j.ExpressionStatement, (path) => {
    return (
      path.expression.type === 'AssignmentExpression' &&
      path.expression.operator === '=' &&
      path.expression.left.type === 'MemberExpression' &&
      path.expression.left.object.name === 'module' &&
      path.expression.left.property.name === 'exports'
    );
  });

  if (!moduleExports.length) {
    root.toSource(printOptions);
  }

  if (file.path.includes('header.js')) {
    const setupMobileMenu = root.find(j.MethodDefinition, {
      key: {
        name: 'setupMobileMenu',
      },
    });

    setupMobileMenu.forEach((path) => {
      const { node } = path;

      const existingMobileMenu = j.variableDeclaration('const', [
        j.variableDeclarator(
          j.identifier('existingMobileMenu'),
          j.callExpression(
            j.memberExpression(
              j.memberExpression(
                j.thisExpression(),
                j.identifier('mobileMenuContainer'),
              ),
              j.identifier('querySelector'),
            ),
            [j.literal('.nhsuk-header__drop-down')],
          ),
        ),
      ]);

      const ifStatement = j.ifStatement(
        j.identifier('existingMobileMenu'),
        j.blockStatement([
          j.expressionStatement(
            j.assignmentExpression(
              '=',
              j.memberExpression(
                j.thisExpression(),
                j.identifier('mobileMenu'),
              ),
              j.identifier('existingMobileMenu'),
            ),
          ),
          j.returnStatement(null),
        ]),
      );

      node.value.body.body.unshift(existingMobileMenu, ifStatement);
    });
  }

  moduleExports.forEach((path) => {
    const target = j(path);

    // rewrite module.exports to export default
    const exportDefault = j.exportDefaultDeclaration(
      path.value.expression.right,
    );

    // get all assignment patterns parameters of the function
    const functionParams = target
      .find(j.AssignmentPattern)
      .find(j.ObjectPattern)
      .find(j.AssignmentPattern);

    if (!functionParams.length) {
      target.replaceWith(exportDefault);

      return root.toSource(printOptions);
    }

    const newExportParams = [];

    functionParams.forEach(({ value }) => {
      newExportParams.push(
        `${value.left.name}?: ${
          value.right.name === 'document'
            ? 'HTMLElement | Document | null'
            : typeof value.right.value
        }`,
      );
    });

    const nodeComments = target.get().node.comments || [];

    exportDefault.comments = [
      ...nodeComments,
      j.commentBlock(` *
 *
 * @param {{ ${newExportParams.join(', ')} }} params
 * @returns {void}
 *
`),
    ];

    target.replaceWith(exportDefault);
  });

  return root.toSource(printOptions);
};
