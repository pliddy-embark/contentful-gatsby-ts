export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  url?: Maybe<Scalars['String']>;
  placeholderUrl?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  filesize?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type RemoteFileFit =
  | 'COVER'
  | 'FILL'
  | 'OUTSIDE'
  | 'CONTAIN';

export type RemoteFileFormat =
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES';

export type RemoteFileLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'TRACED_SVG'
  | 'NONE';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulLink = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  ref?: Maybe<ContentfulPage>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLinkSys>;
  component?: Maybe<Array<Maybe<ContentfulComponent>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLinkCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulLinkUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulLinkSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLinkSysContentType>;
};

export type ContentfulLinkSysContentType = {
  sys?: Maybe<ContentfulLinkSysContentTypeSys>;
};

export type ContentfulLinkSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulNameValuePair = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  component?: Maybe<Array<Maybe<ContentfulComponent>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNameValuePairSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulNameValuePairCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulNameValuePairUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulNameValuePairSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNameValuePairSysContentType>;
};

export type ContentfulNameValuePairSysContentType = {
  sys?: Maybe<ContentfulNameValuePairSysContentTypeSys>;
};

export type ContentfulNameValuePairSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulMenu = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulSection = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSectionSys>;
  subheading?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Maybe<ContentfulComponent>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSectionCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulSectionUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulSectionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSectionSysContentType>;
};

export type ContentfulSectionSysContentType = {
  sys?: Maybe<ContentfulSectionSysContentTypeSys>;
};

export type ContentfulSectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPage = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ContentfulSection>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  heading?: Maybe<Scalars['String']>;
  link?: Maybe<Array<Maybe<ContentfulLink>>>;
  subheading?: Maybe<Scalars['String']>;
  gatsbyPath?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulPageGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type ContentfulPageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponent = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  richText?: Maybe<ContentfulComponentRichText>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentSys>;
  heading?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulImage>;
  date?: Maybe<Scalars['Date']>;
  subheading?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ContentfulLink>>>;
  namedStrings?: Maybe<Array<Maybe<ContentfulNameValuePair>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentDateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentRichText = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulPage>>>;
};

export type ContentfulComponentSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentSysContentType>;
};

export type ContentfulComponentSysContentType = {
  sys?: Maybe<ContentfulComponentSysContentTypeSys>;
};

export type ContentfulComponentSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulImage = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  altText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  asset?: Maybe<ContentfulAsset>;
  component?: Maybe<Array<Maybe<ContentfulComponent>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulImageSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulImageCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulImageUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulImageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulImageSysContentType>;
};

export type ContentfulImageSysContentType = {
  sys?: Maybe<ContentfulImageSysContentTypeSys>;
};

export type ContentfulImageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHero = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulLink?: Maybe<ContentfulLink>;
  allContentfulLink: ContentfulLinkConnection;
  contentfulNameValuePair?: Maybe<ContentfulNameValuePair>;
  allContentfulNameValuePair: ContentfulNameValuePairConnection;
  contentfulMenu?: Maybe<ContentfulMenu>;
  allContentfulMenu: ContentfulMenuConnection;
  contentfulSection?: Maybe<ContentfulSection>;
  allContentfulSection: ContentfulSectionConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulComponent?: Maybe<ContentfulComponent>;
  allContentfulComponent: ContentfulComponentConnection;
  contentfulImage?: Maybe<ContentfulImage>;
  allContentfulImage: ContentfulImageConnection;
  contentfulHero?: Maybe<ContentfulHero>;
  allContentfulHero: ContentfulHeroConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  sort?: InputMaybe<ContentfulEntrySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  sort?: InputMaybe<ContentfulAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLinkArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  ref?: InputMaybe<ContentfulPageFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLinkSysFilterInput>;
  component?: InputMaybe<ContentfulComponentFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulLinkArgs = {
  filter?: InputMaybe<ContentfulLinkFilterInput>;
  sort?: InputMaybe<ContentfulLinkSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulNameValuePairArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<ContentfulComponentFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNameValuePairSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulNameValuePairArgs = {
  filter?: InputMaybe<ContentfulNameValuePairFilterInput>;
  sort?: InputMaybe<ContentfulNameValuePairSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulMenuArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulMenuArgs = {
  filter?: InputMaybe<ContentfulMenuFilterInput>;
  sort?: InputMaybe<ContentfulMenuSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulSectionArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSectionSysFilterInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  components?: InputMaybe<ContentfulComponentFilterListInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulSectionArgs = {
  filter?: InputMaybe<ContentfulSectionFilterInput>;
  sort?: InputMaybe<ContentfulSectionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sections?: InputMaybe<ContentfulSectionFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPageSysFilterInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<ContentfulLinkFilterListInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: InputMaybe<ContentfulPageFilterInput>;
  sort?: InputMaybe<ContentfulPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  richText?: InputMaybe<ContentfulComponentRichTextFilterInput>;
  section?: InputMaybe<ContentfulSectionFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentSysFilterInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulImageFilterInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  links?: InputMaybe<ContentfulLinkFilterListInput>;
  namedStrings?: InputMaybe<ContentfulNameValuePairFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentArgs = {
  filter?: InputMaybe<ContentfulComponentFilterInput>;
  sort?: InputMaybe<ContentfulComponentSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulImageArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<ContentfulAssetFilterInput>;
  component?: InputMaybe<ContentfulComponentFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImageSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulImageArgs = {
  filter?: InputMaybe<ContentfulImageFilterInput>;
  sort?: InputMaybe<ContentfulImageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulHeroArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulHeroArgs = {
  filter?: InputMaybe<ContentfulHeroFilterInput>;
  sort?: InputMaybe<ContentfulHeroSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  sort?: InputMaybe<ContentfulContentTypeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'graphqlTypegen'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetFileFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
};

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'gatsbyImageData'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'url'
  | 'placeholderUrl'
  | 'mimeType'
  | 'filename'
  | 'width'
  | 'height'
  | 'size'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'filesize'
  | 'publicUrl'
  | 'resize___width'
  | 'resize___height'
  | 'resize___src'
  | 'gatsbyImage';

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};

export type ContentfulAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPageFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sections?: InputMaybe<ContentfulSectionFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPageSysFilterInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<ContentfulLinkFilterListInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulSectionFilterListInput = {
  elemMatch?: InputMaybe<ContentfulSectionFilterInput>;
};

export type ContentfulSectionFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSectionSysFilterInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  components?: InputMaybe<ContentfulComponentFilterListInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulSectionSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulSectionSysContentTypeFilterInput>;
};

export type ContentfulSectionSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulSectionSysContentTypeSysFilterInput>;
};

export type ContentfulSectionSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentFilterInput>;
};

export type ContentfulComponentFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  richText?: InputMaybe<ContentfulComponentRichTextFilterInput>;
  section?: InputMaybe<ContentfulSectionFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentSysFilterInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulImageFilterInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  links?: InputMaybe<ContentfulLinkFilterListInput>;
  namedStrings?: InputMaybe<ContentfulNameValuePairFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentRichTextFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
  references?: InputMaybe<ContentfulPageFilterListInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: InputMaybe<ContentfulPageFilterInput>;
};

export type ContentfulComponentSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentSysContentTypeFilterInput>;
};

export type ContentfulComponentSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentSysContentTypeSysFilterInput>;
};

export type ContentfulComponentSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulImageFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<ContentfulAssetFilterInput>;
  component?: InputMaybe<ContentfulComponentFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImageSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulImageSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulImageSysContentTypeFilterInput>;
};

export type ContentfulImageSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulImageSysContentTypeSysFilterInput>;
};

export type ContentfulImageSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLinkFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLinkFilterInput>;
};

export type ContentfulLinkFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  ref?: InputMaybe<ContentfulPageFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLinkSysFilterInput>;
  component?: InputMaybe<ContentfulComponentFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulLinkSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulLinkSysContentTypeFilterInput>;
};

export type ContentfulLinkSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulLinkSysContentTypeSysFilterInput>;
};

export type ContentfulLinkSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNameValuePairFilterListInput = {
  elemMatch?: InputMaybe<ContentfulNameValuePairFilterInput>;
};

export type ContentfulNameValuePairFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<ContentfulComponentFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNameValuePairSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulNameValuePairSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulNameValuePairSysContentTypeFilterInput>;
};

export type ContentfulNameValuePairSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulNameValuePairSysContentTypeSysFilterInput>;
};

export type ContentfulNameValuePairSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLinkEdge>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLinkGroupConnection>;
};


export type ContentfulLinkConnectionDistinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkConnectionMaxArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkConnectionMinArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkConnectionSumArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkEdge = {
  next?: Maybe<ContentfulLink>;
  node: ContentfulLink;
  previous?: Maybe<ContentfulLink>;
};

