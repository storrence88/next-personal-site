const withMdxEnhanced = require('next-mdx-enhanced');
const readingTime = require('reading-time');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
})(/* your normal nextjs config */);
