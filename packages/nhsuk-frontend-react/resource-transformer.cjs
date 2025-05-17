/** @type {import("jscodeshift").Transform} */
// eslint-disable-next-line no-undef
module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {
    quote: 'single',
  };

  const root = j(file.source);

  const exports = root.find(j.ExportDefaultDeclaration);

  const banner = j.commentBlock(`*
 *
 * The contents of this file was automatically generated from the NHS.UK Frontend.
 *
 * Do not make changes to this file directly.
 *
 `);

  root.get().node.comments = [banner];

  if (!exports.length) {
    return root.toSource(printOptions);
  }

  const exportParams = exports
    .find(j.AssignmentPattern)
    .find(j.AssignmentPattern);

  const commonImports = root.find(j.ImportDeclaration, {
    type: 'ImportDeclaration',
  });

  commonImports.forEach((path) => {
    path.value.source = j.literal('@/resources/common');
  });

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

  const params = [];

  exportParams.forEach(({ value }) => {
    params.push(
      `${value.left.name}?: ${
        value.right.name === 'document'
          ? 'HTMLElement | Document | null'
          : typeof value.right.value
      }`,
    );
  });

  if (!params.length) {
    return root.toSource(printOptions);
  }

  const exportComments = exports.get().node.comments;

  let comments = [];

  if (exportComments) {
    comments = [
      j.commentBlock(
        `${exportComments[0].value}*
 * @param {{ ${params.join(', ')} }} params
 *
 `,
        true,
      ),
    ];
  } else {
    comments = [
      j.commentBlock(
        `*
 *
 * @param {{ ${params.join(', ')} }} params
 *
 `,
        true,
      ),
    ];
  }

  exports.get().node.comments = comments;

  return root.toSource(printOptions);
};
