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
 * The contents of this file was automatically generated from the NHS.UK Frontend.
 *
 * Do not make changes to this file directly.
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

  if (exportComments) {
    exports.get().node.comments = [
      j.commentBlock(`${exportComments[0].value}*
 * @param {{ ${params.join(', ')} }} params
`),
    ];
    // eslint-disable-next-line @stylistic/brace-style
  } else {
    exports.get().node.comments = [
      j.commentBlock(`*
 * @param {{ ${params.join(', ')} }} params
`),
    ];
  }

  return root.toSource(printOptions);
};
