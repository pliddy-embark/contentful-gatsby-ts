exports.createPages = async ({ actions }) => {
	const { createRedirect } = actions;

  createRedirect({
    fromPath: `/homepage`,
    toPath: `/`,
    redirectInBrowser: true,
    isPermanent: true,
  })}