export type ContentfulLinkFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'label'
  | 'ref___contentful_id'
  | 'ref___id'
  | 'ref___node_locale'
  | 'ref___title'
  | 'ref___slug'
  | 'ref___sections'
  | 'ref___sections___contentful_id'
  | 'ref___sections___id'
  | 'ref___sections___node_locale'
  | 'ref___sections___title'
  | 'ref___sections___slug'
  | 'ref___sections___type'
  | 'ref___sections___heading'
  | 'ref___sections___spaceId'
  | 'ref___sections___createdAt'
  | 'ref___sections___updatedAt'
  | 'ref___sections___sys___type'
  | 'ref___sections___sys___revision'
  | 'ref___sections___subheading'
  | 'ref___sections___components'
  | 'ref___sections___components___contentful_id'
  | 'ref___sections___components___id'
  | 'ref___sections___components___node_locale'
  | 'ref___sections___components___title'
  | 'ref___sections___components___slug'
  | 'ref___sections___components___section'
  | 'ref___sections___components___spaceId'
  | 'ref___sections___components___createdAt'
  | 'ref___sections___components___updatedAt'
  | 'ref___sections___components___heading'
  | 'ref___sections___components___label'
  | 'ref___sections___components___date'
  | 'ref___sections___components___subheading'
  | 'ref___sections___components___links'
  | 'ref___sections___components___namedStrings'
  | 'ref___sections___components___children'
  | 'ref___sections___page'
  | 'ref___sections___page___contentful_id'
  | 'ref___sections___page___id'
  | 'ref___sections___page___node_locale'
  | 'ref___sections___page___title'
  | 'ref___sections___page___slug'
  | 'ref___sections___page___sections'
  | 'ref___sections___page___spaceId'
  | 'ref___sections___page___createdAt'
  | 'ref___sections___page___updatedAt'
  | 'ref___sections___page___heading'
  | 'ref___sections___page___link'
  | 'ref___sections___page___subheading'
  | 'ref___sections___page___gatsbyPath'
  | 'ref___sections___page___children'
  | 'ref___sections___parent___id'
  | 'ref___sections___parent___children'
  | 'ref___sections___children'
  | 'ref___sections___children___id'
  | 'ref___sections___children___children'
  | 'ref___sections___internal___content'
  | 'ref___sections___internal___contentDigest'
  | 'ref___sections___internal___description'
  | 'ref___sections___internal___fieldOwners'
  | 'ref___sections___internal___ignoreType'
  | 'ref___sections___internal___mediaType'
  | 'ref___sections___internal___owner'
  | 'ref___sections___internal___type'
  | 'ref___spaceId'
  | 'ref___createdAt'
  | 'ref___updatedAt'
  | 'ref___sys___type'
  | 'ref___sys___revision'
  | 'ref___heading'
  | 'ref___link'
  | 'ref___link___contentful_id'
  | 'ref___link___id'
  | 'ref___link___node_locale'
  | 'ref___link___title'
  | 'ref___link___slug'
  | 'ref___link___label'
  | 'ref___link___ref___contentful_id'
  | 'ref___link___ref___id'
  | 'ref___link___ref___node_locale'
  | 'ref___link___ref___title'
  | 'ref___link___ref___slug'
  | 'ref___link___ref___sections'
  | 'ref___link___ref___spaceId'
  | 'ref___link___ref___createdAt'
  | 'ref___link___ref___updatedAt'
  | 'ref___link___ref___heading'
  | 'ref___link___ref___link'
  | 'ref___link___ref___subheading'
  | 'ref___link___ref___gatsbyPath'
  | 'ref___link___ref___children'
  | 'ref___link___spaceId'
  | 'ref___link___createdAt'
  | 'ref___link___updatedAt'
  | 'ref___link___sys___type'
  | 'ref___link___sys___revision'
  | 'ref___link___component'
  | 'ref___link___component___contentful_id'
  | 'ref___link___component___id'
  | 'ref___link___component___node_locale'
  | 'ref___link___component___title'
  | 'ref___link___component___slug'
  | 'ref___link___component___section'
  | 'ref___link___component___spaceId'
  | 'ref___link___component___createdAt'
  | 'ref___link___component___updatedAt'
  | 'ref___link___component___heading'
  | 'ref___link___component___label'
  | 'ref___link___component___date'
  | 'ref___link___component___subheading'
  | 'ref___link___component___links'
  | 'ref___link___component___namedStrings'
  | 'ref___link___component___children'
  | 'ref___link___parent___id'
  | 'ref___link___parent___children'
  | 'ref___link___children'
  | 'ref___link___children___id'
  | 'ref___link___children___children'
  | 'ref___link___internal___content'
  | 'ref___link___internal___contentDigest'
  | 'ref___link___internal___description'
  | 'ref___link___internal___fieldOwners'
  | 'ref___link___internal___ignoreType'
  | 'ref___link___internal___mediaType'
  | 'ref___link___internal___owner'
  | 'ref___link___internal___type'
  | 'ref___subheading'
  | 'ref___gatsbyPath'
  | 'ref___parent___id'
  | 'ref___parent___parent___id'
  | 'ref___parent___parent___children'
  | 'ref___parent___children'
  | 'ref___parent___children___id'
  | 'ref___parent___children___children'
  | 'ref___parent___internal___content'
  | 'ref___parent___internal___contentDigest'
  | 'ref___parent___internal___description'
  | 'ref___parent___internal___fieldOwners'
  | 'ref___parent___internal___ignoreType'
  | 'ref___parent___internal___mediaType'
  | 'ref___parent___internal___owner'
  | 'ref___parent___internal___type'
  | 'ref___children'
  | 'ref___children___id'
  | 'ref___children___parent___id'
  | 'ref___children___parent___children'
  | 'ref___children___children'
  | 'ref___children___children___id'
  | 'ref___children___children___children'
  | 'ref___children___internal___content'
  | 'ref___children___internal___contentDigest'
  | 'ref___children___internal___description'
  | 'ref___children___internal___fieldOwners'
  | 'ref___children___internal___ignoreType'
  | 'ref___children___internal___mediaType'
  | 'ref___children___internal___owner'
  | 'ref___children___internal___type'
  | 'ref___internal___content'
  | 'ref___internal___contentDigest'
  | 'ref___internal___description'
  | 'ref___internal___fieldOwners'
  | 'ref___internal___ignoreType'
  | 'ref___internal___mediaType'
  | 'ref___internal___owner'
  | 'ref___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'component'
  | 'component___contentful_id'
  | 'component___id'
  | 'component___node_locale'
  | 'component___title'
  | 'component___slug'
  | 'component___richText___raw'
  | 'component___richText___references'
  | 'component___richText___references___contentful_id'
  | 'component___richText___references___id'
  | 'component___richText___references___node_locale'
  | 'component___richText___references___title'
  | 'component___richText___references___slug'
  | 'component___richText___references___sections'
  | 'component___richText___references___spaceId'
  | 'component___richText___references___createdAt'
  | 'component___richText___references___updatedAt'
  | 'component___richText___references___heading'
  | 'component___richText___references___link'
  | 'component___richText___references___subheading'
  | 'component___richText___references___gatsbyPath'
  | 'component___richText___references___children'
  | 'component___section'
  | 'component___section___contentful_id'
  | 'component___section___id'
  | 'component___section___node_locale'
  | 'component___section___title'
  | 'component___section___slug'
  | 'component___section___type'
  | 'component___section___heading'
  | 'component___section___spaceId'
  | 'component___section___createdAt'
  | 'component___section___updatedAt'
  | 'component___section___sys___type'
  | 'component___section___sys___revision'
  | 'component___section___subheading'
  | 'component___section___components'
  | 'component___section___components___contentful_id'
  | 'component___section___components___id'
  | 'component___section___components___node_locale'
  | 'component___section___components___title'
  | 'component___section___components___slug'
  | 'component___section___components___section'
  | 'component___section___components___spaceId'
  | 'component___section___components___createdAt'
  | 'component___section___components___updatedAt'
  | 'component___section___components___heading'
  | 'component___section___components___label'
  | 'component___section___components___date'
  | 'component___section___components___subheading'
  | 'component___section___components___links'
  | 'component___section___components___namedStrings'
  | 'component___section___components___children'
  | 'component___section___page'
  | 'component___section___page___contentful_id'
  | 'component___section___page___id'
  | 'component___section___page___node_locale'
  | 'component___section___page___title'
  | 'component___section___page___slug'
  | 'component___section___page___sections'
  | 'component___section___page___spaceId'
  | 'component___section___page___createdAt'
  | 'component___section___page___updatedAt'
  | 'component___section___page___heading'
  | 'component___section___page___link'
  | 'component___section___page___subheading'
  | 'component___section___page___gatsbyPath'
  | 'component___section___page___children'
  | 'component___section___parent___id'
  | 'component___section___parent___children'
  | 'component___section___children'
  | 'component___section___children___id'
  | 'component___section___children___children'
  | 'component___section___internal___content'
  | 'component___section___internal___contentDigest'
  | 'component___section___internal___description'
  | 'component___section___internal___fieldOwners'
  | 'component___section___internal___ignoreType'
  | 'component___section___internal___mediaType'
  | 'component___section___internal___owner'
  | 'component___section___internal___type'
  | 'component___spaceId'
  | 'component___createdAt'
  | 'component___updatedAt'
  | 'component___sys___type'
  | 'component___sys___revision'
  | 'component___heading'
  | 'component___label'
  | 'component___image___contentful_id'
  | 'component___image___id'
  | 'component___image___node_locale'
  | 'component___image___altText'
  | 'component___image___caption'
  | 'component___image___asset___contentful_id'
  | 'component___image___asset___id'
  | 'component___image___asset___gatsbyImageData'
  | 'component___image___asset___spaceId'
  | 'component___image___asset___createdAt'
  | 'component___image___asset___updatedAt'
  | 'component___image___asset___title'
  | 'component___image___asset___description'
  | 'component___image___asset___node_locale'
  | 'component___image___asset___url'
  | 'component___image___asset___placeholderUrl'
  | 'component___image___asset___mimeType'
  | 'component___image___asset___filename'
  | 'component___image___asset___width'
  | 'component___image___asset___height'
  | 'component___image___asset___size'
  | 'component___image___asset___children'
  | 'component___image___asset___filesize'
  | 'component___image___asset___publicUrl'
  | 'component___image___asset___gatsbyImage'
  | 'component___image___component'
  | 'component___image___component___contentful_id'
  | 'component___image___component___id'
  | 'component___image___component___node_locale'
  | 'component___image___component___title'
  | 'component___image___component___slug'
  | 'component___image___component___section'
  | 'component___image___component___spaceId'
  | 'component___image___component___createdAt'
  | 'component___image___component___updatedAt'
  | 'component___image___component___heading'
  | 'component___image___component___label'
  | 'component___image___component___date'
  | 'component___image___component___subheading'
  | 'component___image___component___links'
  | 'component___image___component___namedStrings'
  | 'component___image___component___children'
  | 'component___image___spaceId'
  | 'component___image___createdAt'
  | 'component___image___updatedAt'
  | 'component___image___sys___type'
  | 'component___image___sys___revision'
  | 'component___image___parent___id'
  | 'component___image___parent___children'
  | 'component___image___children'
  | 'component___image___children___id'
  | 'component___image___children___children'
  | 'component___image___internal___content'
  | 'component___image___internal___contentDigest'
  | 'component___image___internal___description'
  | 'component___image___internal___fieldOwners'
  | 'component___image___internal___ignoreType'
  | 'component___image___internal___mediaType'
  | 'component___image___internal___owner'
  | 'component___image___internal___type'
  | 'component___date'
  | 'component___subheading'
  | 'component___links'
  | 'component___links___contentful_id'
  | 'component___links___id'
  | 'component___links___node_locale'
  | 'component___links___title'
  | 'component___links___slug'
  | 'component___links___label'
  | 'component___links___ref___contentful_id'
  | 'component___links___ref___id'
  | 'component___links___ref___node_locale'
  | 'component___links___ref___title'
  | 'component___links___ref___slug'
  | 'component___links___ref___sections'
  | 'component___links___ref___spaceId'
  | 'component___links___ref___createdAt'
  | 'component___links___ref___updatedAt'
  | 'component___links___ref___heading'
  | 'component___links___ref___link'
  | 'component___links___ref___subheading'
  | 'component___links___ref___gatsbyPath'
  | 'component___links___ref___children'
  | 'component___links___spaceId'
  | 'component___links___createdAt'
  | 'component___links___updatedAt'
  | 'component___links___sys___type'
  | 'component___links___sys___revision'
  | 'component___links___component'
  | 'component___links___component___contentful_id'
  | 'component___links___component___id'
  | 'component___links___component___node_locale'
  | 'component___links___component___title'
  | 'component___links___component___slug'
  | 'component___links___component___section'
  | 'component___links___component___spaceId'
  | 'component___links___component___createdAt'
  | 'component___links___component___updatedAt'
  | 'component___links___component___heading'
  | 'component___links___component___label'
  | 'component___links___component___date'
  | 'component___links___component___subheading'
  | 'component___links___component___links'
  | 'component___links___component___namedStrings'
  | 'component___links___component___children'
  | 'component___links___parent___id'
  | 'component___links___parent___children'
  | 'component___links___children'
  | 'component___links___children___id'
  | 'component___links___children___children'
  | 'component___links___internal___content'
  | 'component___links___internal___contentDigest'
  | 'component___links___internal___description'
  | 'component___links___internal___fieldOwners'
  | 'component___links___internal___ignoreType'
  | 'component___links___internal___mediaType'
  | 'component___links___internal___owner'
  | 'component___links___internal___type'
  | 'component___namedStrings'
  | 'component___namedStrings___contentful_id'
  | 'component___namedStrings___id'
  | 'component___namedStrings___node_locale'
  | 'component___namedStrings___name'
  | 'component___namedStrings___value'
  | 'component___namedStrings___component'
  | 'component___namedStrings___component___contentful_id'
  | 'component___namedStrings___component___id'
  | 'component___namedStrings___component___node_locale'
  | 'component___namedStrings___component___title'
  | 'component___namedStrings___component___slug'
  | 'component___namedStrings___component___section'
  | 'component___namedStrings___component___spaceId'
  | 'component___namedStrings___component___createdAt'
  | 'component___namedStrings___component___updatedAt'
  | 'component___namedStrings___component___heading'
  | 'component___namedStrings___component___label'
  | 'component___namedStrings___component___date'
  | 'component___namedStrings___component___subheading'
  | 'component___namedStrings___component___links'
  | 'component___namedStrings___component___namedStrings'
  | 'component___namedStrings___component___children'
  | 'component___namedStrings___spaceId'
  | 'component___namedStrings___createdAt'
  | 'component___namedStrings___updatedAt'
  | 'component___namedStrings___sys___type'
  | 'component___namedStrings___sys___revision'
  | 'component___namedStrings___parent___id'
  | 'component___namedStrings___parent___children'
  | 'component___namedStrings___children'
  | 'component___namedStrings___children___id'
  | 'component___namedStrings___children___children'
  | 'component___namedStrings___internal___content'
  | 'component___namedStrings___internal___contentDigest'
  | 'component___namedStrings___internal___description'
  | 'component___namedStrings___internal___fieldOwners'
  | 'component___namedStrings___internal___ignoreType'
  | 'component___namedStrings___internal___mediaType'
  | 'component___namedStrings___internal___owner'
  | 'component___namedStrings___internal___type'
  | 'component___parent___id'
  | 'component___parent___parent___id'
  | 'component___parent___parent___children'
  | 'component___parent___children'
  | 'component___parent___children___id'
  | 'component___parent___children___children'
  | 'component___parent___internal___content'
  | 'component___parent___internal___contentDigest'
  | 'component___parent___internal___description'
  | 'component___parent___internal___fieldOwners'
  | 'component___parent___internal___ignoreType'
  | 'component___parent___internal___mediaType'
  | 'component___parent___internal___owner'
  | 'component___parent___internal___type'
  | 'component___children'
  | 'component___children___id'
  | 'component___children___parent___id'
  | 'component___children___parent___children'
  | 'component___children___children'
  | 'component___children___children___id'
  | 'component___children___children___children'
  | 'component___children___internal___content'
  | 'component___children___internal___contentDigest'
  | 'component___children___internal___description'
  | 'component___children___internal___fieldOwners'
  | 'component___children___internal___ignoreType'
  | 'component___children___internal___mediaType'
  | 'component___children___internal___owner'
  | 'component___children___internal___type'
  | 'component___internal___content'
  | 'component___internal___contentDigest'
  | 'component___internal___description'
  | 'component___internal___fieldOwners'
  | 'component___internal___ignoreType'
  | 'component___internal___mediaType'
  | 'component___internal___owner'
  | 'component___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulLinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLinkEdge>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLinkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLinkGroupConnectionDistinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkGroupConnectionMaxArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkGroupConnectionMinArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkGroupConnectionSumArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulLinkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulNameValuePairConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNameValuePairEdge>;
  nodes: Array<ContentfulNameValuePair>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulNameValuePairGroupConnection>;
};


export type ContentfulNameValuePairConnectionDistinctArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairConnectionMaxArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairConnectionMinArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairConnectionSumArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulNameValuePairFieldsEnum;
};

export type ContentfulNameValuePairEdge = {
  next?: Maybe<ContentfulNameValuePair>;
  node: ContentfulNameValuePair;
  previous?: Maybe<ContentfulNameValuePair>;
};

