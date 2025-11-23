import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-2xl font-bold ml-4">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="text-xl text-white font-bold ml-4 mt-12 mb-2">{children}</h2>
  ),
  p: ({ children }) => <p className="my-3">{children}</p>,
  strong: ({ children }) => <strong className="text-white">{children}</strong>,
  em: ({ children }) => <em className="text-white">{children}</em>,
  ul: ({ children }) => (
    <ul className="marker:text-primary list-disc">{children}</ul>
  ),
  ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
  li: ({ children }) => <li className="text-neutral-300">{children}</li>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
