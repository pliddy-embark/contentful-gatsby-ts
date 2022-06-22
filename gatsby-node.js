exports.createPages = async ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/homepage`,
    redirectInBrowser: true,
    isPermanent: true,
  })

}