export type ContentfulNameValuePairFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'value'
  | 'component'
  | 'component___contentful_id'
  | 'component___id'
  | 'component___node_locale'
  | 'component___title'
  | 'component___slug'
  | 'component___richText___raw'
  | 'component___richText___references'
  | 'component___richText___references___contentful_id'
  | 'component___richText___references___id'
  | 'component___richText___references___node_locale'
  | 'component___richText___references___title'
  | 'component___richText___references___slug'
  | 'component___richText___references___sections'
  | 'component___richText___references___spaceId'
  | 'component___richText___references___createdAt'
  | 'component___richText___references___updatedAt'
  | 'component___richText___references___heading'
  | 'component___richText___references___link'
  | 'component___richText___references___subheading'
  | 'component___richText___references___gatsbyPath'
  | 'component___richText___references___children'
  | 'component___section'
  | 'component___section___contentful_id'
  | 'component___section___id'
  | 'component___section___node_locale'
  | 'component___section___title'
  | 'component___section___slug'
  | 'component___section___type'
  | 'component___section___heading'
  | 'component___section___spaceId'
  | 'component___section___createdAt'
  | 'component___section___updatedAt'
  | 'component___section___sys___type'
  | 'component___section___sys___revision'
  | 'component___section___subheading'
  | 'component___section___components'
  | 'component___section___components___contentful_id'
  | 'component___section___components___id'
  | 'component___section___components___node_locale'
  | 'component___section___components___title'
  | 'component___section___components___slug'
  | 'component___section___components___section'
  | 'component___section___components___spaceId'
  | 'component___section___components___createdAt'
  | 'component___section___components___updatedAt'
  | 'component___section___components___heading'
  | 'component___section___components___label'
  | 'component___section___components___date'
  | 'component___section___components___subheading'
  | 'component___section___components___links'
  | 'component___section___components___namedStrings'
  | 'component___section___components___children'
  | 'component___section___page'
  | 'component___section___page___contentful_id'
  | 'component___section___page___id'
  | 'component___section___page___node_locale'
  | 'component___section___page___title'
  | 'component___section___page___slug'
  | 'component___section___page___sections'
  | 'component___section___page___spaceId'
  | 'component___section___page___createdAt'
  | 'component___section___page___updatedAt'
  | 'component___section___page___heading'
  | 'component___section___page___link'
  | 'component___section___page___subheading'
  | 'component___section___page___gatsbyPath'
  | 'component___section___page___children'
  | 'component___section___parent___id'
  | 'component___section___parent___children'
  | 'component___section___children'
  | 'component___section___children___id'
  | 'component___section___children___children'
  | 'component___section___internal___content'
  | 'component___section___internal___contentDigest'
  | 'component___section___internal___description'
  | 'component___section___internal___fieldOwners'
  | 'component___section___internal___ignoreType'
  | 'component___section___internal___mediaType'
  | 'component___section___internal___owner'
  | 'component___section___internal___type'
  | 'component___spaceId'
  | 'component___createdAt'
  | 'component___updatedAt'
  | 'component___sys___type'
  | 'component___sys___revision'
  | 'component___heading'
  | 'component___label'
  | 'component___image___contentful_id'
  | 'component___image___id'
  | 'component___image___node_locale'
  | 'component___image___altText'
  | 'component___image___caption'
  | 'component___image___asset___contentful_id'
  | 'component___image___asset___id'
  | 'component___image___asset___gatsbyImageData'
  | 'component___image___asset___spaceId'
  | 'component___image___asset___createdAt'
  | 'component___image___asset___updatedAt'
  | 'component___image___asset___title'
  | 'component___image___asset___description'
  | 'component___image___asset___node_locale'
  | 'component___image___asset___url'
  | 'component___image___asset___placeholderUrl'
  | 'component___image___asset___mimeType'
  | 'component___image___asset___filename'
  | 'component___image___asset___width'
  | 'component___image___asset___height'
  | 'component___image___asset___size'
  | 'component___image___asset___children'
  | 'component___image___asset___filesize'
  | 'component___image___asset___publicUrl'
  | 'component___image___asset___gatsbyImage'
  | 'component___image___component'
  | 'component___image___component___contentful_id'
  | 'component___image___component___id'
  | 'component___image___component___node_locale'
  | 'component___image___component___title'
  | 'component___image___component___slug'
  | 'component___image___component___section'
  | 'component___image___component___spaceId'
  | 'component___image___component___createdAt'
  | 'component___image___component___updatedAt'
  | 'component___image___component___heading'
  | 'component___image___component___label'
  | 'component___image___component___date'
  | 'component___image___component___subheading'
  | 'component___image___component___links'
  | 'component___image___component___namedStrings'
  | 'component___image___component___children'
  | 'component___image___spaceId'
  | 'component___image___createdAt'
  | 'component___image___updatedAt'
  | 'component___image___sys___type'
  | 'component___image___sys___revision'
  | 'component___image___parent___id'
  | 'component___image___parent___children'
  | 'component___image___children'
  | 'component___image___children___id'
  | 'component___image___children___children'
  | 'component___image___internal___content'
  | 'component___image___internal___contentDigest'
  | 'component___image___internal___description'
  | 'component___image___internal___fieldOwners'
  | 'component___image___internal___ignoreType'
  | 'component___image___internal___mediaType'
  | 'component___image___internal___owner'
  | 'component___image___internal___type'
  | 'component___date'
  | 'component___subheading'
  | 'component___links'
  | 'component___links___contentful_id'
  | 'component___links___id'
  | 'component___links___node_locale'
  | 'component___links___title'
  | 'component___links___slug'
  | 'component___links___label'
  | 'component___links___ref___contentful_id'
  | 'component___links___ref___id'
  | 'component___links___ref___node_locale'
  | 'component___links___ref___title'
  | 'component___links___ref___slug'
  | 'component___links___ref___sections'
  | 'component___links___ref___spaceId'
  | 'component___links___ref___createdAt'
  | 'component___links___ref___updatedAt'
  | 'component___links___ref___heading'
  | 'component___links___ref___link'
  | 'component___links___ref___subheading'
  | 'component___links___ref___gatsbyPath'
  | 'component___links___ref___children'
  | 'component___links___spaceId'
  | 'component___links___createdAt'
  | 'component___links___updatedAt'
  | 'component___links___sys___type'
  | 'component___links___sys___revision'
  | 'component___links___component'
  | 'component___links___component___contentful_id'
  | 'component___links___component___id'
  | 'component___links___component___node_locale'
  | 'component___links___component___title'
  | 'component___links___component___slug'
  | 'component___links___component___section'
  | 'component___links___component___spaceId'
  | 'component___links___component___createdAt'
  | 'component___links___component___updatedAt'
  | 'component___links___component___heading'
  | 'component___links___component___label'
  | 'component___links___component___date'
  | 'component___links___component___subheading'
  | 'component___links___component___links'
  | 'component___links___component___namedStrings'
  | 'component___links___component___children'
  | 'component___links___parent___id'
  | 'component___links___parent___children'
  | 'component___links___children'
  | 'component___links___children___id'
  | 'component___links___children___children'
  | 'component___links___internal___content'
  | 'component___links___internal___contentDigest'
  | 'component___links___internal___description'
  | 'component___links___internal___fieldOwners'
  | 'component___links___internal___ignoreType'
  | 'component___links___internal___mediaType'
  | 'component___links___internal___owner'
  | 'component___links___internal___type'
  | 'component___namedStrings'
  | 'component___namedStrings___contentful_id'
  | 'component___namedStrings___id'
  | 'component___namedStrings___node_locale'
  | 'component___namedStrings___name'
  | 'component___namedStrings___value'
  | 'component___namedStrings___component'
  | 'component___namedStrings___component___contentful_id'
  | 'component___namedStrings___component___id'
  | 'component___namedStrings___component___node_locale'
  | 'component___namedStrings___component___title'
  | 'component___namedStrings___component___slug'
  | 'component___namedStrings___component___section'
  | 'component___namedStrings___component___spaceId'
  | 'component___namedStrings___component___createdAt'
  | 'component___namedStrings___component___updatedAt'
  | 'component___namedStrings___component___heading'
  | 'component___namedStrings___component___label'
  | 'component___namedStrings___component___date'
  | 'component___namedStrings___component___subheading'
  | 'component___namedStrings___component___links'
  | 'component___namedStrings___component___namedStrings'
  | 'component___namedStrings___component___children'
  | 'component___namedStrings___spaceId'
  | 'component___namedStrings___createdAt'
  | 'component___namedStrings___updatedAt'
  | 'component___namedStrings___sys___type'
  | 'component___namedStrings___sys___revision'
  | 'component___namedStrings___parent___id'
  | 'component___namedStrings___parent___children'
  | 'component___namedStrings___children'
  | 'component___namedStrings___children___id'
  | 'component___namedStrings___children___children'
  | 'component___namedStrings___internal___content'
  | 'component___namedStrings___internal___contentDigest'
  | 'component___namedStrings___internal___description'
  | 'component___namedStrings___internal___fieldOwners'
  | 'component___namedStrings___internal___ignoreType'
  | 'component___namedStrings___internal___mediaType'
  | 'component___namedStrings___internal___owner'
  | 'component___namedStrings___internal___type'
  | 'component___parent___id'
  | 'component___parent___parent___id'
  | 'component___parent___parent___children'
  | 'component___parent___children'
  | 'component___parent___children___id'
  | 'component___parent___children___children'
  | 'component___parent___internal___content'
  | 'component___parent___internal___contentDigest'
  | 'component___parent___internal___description'
  | 'component___parent___internal___fieldOwners'
  | 'component___parent___internal___ignoreType'
  | 'component___parent___internal___mediaType'
  | 'component___parent___internal___owner'
  | 'component___parent___internal___type'
  | 'component___children'
  | 'component___children___id'
  | 'component___children___parent___id'
  | 'component___children___parent___children'
  | 'component___children___children'
  | 'component___children___children___id'
  | 'component___children___children___children'
  | 'component___children___internal___content'
  | 'component___children___internal___contentDigest'
  | 'component___children___internal___description'
  | 'component___children___internal___fieldOwners'
  | 'component___children___internal___ignoreType'
  | 'component___children___internal___mediaType'
  | 'component___children___internal___owner'
  | 'component___children___internal___type'
  | 'component___internal___content'
  | 'component___internal___contentDigest'
  | 'component___internal___description'
  | 'component___internal___fieldOwners'
  | 'component___internal___ignoreType'
  | 'component___internal___mediaType'
  | 'component___internal___owner'
  | 'component___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulNameValuePairGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNameValuePairEdge>;
  nodes: Array<ContentfulNameValuePair>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulNameValuePairGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulNameValuePairGroupConnectionDistinctArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairGroupConnectionMaxArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairGroupConnectionMinArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairGroupConnectionSumArgs = {
  field: ContentfulNameValuePairFieldsEnum;
};


export type ContentfulNameValuePairGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulNameValuePairFieldsEnum;
};

export type ContentfulNameValuePairSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulNameValuePairFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulMenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuEdge>;
  nodes: Array<ContentfulMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulMenuGroupConnection>;
};


export type ContentfulMenuConnectionDistinctArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuConnectionMaxArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuConnectionMinArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuConnectionSumArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulMenuFieldsEnum;
};

export type ContentfulMenuEdge = {
  next?: Maybe<ContentfulMenu>;
  node: ContentfulMenu;
  previous?: Maybe<ContentfulMenu>;
};

export type ContentfulMenuFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulMenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuEdge>;
  nodes: Array<ContentfulMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulMenuGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulMenuGroupConnectionDistinctArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuGroupConnectionMaxArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuGroupConnectionMinArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuGroupConnectionSumArgs = {
  field: ContentfulMenuFieldsEnum;
};


export type ContentfulMenuGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulMenuFieldsEnum;
};

export type ContentfulMenuFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulMenuSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulMenuFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSectionGroupConnection>;
};


export type ContentfulSectionConnectionDistinctArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionConnectionMaxArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionConnectionMinArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionConnectionSumArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSectionFieldsEnum;
};

export type ContentfulSectionEdge = {
  next?: Maybe<ContentfulSection>;
  node: ContentfulSection;
  previous?: Maybe<ContentfulSection>;
};

