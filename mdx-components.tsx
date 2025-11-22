import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-xl font-bold ml-4">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="text-xl font-bold ml-4 mt-8">{children}</h2>
  ),
  p: ({ children }) => <p className="text-neutral-400">{children}</p>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
