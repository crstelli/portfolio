"use client";

import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

function Content({ source }: Props) {
  const components = useMDXComponents();
  return <MDXRemote {...source} components={components} />;
}

export { Content };