export type ContentfulSectionFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'type'
  | 'heading'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'subheading'
  | 'components'
  | 'components___contentful_id'
  | 'components___id'
  | 'components___node_locale'
  | 'components___title'
  | 'components___slug'
  | 'components___richText___raw'
  | 'components___richText___references'
  | 'components___richText___references___contentful_id'
  | 'components___richText___references___id'
  | 'components___richText___references___node_locale'
  | 'components___richText___references___title'
  | 'components___richText___references___slug'
  | 'components___richText___references___sections'
  | 'components___richText___references___spaceId'
  | 'components___richText___references___createdAt'
  | 'components___richText___references___updatedAt'
  | 'components___richText___references___heading'
  | 'components___richText___references___link'
  | 'components___richText___references___subheading'
  | 'components___richText___references___gatsbyPath'
  | 'components___richText___references___children'
  | 'components___section'
  | 'components___section___contentful_id'
  | 'components___section___id'
  | 'components___section___node_locale'
  | 'components___section___title'
  | 'components___section___slug'
  | 'components___section___type'
  | 'components___section___heading'
  | 'components___section___spaceId'
  | 'components___section___createdAt'
  | 'components___section___updatedAt'
  | 'components___section___sys___type'
  | 'components___section___sys___revision'
  | 'components___section___subheading'
  | 'components___section___components'
  | 'components___section___components___contentful_id'
  | 'components___section___components___id'
  | 'components___section___components___node_locale'
  | 'components___section___components___title'
  | 'components___section___components___slug'
  | 'components___section___components___section'
  | 'components___section___components___spaceId'
  | 'components___section___components___createdAt'
  | 'components___section___components___updatedAt'
  | 'components___section___components___heading'
  | 'components___section___components___label'
  | 'components___section___components___date'
  | 'components___section___components___subheading'
  | 'components___section___components___links'
  | 'components___section___components___namedStrings'
  | 'components___section___components___children'
  | 'components___section___page'
  | 'components___section___page___contentful_id'
  | 'components___section___page___id'
  | 'components___section___page___node_locale'
  | 'components___section___page___title'
  | 'components___section___page___slug'
  | 'components___section___page___sections'
  | 'components___section___page___spaceId'
  | 'components___section___page___createdAt'
  | 'components___section___page___updatedAt'
  | 'components___section___page___heading'
  | 'components___section___page___link'
  | 'components___section___page___subheading'
  | 'components___section___page___gatsbyPath'
  | 'components___section___page___children'
  | 'components___section___parent___id'
  | 'components___section___parent___children'
  | 'components___section___children'
  | 'components___section___children___id'
  | 'components___section___children___children'
  | 'components___section___internal___content'
  | 'components___section___internal___contentDigest'
  | 'components___section___internal___description'
  | 'components___section___internal___fieldOwners'
  | 'components___section___internal___ignoreType'
  | 'components___section___internal___mediaType'
  | 'components___section___internal___owner'
  | 'components___section___internal___type'
  | 'components___spaceId'
  | 'components___createdAt'
  | 'components___updatedAt'
  | 'components___sys___type'
  | 'components___sys___revision'
  | 'components___heading'
  | 'components___label'
  | 'components___image___contentful_id'
  | 'components___image___id'
  | 'components___image___node_locale'
  | 'components___image___altText'
  | 'components___image___caption'
  | 'components___image___asset___contentful_id'
  | 'components___image___asset___id'
  | 'components___image___asset___gatsbyImageData'
  | 'components___image___asset___spaceId'
  | 'components___image___asset___createdAt'
  | 'components___image___asset___updatedAt'
  | 'components___image___asset___title'
  | 'components___image___asset___description'
  | 'components___image___asset___node_locale'
  | 'components___image___asset___url'
  | 'components___image___asset___placeholderUrl'
  | 'components___image___asset___mimeType'
  | 'components___image___asset___filename'
  | 'components___image___asset___width'
  | 'components___image___asset___height'
  | 'components___image___asset___size'
  | 'components___image___asset___children'
  | 'components___image___asset___filesize'
  | 'components___image___asset___publicUrl'
  | 'components___image___asset___gatsbyImage'
  | 'components___image___component'
  | 'components___image___component___contentful_id'
  | 'components___image___component___id'
  | 'components___image___component___node_locale'
  | 'components___image___component___title'
  | 'components___image___component___slug'
  | 'components___image___component___section'
  | 'components___image___component___spaceId'
  | 'components___image___component___createdAt'
  | 'components___image___component___updatedAt'
  | 'components___image___component___heading'
  | 'components___image___component___label'
  | 'components___image___component___date'
  | 'components___image___component___subheading'
  | 'components___image___component___links'
  | 'components___image___component___namedStrings'
  | 'components___image___component___children'
  | 'components___image___spaceId'
  | 'components___image___createdAt'
  | 'components___image___updatedAt'
  | 'components___image___sys___type'
  | 'components___image___sys___revision'
  | 'components___image___parent___id'
  | 'components___image___parent___children'
  | 'components___image___children'
  | 'components___image___children___id'
  | 'components___image___children___children'
  | 'components___image___internal___content'
  | 'components___image___internal___contentDigest'
  | 'components___image___internal___description'
  | 'components___image___internal___fieldOwners'
  | 'components___image___internal___ignoreType'
  | 'components___image___internal___mediaType'
  | 'components___image___internal___owner'
  | 'components___image___internal___type'
  | 'components___date'
  | 'components___subheading'
  | 'components___links'
  | 'components___links___contentful_id'
  | 'components___links___id'
  | 'components___links___node_locale'
  | 'components___links___title'
  | 'components___links___slug'
  | 'components___links___label'
  | 'components___links___ref___contentful_id'
  | 'components___links___ref___id'
  | 'components___links___ref___node_locale'
  | 'components___links___ref___title'
  | 'components___links___ref___slug'
  | 'components___links___ref___sections'
  | 'components___links___ref___spaceId'
  | 'components___links___ref___createdAt'
  | 'components___links___ref___updatedAt'
  | 'components___links___ref___heading'
  | 'components___links___ref___link'
  | 'components___links___ref___subheading'
  | 'components___links___ref___gatsbyPath'
  | 'components___links___ref___children'
  | 'components___links___spaceId'
  | 'components___links___createdAt'
  | 'components___links___updatedAt'
  | 'components___links___sys___type'
  | 'components___links___sys___revision'
  | 'components___links___component'
  | 'components___links___component___contentful_id'
  | 'components___links___component___id'
  | 'components___links___component___node_locale'
  | 'components___links___component___title'
  | 'components___links___component___slug'
  | 'components___links___component___section'
  | 'components___links___component___spaceId'
  | 'components___links___component___createdAt'
  | 'components___links___component___updatedAt'
  | 'components___links___component___heading'
  | 'components___links___component___label'
  | 'components___links___component___date'
  | 'components___links___component___subheading'
  | 'components___links___component___links'
  | 'components___links___component___namedStrings'
  | 'components___links___component___children'
  | 'components___links___parent___id'
  | 'components___links___parent___children'
  | 'components___links___children'
  | 'components___links___children___id'
  | 'components___links___children___children'
  | 'components___links___internal___content'
  | 'components___links___internal___contentDigest'
  | 'components___links___internal___description'
  | 'components___links___internal___fieldOwners'
  | 'components___links___internal___ignoreType'
  | 'components___links___internal___mediaType'
  | 'components___links___internal___owner'
  | 'components___links___internal___type'
  | 'components___namedStrings'
  | 'components___namedStrings___contentful_id'
  | 'components___namedStrings___id'
  | 'components___namedStrings___node_locale'
  | 'components___namedStrings___name'
  | 'components___namedStrings___value'
  | 'components___namedStrings___component'
  | 'components___namedStrings___component___contentful_id'
  | 'components___namedStrings___component___id'
  | 'components___namedStrings___component___node_locale'
  | 'components___namedStrings___component___title'
  | 'components___namedStrings___component___slug'
  | 'components___namedStrings___component___section'
  | 'components___namedStrings___component___spaceId'
  | 'components___namedStrings___component___createdAt'
  | 'components___namedStrings___component___updatedAt'
  | 'components___namedStrings___component___heading'
  | 'components___namedStrings___component___label'
  | 'components___namedStrings___component___date'
  | 'components___namedStrings___component___subheading'
  | 'components___namedStrings___component___links'
  | 'components___namedStrings___component___namedStrings'
  | 'components___namedStrings___component___children'
  | 'components___namedStrings___spaceId'
  | 'components___namedStrings___createdAt'
  | 'components___namedStrings___updatedAt'
  | 'components___namedStrings___sys___type'
  | 'components___namedStrings___sys___revision'
  | 'components___namedStrings___parent___id'
  | 'components___namedStrings___parent___children'
  | 'components___namedStrings___children'
  | 'components___namedStrings___children___id'
  | 'components___namedStrings___children___children'
  | 'components___namedStrings___internal___content'
  | 'components___namedStrings___internal___contentDigest'
  | 'components___namedStrings___internal___description'
  | 'components___namedStrings___internal___fieldOwners'
  | 'components___namedStrings___internal___ignoreType'
  | 'components___namedStrings___internal___mediaType'
  | 'components___namedStrings___internal___owner'
  | 'components___namedStrings___internal___type'
  | 'components___parent___id'
  | 'components___parent___parent___id'
  | 'components___parent___parent___children'
  | 'components___parent___children'
  | 'components___parent___children___id'
  | 'components___parent___children___children'
  | 'components___parent___internal___content'
  | 'components___parent___internal___contentDigest'
  | 'components___parent___internal___description'
  | 'components___parent___internal___fieldOwners'
  | 'components___parent___internal___ignoreType'
  | 'components___parent___internal___mediaType'
  | 'components___parent___internal___owner'
  | 'components___parent___internal___type'
  | 'components___children'
  | 'components___children___id'
  | 'components___children___parent___id'
  | 'components___children___parent___children'
  | 'components___children___children'
  | 'components___children___children___id'
  | 'components___children___children___children'
  | 'components___children___internal___content'
  | 'components___children___internal___contentDigest'
  | 'components___children___internal___description'
  | 'components___children___internal___fieldOwners'
  | 'components___children___internal___ignoreType'
  | 'components___children___internal___mediaType'
  | 'components___children___internal___owner'
  | 'components___children___internal___type'
  | 'components___internal___content'
  | 'components___internal___contentDigest'
  | 'components___internal___description'
  | 'components___internal___fieldOwners'
  | 'components___internal___ignoreType'
  | 'components___internal___mediaType'
  | 'components___internal___owner'
  | 'components___internal___type'
  | 'page'
  | 'page___contentful_id'
  | 'page___id'
  | 'page___node_locale'
  | 'page___title'
  | 'page___slug'
  | 'page___sections'
  | 'page___sections___contentful_id'
  | 'page___sections___id'
  | 'page___sections___node_locale'
  | 'page___sections___title'
  | 'page___sections___slug'
  | 'page___sections___type'
  | 'page___sections___heading'
  | 'page___sections___spaceId'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___subheading'
  | 'page___sections___components'
  | 'page___sections___components___contentful_id'
  | 'page___sections___components___id'
  | 'page___sections___components___node_locale'
  | 'page___sections___components___title'
  | 'page___sections___components___slug'
  | 'page___sections___components___section'
  | 'page___sections___components___spaceId'
  | 'page___sections___components___createdAt'
  | 'page___sections___components___updatedAt'
  | 'page___sections___components___heading'
  | 'page___sections___components___label'
  | 'page___sections___components___date'
  | 'page___sections___components___subheading'
  | 'page___sections___components___links'
  | 'page___sections___components___namedStrings'
  | 'page___sections___components___children'
  | 'page___sections___page'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___id'
  | 'page___sections___page___node_locale'
  | 'page___sections___page___title'
  | 'page___sections___page___slug'
  | 'page___sections___page___sections'
  | 'page___sections___page___spaceId'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___heading'
  | 'page___sections___page___link'
  | 'page___sections___page___subheading'
  | 'page___sections___page___gatsbyPath'
  | 'page___sections___page___children'
  | 'page___sections___parent___id'
  | 'page___sections___parent___children'
  | 'page___sections___children'
  | 'page___sections___children___id'
  | 'page___sections___children___children'
  | 'page___sections___internal___content'
  | 'page___sections___internal___contentDigest'
  | 'page___sections___internal___description'
  | 'page___sections___internal___fieldOwners'
  | 'page___sections___internal___ignoreType'
  | 'page___sections___internal___mediaType'
  | 'page___sections___internal___owner'
  | 'page___sections___internal___type'
  | 'page___spaceId'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___type'
  | 'page___sys___revision'
  | 'page___heading'
  | 'page___link'
  | 'page___link___contentful_id'
  | 'page___link___id'
  | 'page___link___node_locale'
  | 'page___link___title'
  | 'page___link___slug'
  | 'page___link___label'
  | 'page___link___ref___contentful_id'
  | 'page___link___ref___id'
  | 'page___link___ref___node_locale'
  | 'page___link___ref___title'
  | 'page___link___ref___slug'
  | 'page___link___ref___sections'
  | 'page___link___ref___spaceId'
  | 'page___link___ref___createdAt'
  | 'page___link___ref___updatedAt'
  | 'page___link___ref___heading'
  | 'page___link___ref___link'
  | 'page___link___ref___subheading'
  | 'page___link___ref___gatsbyPath'
  | 'page___link___ref___children'
  | 'page___link___spaceId'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___component'
  | 'page___link___component___contentful_id'
  | 'page___link___component___id'
  | 'page___link___component___node_locale'
  | 'page___link___component___title'
  | 'page___link___component___slug'
  | 'page___link___component___section'
  | 'page___link___component___spaceId'
  | 'page___link___component___createdAt'
  | 'page___link___component___updatedAt'
  | 'page___link___component___heading'
  | 'page___link___component___label'
  | 'page___link___component___date'
  | 'page___link___component___subheading'
  | 'page___link___component___links'
  | 'page___link___component___namedStrings'
  | 'page___link___component___children'
  | 'page___link___parent___id'
  | 'page___link___parent___children'
  | 'page___link___children'
  | 'page___link___children___id'
  | 'page___link___children___children'
  | 'page___link___internal___content'
  | 'page___link___internal___contentDigest'
  | 'page___link___internal___description'
  | 'page___link___internal___fieldOwners'
  | 'page___link___internal___ignoreType'
  | 'page___link___internal___mediaType'
  | 'page___link___internal___owner'
  | 'page___link___internal___type'
  | 'page___subheading'
  | 'page___gatsbyPath'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSectionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulSectionGroupConnectionDistinctArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionGroupConnectionMaxArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionGroupConnectionMinArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionGroupConnectionSumArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSectionFieldsEnum;
};

