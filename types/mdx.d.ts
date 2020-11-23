interface FrontMatter {
  title?: string;
  publishedAt?: string;
  summary?: string;
  image?: string;
  wordCount?: number;
  readingTime?: {
    text: string;
    minutes: decimal;
    time: decimal;
    words: number;
  };
  __resourcePath?: string;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}
