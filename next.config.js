const withMdxEnhanced = require('next-mdx-enhanced');
const readingTime = require('reading-time');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      phase: 'prebuild|loader|both',
      readingTime: readingTime(mdxContent)
    })
  },
  reExportDataFetching: false
})(/* your normal nextjs config */);