export type ContentfulSectionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulSectionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionMaxArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionMinArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionSumArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'sections'
  | 'sections___contentful_id'
  | 'sections___id'
  | 'sections___node_locale'
  | 'sections___title'
  | 'sections___slug'
  | 'sections___type'
  | 'sections___heading'
  | 'sections___spaceId'
  | 'sections___createdAt'
  | 'sections___updatedAt'
  | 'sections___sys___type'
  | 'sections___sys___revision'
  | 'sections___subheading'
  | 'sections___components'
  | 'sections___components___contentful_id'
  | 'sections___components___id'
  | 'sections___components___node_locale'
  | 'sections___components___title'
  | 'sections___components___slug'
  | 'sections___components___richText___raw'
  | 'sections___components___richText___references'
  | 'sections___components___section'
  | 'sections___components___section___contentful_id'
  | 'sections___components___section___id'
  | 'sections___components___section___node_locale'
  | 'sections___components___section___title'
  | 'sections___components___section___slug'
  | 'sections___components___section___type'
  | 'sections___components___section___heading'
  | 'sections___components___section___spaceId'
  | 'sections___components___section___createdAt'
  | 'sections___components___section___updatedAt'
  | 'sections___components___section___subheading'
  | 'sections___components___section___components'
  | 'sections___components___section___page'
  | 'sections___components___section___children'
  | 'sections___components___spaceId'
  | 'sections___components___createdAt'
  | 'sections___components___updatedAt'
  | 'sections___components___sys___type'
  | 'sections___components___sys___revision'
  | 'sections___components___heading'
  | 'sections___components___label'
  | 'sections___components___image___contentful_id'
  | 'sections___components___image___id'
  | 'sections___components___image___node_locale'
  | 'sections___components___image___altText'
  | 'sections___components___image___caption'
  | 'sections___components___image___component'
  | 'sections___components___image___spaceId'
  | 'sections___components___image___createdAt'
  | 'sections___components___image___updatedAt'
  | 'sections___components___image___children'
  | 'sections___components___date'
  | 'sections___components___subheading'
  | 'sections___components___links'
  | 'sections___components___links___contentful_id'
  | 'sections___components___links___id'
  | 'sections___components___links___node_locale'
  | 'sections___components___links___title'
  | 'sections___components___links___slug'
  | 'sections___components___links___label'
  | 'sections___components___links___spaceId'
  | 'sections___components___links___createdAt'
  | 'sections___components___links___updatedAt'
  | 'sections___components___links___component'
  | 'sections___components___links___children'
  | 'sections___components___namedStrings'
  | 'sections___components___namedStrings___contentful_id'
  | 'sections___components___namedStrings___id'
  | 'sections___components___namedStrings___node_locale'
  | 'sections___components___namedStrings___name'
  | 'sections___components___namedStrings___value'
  | 'sections___components___namedStrings___component'
  | 'sections___components___namedStrings___spaceId'
  | 'sections___components___namedStrings___createdAt'
  | 'sections___components___namedStrings___updatedAt'
  | 'sections___components___namedStrings___children'
  | 'sections___components___parent___id'
  | 'sections___components___parent___children'
  | 'sections___components___children'
  | 'sections___components___children___id'
  | 'sections___components___children___children'
  | 'sections___components___internal___content'
  | 'sections___components___internal___contentDigest'
  | 'sections___components___internal___description'
  | 'sections___components___internal___fieldOwners'
  | 'sections___components___internal___ignoreType'
  | 'sections___components___internal___mediaType'
  | 'sections___components___internal___owner'
  | 'sections___components___internal___type'
  | 'sections___page'
  | 'sections___page___contentful_id'
  | 'sections___page___id'
  | 'sections___page___node_locale'
  | 'sections___page___title'
  | 'sections___page___slug'
  | 'sections___page___sections'
  | 'sections___page___sections___contentful_id'
  | 'sections___page___sections___id'
  | 'sections___page___sections___node_locale'
  | 'sections___page___sections___title'
  | 'sections___page___sections___slug'
  | 'sections___page___sections___type'
  | 'sections___page___sections___heading'
  | 'sections___page___sections___spaceId'
  | 'sections___page___sections___createdAt'
  | 'sections___page___sections___updatedAt'
  | 'sections___page___sections___subheading'
  | 'sections___page___sections___components'
  | 'sections___page___sections___page'
  | 'sections___page___sections___children'
  | 'sections___page___spaceId'
  | 'sections___page___createdAt'
  | 'sections___page___updatedAt'
  | 'sections___page___sys___type'
  | 'sections___page___sys___revision'
  | 'sections___page___heading'
  | 'sections___page___link'
  | 'sections___page___link___contentful_id'
  | 'sections___page___link___id'
  | 'sections___page___link___node_locale'
  | 'sections___page___link___title'
  | 'sections___page___link___slug'
  | 'sections___page___link___label'
  | 'sections___page___link___spaceId'
  | 'sections___page___link___createdAt'
  | 'sections___page___link___updatedAt'
  | 'sections___page___link___component'
  | 'sections___page___link___children'
  | 'sections___page___subheading'
  | 'sections___page___gatsbyPath'
  | 'sections___page___parent___id'
  | 'sections___page___parent___children'
  | 'sections___page___children'
  | 'sections___page___children___id'
  | 'sections___page___children___children'
  | 'sections___page___internal___content'
  | 'sections___page___internal___contentDigest'
  | 'sections___page___internal___description'
  | 'sections___page___internal___fieldOwners'
  | 'sections___page___internal___ignoreType'
  | 'sections___page___internal___mediaType'
  | 'sections___page___internal___owner'
  | 'sections___page___internal___type'
  | 'sections___parent___id'
  | 'sections___parent___parent___id'
  | 'sections___parent___parent___children'
  | 'sections___parent___children'
  | 'sections___parent___children___id'
  | 'sections___parent___children___children'
  | 'sections___parent___internal___content'
  | 'sections___parent___internal___contentDigest'
  | 'sections___parent___internal___description'
  | 'sections___parent___internal___fieldOwners'
  | 'sections___parent___internal___ignoreType'
  | 'sections___parent___internal___mediaType'
  | 'sections___parent___internal___owner'
  | 'sections___parent___internal___type'
  | 'sections___children'
  | 'sections___children___id'
  | 'sections___children___parent___id'
  | 'sections___children___parent___children'
  | 'sections___children___children'
  | 'sections___children___children___id'
  | 'sections___children___children___children'
  | 'sections___children___internal___content'
  | 'sections___children___internal___contentDigest'
  | 'sections___children___internal___description'
  | 'sections___children___internal___fieldOwners'
  | 'sections___children___internal___ignoreType'
  | 'sections___children___internal___mediaType'
  | 'sections___children___internal___owner'
  | 'sections___children___internal___type'
  | 'sections___internal___content'
  | 'sections___internal___contentDigest'
  | 'sections___internal___description'
  | 'sections___internal___fieldOwners'
  | 'sections___internal___ignoreType'
  | 'sections___internal___mediaType'
  | 'sections___internal___owner'
  | 'sections___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'heading'
  | 'link'
  | 'link___contentful_id'
  | 'link___id'
  | 'link___node_locale'
  | 'link___title'
  | 'link___slug'
  | 'link___label'
  | 'link___ref___contentful_id'
  | 'link___ref___id'
  | 'link___ref___node_locale'
  | 'link___ref___title'
  | 'link___ref___slug'
  | 'link___ref___sections'
  | 'link___ref___sections___contentful_id'
  | 'link___ref___sections___id'
  | 'link___ref___sections___node_locale'
  | 'link___ref___sections___title'
  | 'link___ref___sections___slug'
  | 'link___ref___sections___type'
  | 'link___ref___sections___heading'
  | 'link___ref___sections___spaceId'
  | 'link___ref___sections___createdAt'
  | 'link___ref___sections___updatedAt'
  | 'link___ref___sections___subheading'
  | 'link___ref___sections___components'
  | 'link___ref___sections___page'
  | 'link___ref___sections___children'
  | 'link___ref___spaceId'
  | 'link___ref___createdAt'
  | 'link___ref___updatedAt'
  | 'link___ref___sys___type'
  | 'link___ref___sys___revision'
  | 'link___ref___heading'
  | 'link___ref___link'
  | 'link___ref___link___contentful_id'
  | 'link___ref___link___id'
  | 'link___ref___link___node_locale'
  | 'link___ref___link___title'
  | 'link___ref___link___slug'
  | 'link___ref___link___label'
  | 'link___ref___link___spaceId'
  | 'link___ref___link___createdAt'
  | 'link___ref___link___updatedAt'
  | 'link___ref___link___component'
  | 'link___ref___link___children'
  | 'link___ref___subheading'
  | 'link___ref___gatsbyPath'
  | 'link___ref___parent___id'
  | 'link___ref___parent___children'
  | 'link___ref___children'
  | 'link___ref___children___id'
  | 'link___ref___children___children'
  | 'link___ref___internal___content'
  | 'link___ref___internal___contentDigest'
  | 'link___ref___internal___description'
  | 'link___ref___internal___fieldOwners'
  | 'link___ref___internal___ignoreType'
  | 'link___ref___internal___mediaType'
  | 'link___ref___internal___owner'
  | 'link___ref___internal___type'
  | 'link___spaceId'
  | 'link___createdAt'
  | 'link___updatedAt'
  | 'link___sys___type'
  | 'link___sys___revision'
  | 'link___component'
  | 'link___component___contentful_id'
  | 'link___component___id'
  | 'link___component___node_locale'
  | 'link___component___title'
  | 'link___component___slug'
  | 'link___component___richText___raw'
  | 'link___component___richText___references'
  | 'link___component___section'
  | 'link___component___section___contentful_id'
  | 'link___component___section___id'
  | 'link___component___section___node_locale'
  | 'link___component___section___title'
  | 'link___component___section___slug'
  | 'link___component___section___type'
  | 'link___component___section___heading'
  | 'link___component___section___spaceId'
  | 'link___component___section___createdAt'
  | 'link___component___section___updatedAt'
  | 'link___component___section___subheading'
  | 'link___component___section___components'
  | 'link___component___section___page'
  | 'link___component___section___children'
  | 'link___component___spaceId'
  | 'link___component___createdAt'
  | 'link___component___updatedAt'
  | 'link___component___sys___type'
  | 'link___component___sys___revision'
  | 'link___component___heading'
  | 'link___component___label'
  | 'link___component___image___contentful_id'
  | 'link___component___image___id'
  | 'link___component___image___node_locale'
  | 'link___component___image___altText'
  | 'link___component___image___caption'
  | 'link___component___image___component'
  | 'link___component___image___spaceId'
  | 'link___component___image___createdAt'
  | 'link___component___image___updatedAt'
  | 'link___component___image___children'
  | 'link___component___date'
  | 'link___component___subheading'
  | 'link___component___links'
  | 'link___component___links___contentful_id'
  | 'link___component___links___id'
  | 'link___component___links___node_locale'
  | 'link___component___links___title'
  | 'link___component___links___slug'
  | 'link___component___links___label'
  | 'link___component___links___spaceId'
  | 'link___component___links___createdAt'
  | 'link___component___links___updatedAt'
  | 'link___component___links___component'
  | 'link___component___links___children'
  | 'link___component___namedStrings'
  | 'link___component___namedStrings___contentful_id'
  | 'link___component___namedStrings___id'
  | 'link___component___namedStrings___node_locale'
  | 'link___component___namedStrings___name'
  | 'link___component___namedStrings___value'
  | 'link___component___namedStrings___component'
  | 'link___component___namedStrings___spaceId'
  | 'link___component___namedStrings___createdAt'
  | 'link___component___namedStrings___updatedAt'
  | 'link___component___namedStrings___children'
  | 'link___component___parent___id'
  | 'link___component___parent___children'
  | 'link___component___children'
  | 'link___component___children___id'
  | 'link___component___children___children'
  | 'link___component___internal___content'
  | 'link___component___internal___contentDigest'
  | 'link___component___internal___description'
  | 'link___component___internal___fieldOwners'
  | 'link___component___internal___ignoreType'
  | 'link___component___internal___mediaType'
  | 'link___component___internal___owner'
  | 'link___component___internal___type'
  | 'link___parent___id'
  | 'link___parent___parent___id'
  | 'link___parent___parent___children'
  | 'link___parent___children'
  | 'link___parent___children___id'
  | 'link___parent___children___children'
  | 'link___parent___internal___content'
  | 'link___parent___internal___contentDigest'
  | 'link___parent___internal___description'
  | 'link___parent___internal___fieldOwners'
  | 'link___parent___internal___ignoreType'
  | 'link___parent___internal___mediaType'
  | 'link___parent___internal___owner'
  | 'link___parent___internal___type'
  | 'link___children'
  | 'link___children___id'
  | 'link___children___parent___id'
  | 'link___children___parent___children'
  | 'link___children___children'
  | 'link___children___children___id'
  | 'link___children___children___children'
  | 'link___children___internal___content'
  | 'link___children___internal___contentDigest'
  | 'link___children___internal___description'
  | 'link___children___internal___fieldOwners'
  | 'link___children___internal___ignoreType'
  | 'link___children___internal___mediaType'
  | 'link___children___internal___owner'
  | 'link___children___internal___type'
  | 'link___internal___content'
  | 'link___internal___contentDigest'
  | 'link___internal___description'
  | 'link___internal___fieldOwners'
  | 'link___internal___ignoreType'
  | 'link___internal___mediaType'
  | 'link___internal___owner'
  | 'link___internal___type'
  | 'subheading'
  | 'gatsbyPath'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulPageGroupConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageGroupConnectionMaxArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageGroupConnectionMinArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageGroupConnectionSumArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulComponentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentEdge>;
  nodes: Array<ContentfulComponent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentGroupConnection>;
};


export type ContentfulComponentConnectionDistinctArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentConnectionMaxArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentConnectionMinArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentConnectionSumArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFieldsEnum;
};

export type ContentfulComponentEdge = {
  next?: Maybe<ContentfulComponent>;
  node: ContentfulComponent;
  previous?: Maybe<ContentfulComponent>;
};

