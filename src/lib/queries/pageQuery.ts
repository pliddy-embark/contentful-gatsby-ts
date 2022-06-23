// import { graphql } from 'gatsby';

// const pageQuery = graphql`
//   query pageQuery($id: String) {
//     allContentfulPage(filter: {node_locale: {eq: "en-US"}, slug:{nin: ["homepage", "error"]}}) {
//       nodes {
//         id
//         title
//         slug
//       }
//     }

//     contentfulPage(id: { eq: $id }) {
//       id
//       title
//       slug
//       heading
//       subheading
//       sections {
//         ...Sections
//       }
//     }
//   }

//   fragment Sections on ContentfulSection {
//     id
//     title
//     slug
//     type
//     heading
//     subheading
//     components {
//       ...Components
//     }
//   }

//   fragment Components on ContentfulComponent {
//     id
//     title
//     slug
//     label
//     date
//     heading
//     subheading
//     richText {
//       raw
//     }
//     image {
//       ...Image
//     }
//     links {
//       ...Link
//     }
//     namedStrings {
//       ...NamedString
//     }
//   }

//   fragment Asset on ContentfulAsset {
//     id
//     title
//     description
//     mimeType
//     file {
//       url
//       fileName
//       contentType
//       details {
//         size
//         image {
//           width
//           height
//         }
//       }
//     }
//     size
//     url
//     width
//     height
//   }

//   fragment Image on ContentfulImage {
//     id
//     altText
//     caption
//     asset {
//       ...Asset
//     }
//   }

//   fragment Link on ContentfulLink {
//     id
//     title
//     label
//     ref {
//       ... on ContentfulPage {
//         id
//         title
//         slug
//       }
//     }
//   }

//   fragment NamedString on ContentfulNameValuePair {
//     id
//     name
//     value
//   }
// `;

// export default pageQuery;