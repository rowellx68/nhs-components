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
        // remove module.exports
    const moduleExports = root.find(j.MemberExpression, {
      object: { name: 'module' },
      property: { name: 'exports' },
    });

    moduleExports.forEach((path) => {
      const parent = path.parentPath;
      if (parent.value.type === 'AssignmentExpression') {
        j(parent).remove();
      }
      else {
        j(path).remove();
      }
    });

    // get all variables and functions and make them named exports
    const variables = root.find(j.VariableDeclaration, {
      kind: 'const',
      loc: {
        indent: 0,
      },
    });
    const functionDeclarations = root.find(j.FunctionDeclaration, {
      loc: {
        indent: 0,
      },
    });

    // make variables and functions named exports
    variables.forEach((path) => {
      const declarator = path.value.declarations[0];
      const variableName = declarator.id.name;
      const variableValue = declarator.init;
      const variableExport = j.exportNamedDeclaration(
        j.variableDeclaration('const', [
          j.variableDeclarator(
            j.identifier(variableName),
            variableValue,
          ),
        ]),
        [],
      );
      variableExport.comments = path.value.comments;
      path.replace(variableExport);
    });

    functionDeclarations.forEach((path) => {
      const functionName = path.value.id.name;
      const functionExport = j.exportNamedDeclaration(
        j.functionDeclaration(
          j.identifier(functionName),
          path.value.params,
          path.value.body,
        ),
        [],
      );
      functionExport.comments = path.value.comments;
      path.replace(functionExport);
    });

    return root.toSource(printOptions);
  }

  // rewrite requires to imports
  const requires = root.find(j.VariableDeclaration, {
    declarations: [
      {
        init: {
          type: 'CallExpression',
          callee: {
            name: 'require',
          },
        },
      },
    ],
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

  const moduleExports = root.find(j.ExpressionStatement, {
    expression: {
      type: 'AssignmentExpression',
      operator: '=',
      left: {
        type: 'MemberExpression',
        object: { name: 'module' },
        property: { name: 'exports' },
      },
    },
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