export type ContentfulComponentFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'richText___raw'
  | 'richText___references'
  | 'richText___references___contentful_id'
  | 'richText___references___id'
  | 'richText___references___node_locale'
  | 'richText___references___title'
  | 'richText___references___slug'
  | 'richText___references___sections'
  | 'richText___references___sections___contentful_id'
  | 'richText___references___sections___id'
  | 'richText___references___sections___node_locale'
  | 'richText___references___sections___title'
  | 'richText___references___sections___slug'
  | 'richText___references___sections___type'
  | 'richText___references___sections___heading'
  | 'richText___references___sections___spaceId'
  | 'richText___references___sections___createdAt'
  | 'richText___references___sections___updatedAt'
  | 'richText___references___sections___subheading'
  | 'richText___references___sections___components'
  | 'richText___references___sections___page'
  | 'richText___references___sections___children'
  | 'richText___references___spaceId'
  | 'richText___references___createdAt'
  | 'richText___references___updatedAt'
  | 'richText___references___sys___type'
  | 'richText___references___sys___revision'
  | 'richText___references___heading'
  | 'richText___references___link'
  | 'richText___references___link___contentful_id'
  | 'richText___references___link___id'
  | 'richText___references___link___node_locale'
  | 'richText___references___link___title'
  | 'richText___references___link___slug'
  | 'richText___references___link___label'
  | 'richText___references___link___spaceId'
  | 'richText___references___link___createdAt'
  | 'richText___references___link___updatedAt'
  | 'richText___references___link___component'
  | 'richText___references___link___children'
  | 'richText___references___subheading'
  | 'richText___references___gatsbyPath'
  | 'richText___references___parent___id'
  | 'richText___references___parent___children'
  | 'richText___references___children'
  | 'richText___references___children___id'
  | 'richText___references___children___children'
  | 'richText___references___internal___content'
  | 'richText___references___internal___contentDigest'
  | 'richText___references___internal___description'
  | 'richText___references___internal___fieldOwners'
  | 'richText___references___internal___ignoreType'
  | 'richText___references___internal___mediaType'
  | 'richText___references___internal___owner'
  | 'richText___references___internal___type'
  | 'section'
  | 'section___contentful_id'
  | 'section___id'
  | 'section___node_locale'
  | 'section___title'
  | 'section___slug'
  | 'section___type'
  | 'section___heading'
  | 'section___spaceId'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___subheading'
  | 'section___components'
  | 'section___components___contentful_id'
  | 'section___components___id'
  | 'section___components___node_locale'
  | 'section___components___title'
  | 'section___components___slug'
  | 'section___components___richText___raw'
  | 'section___components___richText___references'
  | 'section___components___section'
  | 'section___components___section___contentful_id'
  | 'section___components___section___id'
  | 'section___components___section___node_locale'
  | 'section___components___section___title'
  | 'section___components___section___slug'
  | 'section___components___section___type'
  | 'section___components___section___heading'
  | 'section___components___section___spaceId'
  | 'section___components___section___createdAt'
  | 'section___components___section___updatedAt'
  | 'section___components___section___subheading'
  | 'section___components___section___components'
  | 'section___components___section___page'
  | 'section___components___section___children'
  | 'section___components___spaceId'
  | 'section___components___createdAt'
  | 'section___components___updatedAt'
  | 'section___components___sys___type'
  | 'section___components___sys___revision'
  | 'section___components___heading'
  | 'section___components___label'
  | 'section___components___image___contentful_id'
  | 'section___components___image___id'
  | 'section___components___image___node_locale'
  | 'section___components___image___altText'
  | 'section___components___image___caption'
  | 'section___components___image___component'
  | 'section___components___image___spaceId'
  | 'section___components___image___createdAt'
  | 'section___components___image___updatedAt'
  | 'section___components___image___children'
  | 'section___components___date'
  | 'section___components___subheading'
  | 'section___components___links'
  | 'section___components___links___contentful_id'
  | 'section___components___links___id'
  | 'section___components___links___node_locale'
  | 'section___components___links___title'
  | 'section___components___links___slug'
  | 'section___components___links___label'
  | 'section___components___links___spaceId'
  | 'section___components___links___createdAt'
  | 'section___components___links___updatedAt'
  | 'section___components___links___component'
  | 'section___components___links___children'
  | 'section___components___namedStrings'
  | 'section___components___namedStrings___contentful_id'
  | 'section___components___namedStrings___id'
  | 'section___components___namedStrings___node_locale'
  | 'section___components___namedStrings___name'
  | 'section___components___namedStrings___value'
  | 'section___components___namedStrings___component'
  | 'section___components___namedStrings___spaceId'
  | 'section___components___namedStrings___createdAt'
  | 'section___components___namedStrings___updatedAt'
  | 'section___components___namedStrings___children'
  | 'section___components___parent___id'
  | 'section___components___parent___children'
  | 'section___components___children'
  | 'section___components___children___id'
  | 'section___components___children___children'
  | 'section___components___internal___content'
  | 'section___components___internal___contentDigest'
  | 'section___components___internal___description'
  | 'section___components___internal___fieldOwners'
  | 'section___components___internal___ignoreType'
  | 'section___components___internal___mediaType'
  | 'section___components___internal___owner'
  | 'section___components___internal___type'
  | 'section___page'
  | 'section___page___contentful_id'
  | 'section___page___id'
  | 'section___page___node_locale'
  | 'section___page___title'
  | 'section___page___slug'
  | 'section___page___sections'
  | 'section___page___sections___contentful_id'
  | 'section___page___sections___id'
  | 'section___page___sections___node_locale'
  | 'section___page___sections___title'
  | 'section___page___sections___slug'
  | 'section___page___sections___type'
  | 'section___page___sections___heading'
  | 'section___page___sections___spaceId'
  | 'section___page___sections___createdAt'
  | 'section___page___sections___updatedAt'
  | 'section___page___sections___subheading'
  | 'section___page___sections___components'
  | 'section___page___sections___page'
  | 'section___page___sections___children'
  | 'section___page___spaceId'
  | 'section___page___createdAt'
  | 'section___page___updatedAt'
  | 'section___page___sys___type'
  | 'section___page___sys___revision'
  | 'section___page___heading'
  | 'section___page___link'
  | 'section___page___link___contentful_id'
  | 'section___page___link___id'
  | 'section___page___link___node_locale'
  | 'section___page___link___title'
  | 'section___page___link___slug'
  | 'section___page___link___label'
  | 'section___page___link___spaceId'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___component'
  | 'section___page___link___children'
  | 'section___page___subheading'
  | 'section___page___gatsbyPath'
  | 'section___page___parent___id'
  | 'section___page___parent___children'
  | 'section___page___children'
  | 'section___page___children___id'
  | 'section___page___children___children'
  | 'section___page___internal___content'
  | 'section___page___internal___contentDigest'
  | 'section___page___internal___description'
  | 'section___page___internal___fieldOwners'
  | 'section___page___internal___ignoreType'
  | 'section___page___internal___mediaType'
  | 'section___page___internal___owner'
  | 'section___page___internal___type'
  | 'section___parent___id'
  | 'section___parent___parent___id'
  | 'section___parent___parent___children'
  | 'section___parent___children'
  | 'section___parent___children___id'
  | 'section___parent___children___children'
  | 'section___parent___internal___content'
  | 'section___parent___internal___contentDigest'
  | 'section___parent___internal___description'
  | 'section___parent___internal___fieldOwners'
  | 'section___parent___internal___ignoreType'
  | 'section___parent___internal___mediaType'
  | 'section___parent___internal___owner'
  | 'section___parent___internal___type'
  | 'section___children'
  | 'section___children___id'
  | 'section___children___parent___id'
  | 'section___children___parent___children'
  | 'section___children___children'
  | 'section___children___children___id'
  | 'section___children___children___children'
  | 'section___children___internal___content'
  | 'section___children___internal___contentDigest'
  | 'section___children___internal___description'
  | 'section___children___internal___fieldOwners'
  | 'section___children___internal___ignoreType'
  | 'section___children___internal___mediaType'
  | 'section___children___internal___owner'
  | 'section___children___internal___type'
  | 'section___internal___content'
  | 'section___internal___contentDigest'
  | 'section___internal___description'
  | 'section___internal___fieldOwners'
  | 'section___internal___ignoreType'
  | 'section___internal___mediaType'
  | 'section___internal___owner'
  | 'section___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'heading'
  | 'label'
  | 'image___contentful_id'
  | 'image___id'
  | 'image___node_locale'
  | 'image___altText'
  | 'image___caption'
  | 'image___asset___contentful_id'
  | 'image___asset___id'
  | 'image___asset___gatsbyImageData'
  | 'image___asset___spaceId'
  | 'image___asset___createdAt'
  | 'image___asset___updatedAt'
  | 'image___asset___file___url'
  | 'image___asset___file___fileName'
  | 'image___asset___file___contentType'
  | 'image___asset___title'
  | 'image___asset___description'
  | 'image___asset___node_locale'
  | 'image___asset___sys___type'
  | 'image___asset___sys___revision'
  | 'image___asset___url'
  | 'image___asset___placeholderUrl'
  | 'image___asset___mimeType'
  | 'image___asset___filename'
  | 'image___asset___width'
  | 'image___asset___height'
  | 'image___asset___size'
  | 'image___asset___parent___id'
  | 'image___asset___parent___children'
  | 'image___asset___children'
  | 'image___asset___children___id'
  | 'image___asset___children___children'
  | 'image___asset___internal___content'
  | 'image___asset___internal___contentDigest'
  | 'image___asset___internal___description'
  | 'image___asset___internal___fieldOwners'
  | 'image___asset___internal___ignoreType'
  | 'image___asset___internal___mediaType'
  | 'image___asset___internal___owner'
  | 'image___asset___internal___type'
  | 'image___asset___filesize'
  | 'image___asset___publicUrl'
  | 'image___asset___resize___width'
  | 'image___asset___resize___height'
  | 'image___asset___resize___src'
  | 'image___asset___gatsbyImage'
  | 'image___component'
  | 'image___component___contentful_id'
  | 'image___component___id'
  | 'image___component___node_locale'
  | 'image___component___title'
  | 'image___component___slug'
  | 'image___component___richText___raw'
  | 'image___component___richText___references'
  | 'image___component___section'
  | 'image___component___section___contentful_id'
  | 'image___component___section___id'
  | 'image___component___section___node_locale'
  | 'image___component___section___title'
  | 'image___component___section___slug'
  | 'image___component___section___type'
  | 'image___component___section___heading'
  | 'image___component___section___spaceId'
  | 'image___component___section___createdAt'
  | 'image___component___section___updatedAt'
  | 'image___component___section___subheading'
  | 'image___component___section___components'
  | 'image___component___section___page'
  | 'image___component___section___children'
  | 'image___component___spaceId'
  | 'image___component___createdAt'
  | 'image___component___updatedAt'
  | 'image___component___sys___type'
  | 'image___component___sys___revision'
  | 'image___component___heading'
  | 'image___component___label'
  | 'image___component___image___contentful_id'
  | 'image___component___image___id'
  | 'image___component___image___node_locale'
  | 'image___component___image___altText'
  | 'image___component___image___caption'
  | 'image___component___image___component'
  | 'image___component___image___spaceId'
  | 'image___component___image___createdAt'
  | 'image___component___image___updatedAt'
  | 'image___component___image___children'
  | 'image___component___date'
  | 'image___component___subheading'
  | 'image___component___links'
  | 'image___component___links___contentful_id'
  | 'image___component___links___id'
  | 'image___component___links___node_locale'
  | 'image___component___links___title'
  | 'image___component___links___slug'
  | 'image___component___links___label'
  | 'image___component___links___spaceId'
  | 'image___component___links___createdAt'
  | 'image___component___links___updatedAt'
  | 'image___component___links___component'
  | 'image___component___links___children'
  | 'image___component___namedStrings'
  | 'image___component___namedStrings___contentful_id'
  | 'image___component___namedStrings___id'
  | 'image___component___namedStrings___node_locale'
  | 'image___component___namedStrings___name'
  | 'image___component___namedStrings___value'
  | 'image___component___namedStrings___component'
  | 'image___component___namedStrings___spaceId'
  | 'image___component___namedStrings___createdAt'
  | 'image___component___namedStrings___updatedAt'
  | 'image___component___namedStrings___children'
  | 'image___component___parent___id'
  | 'image___component___parent___children'
  | 'image___component___children'
  | 'image___component___children___id'
  | 'image___component___children___children'
  | 'image___component___internal___content'
  | 'image___component___internal___contentDigest'
  | 'image___component___internal___description'
  | 'image___component___internal___fieldOwners'
  | 'image___component___internal___ignoreType'
  | 'image___component___internal___mediaType'
  | 'image___component___internal___owner'
  | 'image___component___internal___type'
  | 'image___spaceId'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___sys___type'
  | 'image___sys___revision'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'date'
  | 'subheading'
  | 'links'
  | 'links___contentful_id'
  | 'links___id'
  | 'links___node_locale'
  | 'links___title'
  | 'links___slug'
  | 'links___label'
  | 'links___ref___contentful_id'
  | 'links___ref___id'
  | 'links___ref___node_locale'
  | 'links___ref___title'
  | 'links___ref___slug'
  | 'links___ref___sections'
  | 'links___ref___sections___contentful_id'
  | 'links___ref___sections___id'
  | 'links___ref___sections___node_locale'
  | 'links___ref___sections___title'
  | 'links___ref___sections___slug'
  | 'links___ref___sections___type'
  | 'links___ref___sections___heading'
  | 'links___ref___sections___spaceId'
  | 'links___ref___sections___createdAt'
  | 'links___ref___sections___updatedAt'
  | 'links___ref___sections___subheading'
  | 'links___ref___sections___components'
  | 'links___ref___sections___page'
  | 'links___ref___sections___children'
  | 'links___ref___spaceId'
  | 'links___ref___createdAt'
  | 'links___ref___updatedAt'
  | 'links___ref___sys___type'
  | 'links___ref___sys___revision'
  | 'links___ref___heading'
  | 'links___ref___link'
  | 'links___ref___link___contentful_id'
  | 'links___ref___link___id'
  | 'links___ref___link___node_locale'
  | 'links___ref___link___title'
  | 'links___ref___link___slug'
  | 'links___ref___link___label'
  | 'links___ref___link___spaceId'
  | 'links___ref___link___createdAt'
  | 'links___ref___link___updatedAt'
  | 'links___ref___link___component'
  | 'links___ref___link___children'
  | 'links___ref___subheading'
  | 'links___ref___gatsbyPath'
  | 'links___ref___parent___id'
  | 'links___ref___parent___children'
  | 'links___ref___children'
  | 'links___ref___children___id'
  | 'links___ref___children___children'
  | 'links___ref___internal___content'
  | 'links___ref___internal___contentDigest'
  | 'links___ref___internal___description'
  | 'links___ref___internal___fieldOwners'
  | 'links___ref___internal___ignoreType'
  | 'links___ref___internal___mediaType'
  | 'links___ref___internal___owner'
  | 'links___ref___internal___type'
  | 'links___spaceId'
  | 'links___createdAt'
  | 'links___updatedAt'
  | 'links___sys___type'
  | 'links___sys___revision'
  | 'links___component'
  | 'links___component___contentful_id'
  | 'links___component___id'
  | 'links___component___node_locale'
  | 'links___component___title'
  | 'links___component___slug'
  | 'links___component___richText___raw'
  | 'links___component___richText___references'
  | 'links___component___section'
  | 'links___component___section___contentful_id'
  | 'links___component___section___id'
  | 'links___component___section___node_locale'
  | 'links___component___section___title'
  | 'links___component___section___slug'
  | 'links___component___section___type'
  | 'links___component___section___heading'
  | 'links___component___section___spaceId'
  | 'links___component___section___createdAt'
  | 'links___component___section___updatedAt'
  | 'links___component___section___subheading'
  | 'links___component___section___components'
  | 'links___component___section___page'
  | 'links___component___section___children'
  | 'links___component___spaceId'
  | 'links___component___createdAt'
  | 'links___component___updatedAt'
  | 'links___component___sys___type'
  | 'links___component___sys___revision'
  | 'links___component___heading'
  | 'links___component___label'
  | 'links___component___image___contentful_id'
  | 'links___component___image___id'
  | 'links___component___image___node_locale'
  | 'links___component___image___altText'
  | 'links___component___image___caption'
  | 'links___component___image___component'
  | 'links___component___image___spaceId'
  | 'links___component___image___createdAt'
  | 'links___component___image___updatedAt'
  | 'links___component___image___children'
  | 'links___component___date'
  | 'links___component___subheading'
  | 'links___component___links'
  | 'links___component___links___contentful_id'
  | 'links___component___links___id'
  | 'links___component___links___node_locale'
  | 'links___component___links___title'
  | 'links___component___links___slug'
  | 'links___component___links___label'
  | 'links___component___links___spaceId'
  | 'links___component___links___createdAt'
  | 'links___component___links___updatedAt'
  | 'links___component___links___component'
  | 'links___component___links___children'
  | 'links___component___namedStrings'
  | 'links___component___namedStrings___contentful_id'
  | 'links___component___namedStrings___id'
  | 'links___component___namedStrings___node_locale'
  | 'links___component___namedStrings___name'
  | 'links___component___namedStrings___value'
  | 'links___component___namedStrings___component'
  | 'links___component___namedStrings___spaceId'
  | 'links___component___namedStrings___createdAt'
  | 'links___component___namedStrings___updatedAt'
  | 'links___component___namedStrings___children'
  | 'links___component___parent___id'
  | 'links___component___parent___children'
  | 'links___component___children'
  | 'links___component___children___id'
  | 'links___component___children___children'
  | 'links___component___internal___content'
  | 'links___component___internal___contentDigest'
  | 'links___component___internal___description'
  | 'links___component___internal___fieldOwners'
  | 'links___component___internal___ignoreType'
  | 'links___component___internal___mediaType'
  | 'links___component___internal___owner'
  | 'links___component___internal___type'
  | 'links___parent___id'
  | 'links___parent___parent___id'
  | 'links___parent___parent___children'
  | 'links___parent___children'
  | 'links___parent___children___id'
  | 'links___parent___children___children'
  | 'links___parent___internal___content'
  | 'links___parent___internal___contentDigest'
  | 'links___parent___internal___description'
  | 'links___parent___internal___fieldOwners'
  | 'links___parent___internal___ignoreType'
  | 'links___parent___internal___mediaType'
  | 'links___parent___internal___owner'
  | 'links___parent___internal___type'
  | 'links___children'
  | 'links___children___id'
  | 'links___children___parent___id'
  | 'links___children___parent___children'
  | 'links___children___children'
  | 'links___children___children___id'
  | 'links___children___children___children'
  | 'links___children___internal___content'
  | 'links___children___internal___contentDigest'
  | 'links___children___internal___description'
  | 'links___children___internal___fieldOwners'
  | 'links___children___internal___ignoreType'
  | 'links___children___internal___mediaType'
  | 'links___children___internal___owner'
  | 'links___children___internal___type'
  | 'links___internal___content'
  | 'links___internal___contentDigest'
  | 'links___internal___description'
  | 'links___internal___fieldOwners'
  | 'links___internal___ignoreType'
  | 'links___internal___mediaType'
  | 'links___internal___owner'
  | 'links___internal___type'
  | 'namedStrings'
  | 'namedStrings___contentful_id'
  | 'namedStrings___id'
  | 'namedStrings___node_locale'
  | 'namedStrings___name'
  | 'namedStrings___value'
  | 'namedStrings___component'
  | 'namedStrings___component___contentful_id'
  | 'namedStrings___component___id'
  | 'namedStrings___component___node_locale'
  | 'namedStrings___component___title'
  | 'namedStrings___component___slug'
  | 'namedStrings___component___richText___raw'
  | 'namedStrings___component___richText___references'
  | 'namedStrings___component___section'
  | 'namedStrings___component___section___contentful_id'
  | 'namedStrings___component___section___id'
  | 'namedStrings___component___section___node_locale'
  | 'namedStrings___component___section___title'
  | 'namedStrings___component___section___slug'
  | 'namedStrings___component___section___type'
  | 'namedStrings___component___section___heading'
  | 'namedStrings___component___section___spaceId'
  | 'namedStrings___component___section___createdAt'
  | 'namedStrings___component___section___updatedAt'
  | 'namedStrings___component___section___subheading'
  | 'namedStrings___component___section___components'
  | 'namedStrings___component___section___page'
  | 'namedStrings___component___section___children'
  | 'namedStrings___component___spaceId'
  | 'namedStrings___component___createdAt'
  | 'namedStrings___component___updatedAt'
  | 'namedStrings___component___sys___type'
  | 'namedStrings___component___sys___revision'
  | 'namedStrings___component___heading'
  | 'namedStrings___component___label'
  | 'namedStrings___component___image___contentful_id'
  | 'namedStrings___component___image___id'
  | 'namedStrings___component___image___node_locale'
  | 'namedStrings___component___image___altText'
  | 'namedStrings___component___image___caption'
  | 'namedStrings___component___image___component'
  | 'namedStrings___component___image___spaceId'
  | 'namedStrings___component___image___createdAt'
  | 'namedStrings___component___image___updatedAt'
  | 'namedStrings___component___image___children'
  | 'namedStrings___component___date'
  | 'namedStrings___component___subheading'
  | 'namedStrings___component___links'
  | 'namedStrings___component___links___contentful_id'
  | 'namedStrings___component___links___id'
  | 'namedStrings___component___links___node_locale'
  | 'namedStrings___component___links___title'
  | 'namedStrings___component___links___slug'
  | 'namedStrings___component___links___label'
  | 'namedStrings___component___links___spaceId'
  | 'namedStrings___component___links___createdAt'
  | 'namedStrings___component___links___updatedAt'
  | 'namedStrings___component___links___component'
  | 'namedStrings___component___links___children'
  | 'namedStrings___component___namedStrings'
  | 'namedStrings___component___namedStrings___contentful_id'
  | 'namedStrings___component___namedStrings___id'
  | 'namedStrings___component___namedStrings___node_locale'
  | 'namedStrings___component___namedStrings___name'
  | 'namedStrings___component___namedStrings___value'
  | 'namedStrings___component___namedStrings___component'
  | 'namedStrings___component___namedStrings___spaceId'
  | 'namedStrings___component___namedStrings___createdAt'
  | 'namedStrings___component___namedStrings___updatedAt'
  | 'namedStrings___component___namedStrings___children'
  | 'namedStrings___component___parent___id'
  | 'namedStrings___component___parent___children'
  | 'namedStrings___component___children'
  | 'namedStrings___component___children___id'
  | 'namedStrings___component___children___children'
  | 'namedStrings___component___internal___content'
  | 'namedStrings___component___internal___contentDigest'
  | 'namedStrings___component___internal___description'
  | 'namedStrings___component___internal___fieldOwners'
  | 'namedStrings___component___internal___ignoreType'
  | 'namedStrings___component___internal___mediaType'
  | 'namedStrings___component___internal___owner'
  | 'namedStrings___component___internal___type'
  | 'namedStrings___spaceId'
  | 'namedStrings___createdAt'
  | 'namedStrings___updatedAt'
  | 'namedStrings___sys___type'
  | 'namedStrings___sys___revision'
  | 'namedStrings___parent___id'
  | 'namedStrings___parent___parent___id'
  | 'namedStrings___parent___parent___children'
  | 'namedStrings___parent___children'
  | 'namedStrings___parent___children___id'
  | 'namedStrings___parent___children___children'
  | 'namedStrings___parent___internal___content'
  | 'namedStrings___parent___internal___contentDigest'
  | 'namedStrings___parent___internal___description'
  | 'namedStrings___parent___internal___fieldOwners'
  | 'namedStrings___parent___internal___ignoreType'
  | 'namedStrings___parent___internal___mediaType'
  | 'namedStrings___parent___internal___owner'
  | 'namedStrings___parent___internal___type'
  | 'namedStrings___children'
  | 'namedStrings___children___id'
  | 'namedStrings___children___parent___id'
  | 'namedStrings___children___parent___children'
  | 'namedStrings___children___children'
  | 'namedStrings___children___children___id'
  | 'namedStrings___children___children___children'
  | 'namedStrings___children___internal___content'
  | 'namedStrings___children___internal___contentDigest'
  | 'namedStrings___children___internal___description'
  | 'namedStrings___children___internal___fieldOwners'
  | 'namedStrings___children___internal___ignoreType'
  | 'namedStrings___children___internal___mediaType'
  | 'namedStrings___children___internal___owner'
  | 'namedStrings___children___internal___type'
  | 'namedStrings___internal___content'
  | 'namedStrings___internal___contentDigest'
  | 'namedStrings___internal___description'
  | 'namedStrings___internal___fieldOwners'
  | 'namedStrings___internal___ignoreType'
  | 'namedStrings___internal___mediaType'
  | 'namedStrings___internal___owner'
  | 'namedStrings___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulComponentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentEdge>;
  nodes: Array<ContentfulComponent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentGroupConnectionDistinctArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentGroupConnectionMaxArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentGroupConnectionMinArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentGroupConnectionSumArgs = {
  field: ContentfulComponentFieldsEnum;
};


