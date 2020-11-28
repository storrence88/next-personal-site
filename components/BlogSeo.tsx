import { NextSeo } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://steventorrence.com/${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Steven Torrence`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
    </>
  );
};

export default BlogSeo;
