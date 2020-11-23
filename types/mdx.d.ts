interface FrontMatter {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}