export type ContentfulComponentGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFieldsEnum;
};

export type ContentfulComponentSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulComponentFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImageGroupConnection>;
};


export type ContentfulImageConnectionDistinctArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageConnectionMaxArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageConnectionMinArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageConnectionSumArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImageFieldsEnum;
};

export type ContentfulImageEdge = {
  next?: Maybe<ContentfulImage>;
  node: ContentfulImage;
  previous?: Maybe<ContentfulImage>;
};

export type ContentfulImageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'altText'
  | 'caption'
  | 'asset___contentful_id'
  | 'asset___id'
  | 'asset___gatsbyImageData'
  | 'asset___spaceId'
  | 'asset___createdAt'
  | 'asset___updatedAt'
  | 'asset___file___url'
  | 'asset___file___details___size'
  | 'asset___file___fileName'
  | 'asset___file___contentType'
  | 'asset___title'
  | 'asset___description'
  | 'asset___node_locale'
  | 'asset___sys___type'
  | 'asset___sys___revision'
  | 'asset___url'
  | 'asset___placeholderUrl'
  | 'asset___mimeType'
  | 'asset___filename'
  | 'asset___width'
  | 'asset___height'
  | 'asset___size'
  | 'asset___parent___id'
  | 'asset___parent___parent___id'
  | 'asset___parent___parent___children'
  | 'asset___parent___children'
  | 'asset___parent___children___id'
  | 'asset___parent___children___children'
  | 'asset___parent___internal___content'
  | 'asset___parent___internal___contentDigest'
  | 'asset___parent___internal___description'
  | 'asset___parent___internal___fieldOwners'
  | 'asset___parent___internal___ignoreType'
  | 'asset___parent___internal___mediaType'
  | 'asset___parent___internal___owner'
  | 'asset___parent___internal___type'
  | 'asset___children'
  | 'asset___children___id'
  | 'asset___children___parent___id'
  | 'asset___children___parent___children'
  | 'asset___children___children'
  | 'asset___children___children___id'
  | 'asset___children___children___children'
  | 'asset___children___internal___content'
  | 'asset___children___internal___contentDigest'
  | 'asset___children___internal___description'
  | 'asset___children___internal___fieldOwners'
  | 'asset___children___internal___ignoreType'
  | 'asset___children___internal___mediaType'
  | 'asset___children___internal___owner'
  | 'asset___children___internal___type'
  | 'asset___internal___content'
  | 'asset___internal___contentDigest'
  | 'asset___internal___description'
  | 'asset___internal___fieldOwners'
  | 'asset___internal___ignoreType'
  | 'asset___internal___mediaType'
  | 'asset___internal___owner'
  | 'asset___internal___type'
  | 'asset___filesize'
  | 'asset___publicUrl'
  | 'asset___resize___width'
  | 'asset___resize___height'
  | 'asset___resize___src'
  | 'asset___gatsbyImage'
  | 'component'
  | 'component___contentful_id'
  | 'component___id'
  | 'component___node_locale'
  | 'component___title'
  | 'component___slug'
  | 'component___richText___raw'
  | 'component___richText___references'
  | 'component___richText___references___contentful_id'
  | 'component___richText___references___id'
  | 'component___richText___references___node_locale'
  | 'component___richText___references___title'
  | 'component___richText___references___slug'
  | 'component___richText___references___sections'
  | 'component___richText___references___spaceId'
  | 'component___richText___references___createdAt'
  | 'component___richText___references___updatedAt'
  | 'component___richText___references___heading'
  | 'component___richText___references___link'
  | 'component___richText___references___subheading'
  | 'component___richText___references___gatsbyPath'
  | 'component___richText___references___children'
  | 'component___section'
  | 'component___section___contentful_id'
  | 'component___section___id'
  | 'component___section___node_locale'
  | 'component___section___title'
  | 'component___section___slug'
  | 'component___section___type'
  | 'component___section___heading'
  | 'component___section___spaceId'
  | 'component___section___createdAt'
  | 'component___section___updatedAt'
  | 'component___section___sys___type'
  | 'component___section___sys___revision'
  | 'component___section___subheading'
  | 'component___section___components'
  | 'component___section___components___contentful_id'
  | 'component___section___components___id'
  | 'component___section___components___node_locale'
  | 'component___section___components___title'
  | 'component___section___components___slug'
  | 'component___section___components___section'
  | 'component___section___components___spaceId'
  | 'component___section___components___createdAt'
  | 'component___section___components___updatedAt'
  | 'component___section___components___heading'
  | 'component___section___components___label'
  | 'component___section___components___date'
  | 'component___section___components___subheading'
  | 'component___section___components___links'
  | 'component___section___components___namedStrings'
  | 'component___section___components___children'
  | 'component___section___page'
  | 'component___section___page___contentful_id'
  | 'component___section___page___id'
  | 'component___section___page___node_locale'
  | 'component___section___page___title'
  | 'component___section___page___slug'
  | 'component___section___page___sections'
  | 'component___section___page___spaceId'
  | 'component___section___page___createdAt'
  | 'component___section___page___updatedAt'
  | 'component___section___page___heading'
  | 'component___section___page___link'
  | 'component___section___page___subheading'
  | 'component___section___page___gatsbyPath'
  | 'component___section___page___children'
  | 'component___section___parent___id'
  | 'component___section___parent___children'
  | 'component___section___children'
  | 'component___section___children___id'
  | 'component___section___children___children'
  | 'component___section___internal___content'
  | 'component___section___internal___contentDigest'
  | 'component___section___internal___description'
  | 'component___section___internal___fieldOwners'
  | 'component___section___internal___ignoreType'
  | 'component___section___internal___mediaType'
  | 'component___section___internal___owner'
  | 'component___section___internal___type'
  | 'component___spaceId'
  | 'component___createdAt'
  | 'component___updatedAt'
  | 'component___sys___type'
  | 'component___sys___revision'
  | 'component___heading'
  | 'component___label'
  | 'component___image___contentful_id'
  | 'component___image___id'
  | 'component___image___node_locale'
  | 'component___image___altText'
  | 'component___image___caption'
  | 'component___image___asset___contentful_id'
  | 'component___image___asset___id'
  | 'component___image___asset___gatsbyImageData'
  | 'component___image___asset___spaceId'
  | 'component___image___asset___createdAt'
  | 'component___image___asset___updatedAt'
  | 'component___image___asset___title'
  | 'component___image___asset___description'
  | 'component___image___asset___node_locale'
  | 'component___image___asset___url'
  | 'component___image___asset___placeholderUrl'
  | 'component___image___asset___mimeType'
  | 'component___image___asset___filename'
  | 'component___image___asset___width'
  | 'component___image___asset___height'
  | 'component___image___asset___size'
  | 'component___image___asset___children'
  | 'component___image___asset___filesize'
  | 'component___image___asset___publicUrl'
  | 'component___image___asset___gatsbyImage'
  | 'component___image___component'
  | 'component___image___component___contentful_id'
  | 'component___image___component___id'
  | 'component___image___component___node_locale'
  | 'component___image___component___title'
  | 'component___image___component___slug'
  | 'component___image___component___section'
  | 'component___image___component___spaceId'
  | 'component___image___component___createdAt'
  | 'component___image___component___updatedAt'
  | 'component___image___component___heading'
  | 'component___image___component___label'
  | 'component___image___component___date'
  | 'component___image___component___subheading'
  | 'component___image___component___links'
  | 'component___image___component___namedStrings'
  | 'component___image___component___children'
  | 'component___image___spaceId'
  | 'component___image___createdAt'
  | 'component___image___updatedAt'
  | 'component___image___sys___type'
  | 'component___image___sys___revision'
  | 'component___image___parent___id'
  | 'component___image___parent___children'
  | 'component___image___children'
  | 'component___image___children___id'
  | 'component___image___children___children'
  | 'component___image___internal___content'
  | 'component___image___internal___contentDigest'
  | 'component___image___internal___description'
  | 'component___image___internal___fieldOwners'
  | 'component___image___internal___ignoreType'
  | 'component___image___internal___mediaType'
  | 'component___image___internal___owner'
  | 'component___image___internal___type'
  | 'component___date'
  | 'component___subheading'
  | 'component___links'
  | 'component___links___contentful_id'
  | 'component___links___id'
  | 'component___links___node_locale'
  | 'component___links___title'
  | 'component___links___slug'
  | 'component___links___label'
  | 'component___links___ref___contentful_id'
  | 'component___links___ref___id'
  | 'component___links___ref___node_locale'
  | 'component___links___ref___title'
  | 'component___links___ref___slug'
  | 'component___links___ref___sections'
  | 'component___links___ref___spaceId'
  | 'component___links___ref___createdAt'
  | 'component___links___ref___updatedAt'
  | 'component___links___ref___heading'
  | 'component___links___ref___link'
  | 'component___links___ref___subheading'
  | 'component___links___ref___gatsbyPath'
  | 'component___links___ref___children'
  | 'component___links___spaceId'
  | 'component___links___createdAt'
  | 'component___links___updatedAt'
  | 'component___links___sys___type'
  | 'component___links___sys___revision'
  | 'component___links___component'
  | 'component___links___component___contentful_id'
  | 'component___links___component___id'
  | 'component___links___component___node_locale'
  | 'component___links___component___title'
  | 'component___links___component___slug'
  | 'component___links___component___section'
  | 'component___links___component___spaceId'
  | 'component___links___component___createdAt'
  | 'component___links___component___updatedAt'
  | 'component___links___component___heading'
  | 'component___links___component___label'
  | 'component___links___component___date'
  | 'component___links___component___subheading'
  | 'component___links___component___links'
  | 'component___links___component___namedStrings'
  | 'component___links___component___children'
  | 'component___links___parent___id'
  | 'component___links___parent___children'
  | 'component___links___children'
  | 'component___links___children___id'
  | 'component___links___children___children'
  | 'component___links___internal___content'
  | 'component___links___internal___contentDigest'
  | 'component___links___internal___description'
  | 'component___links___internal___fieldOwners'
  | 'component___links___internal___ignoreType'
  | 'component___links___internal___mediaType'
  | 'component___links___internal___owner'
  | 'component___links___internal___type'
  | 'component___namedStrings'
  | 'component___namedStrings___contentful_id'
  | 'component___namedStrings___id'
  | 'component___namedStrings___node_locale'
  | 'component___namedStrings___name'
  | 'component___namedStrings___value'
  | 'component___namedStrings___component'
  | 'component___namedStrings___component___contentful_id'
  | 'component___namedStrings___component___id'
  | 'component___namedStrings___component___node_locale'
  | 'component___namedStrings___component___title'
  | 'component___namedStrings___component___slug'
  | 'component___namedStrings___component___section'
  | 'component___namedStrings___component___spaceId'
  | 'component___namedStrings___component___createdAt'
  | 'component___namedStrings___component___updatedAt'
  | 'component___namedStrings___component___heading'
  | 'component___namedStrings___component___label'
  | 'component___namedStrings___component___date'
  | 'component___namedStrings___component___subheading'
  | 'component___namedStrings___component___links'
  | 'component___namedStrings___component___namedStrings'
  | 'component___namedStrings___component___children'
  | 'component___namedStrings___spaceId'
  | 'component___namedStrings___createdAt'
  | 'component___namedStrings___updatedAt'
  | 'component___namedStrings___sys___type'
  | 'component___namedStrings___sys___revision'
  | 'component___namedStrings___parent___id'
  | 'component___namedStrings___parent___children'
  | 'component___namedStrings___children'
  | 'component___namedStrings___children___id'
  | 'component___namedStrings___children___children'
  | 'component___namedStrings___internal___content'
  | 'component___namedStrings___internal___contentDigest'
  | 'component___namedStrings___internal___description'
  | 'component___namedStrings___internal___fieldOwners'
  | 'component___namedStrings___internal___ignoreType'
  | 'component___namedStrings___internal___mediaType'
  | 'component___namedStrings___internal___owner'
  | 'component___namedStrings___internal___type'
  | 'component___parent___id'
  | 'component___parent___parent___id'
  | 'component___parent___parent___children'
  | 'component___parent___children'
  | 'component___parent___children___id'
  | 'component___parent___children___children'
  | 'component___parent___internal___content'
  | 'component___parent___internal___contentDigest'
  | 'component___parent___internal___description'
  | 'component___parent___internal___fieldOwners'
  | 'component___parent___internal___ignoreType'
  | 'component___parent___internal___mediaType'
  | 'component___parent___internal___owner'
  | 'component___parent___internal___type'
  | 'component___children'
  | 'component___children___id'
  | 'component___children___parent___id'
  | 'component___children___parent___children'
  | 'component___children___children'
  | 'component___children___children___id'
  | 'component___children___children___children'
  | 'component___children___internal___content'
  | 'component___children___internal___contentDigest'
  | 'component___children___internal___description'
  | 'component___children___internal___fieldOwners'
  | 'component___children___internal___ignoreType'
  | 'component___children___internal___mediaType'
  | 'component___children___internal___owner'
  | 'component___children___internal___type'
  | 'component___internal___content'
  | 'component___internal___contentDigest'
  | 'component___internal___description'
  | 'component___internal___fieldOwners'
  | 'component___internal___ignoreType'
  | 'component___internal___mediaType'
  | 'component___internal___owner'
  | 'component___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulImageGroupConnectionDistinctArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageGroupConnectionMaxArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageGroupConnectionMinArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageGroupConnectionSumArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImageFieldsEnum;
};

export type ContentfulImageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulImageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHeroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHeroGroupConnection>;
};


export type ContentfulHeroConnectionDistinctArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroConnectionMaxArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroConnectionMinArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroConnectionSumArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulHeroFieldsEnum;
};

export type ContentfulHeroEdge = {
  next?: Maybe<ContentfulHero>;
  node: ContentfulHero;
  previous?: Maybe<ContentfulHero>;
};

export type ContentfulHeroFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulHeroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHeroGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulHeroGroupConnectionDistinctArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroGroupConnectionMaxArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroGroupConnectionMinArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroGroupConnectionSumArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulHeroFieldsEnum;
};

export type ContentfulHeroFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulHeroSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulHeroFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PageQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type PageQueryQuery = { contentfulPage?: { id: string, title?: string | null, slug?: string | null, heading?: string | null, subheading?: string | null, sections?: Array<{ id: string, title?: string | null, slug?: string | null, type?: string | null, heading?: string | null, subheading?: string | null, components?: Array<{ id: string, title?: string | null, slug?: string | null, label?: string | null, date?: any | null, heading?: string | null, subheading?: string | null, richText?: { raw?: string | null } | null, image?: { id: string, altText?: string | null, caption?: string | null, asset?: { id: string, title?: string | null, description?: string | null, mimeType: string, size?: number | null, url?: string | null, width?: number | null, height?: number | null, file?: { url?: string | null, fileName?: string | null, contentType?: string | null, details?: { size?: number | null, image?: { width?: number | null, height?: number | null } | null } | null } | null } | null } | null, links?: Array<{ id: string, title?: string | null, label?: string | null, ref?: { id: string, title?: string | null, slug?: string | null } | null } | null> | null, namedStrings?: Array<{ id: string, name?: string | null, value?: string | null } | null> | null } | null> | null } | null> | null } | null };

export type SectionsFragment = { id: string, title?: string | null, slug?: string | null, type?: string | null, heading?: string | null, subheading?: string | null, components?: Array<{ id: string, title?: string | null, slug?: string | null, label?: string | null, date?: any | null, heading?: string | null, subheading?: string | null, richText?: { raw?: string | null } | null, image?: { id: string, altText?: string | null, caption?: string | null, asset?: { id: string, title?: string | null, description?: string | null, mimeType: string, size?: number | null, url?: string | null, width?: number | null, height?: number | null, file?: { url?: string | null, fileName?: string | null, contentType?: string | null, details?: { size?: number | null, image?: { width?: number | null, height?: number | null } | null } | null } | null } | null } | null, links?: Array<{ id: string, title?: string | null, label?: string | null, ref?: { id: string, title?: string | null, slug?: string | null } | null } | null> | null, namedStrings?: Array<{ id: string, name?: string | null, value?: string | null } | null> | null } | null> | null };

export type ComponentsFragment = { id: string, title?: string | null, slug?: string | null, label?: string | null, date?: any | null, heading?: string | null, subheading?: string | null, richText?: { raw?: string | null } | null, image?: { id: string, altText?: string | null, caption?: string | null, asset?: { id: string, title?: string | null, description?: string | null, mimeType: string, size?: number | null, url?: string | null, width?: number | null, height?: number | null, file?: { url?: string | null, fileName?: string | null, contentType?: string | null, details?: { size?: number | null, image?: { width?: number | null, height?: number | null } | null } | null } | null } | null } | null, links?: Array<{ id: string, title?: string | null, label?: string | null, ref?: { id: string, title?: string | null, slug?: string | null } | null } | null> | null, namedStrings?: Array<{ id: string, name?: string | null, value?: string | null } | null> | null };

export type AssetFragment = { id: string, title?: string | null, description?: string | null, mimeType: string, size?: number | null, url?: string | null, width?: number | null, height?: number | null, file?: { url?: string | null, fileName?: string | null, contentType?: string | null, details?: { size?: number | null, image?: { width?: number | null, height?: number | null } | null } | null } | null };

export type ImageFragment = { id: string, altText?: string | null, caption?: string | null, asset?: { id: string, title?: string | null, description?: string | null, mimeType: string, size?: number | null, url?: string | null, width?: number | null, height?: number | null, file?: { url?: string | null, fileName?: string | null, contentType?: string | null, details?: { size?: number | null, image?: { width?: number | null, height?: number | null } | null } | null } | null } | null };

export type LinkFragment = { id: string, title?: string | null, label?: string | null, ref?: { id: string, title?: string | null, slug?: string | null } | null };

export type NamedStringFragment = { id: string, name?: string | null, value?: string | null };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
