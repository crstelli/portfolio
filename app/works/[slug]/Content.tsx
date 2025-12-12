"use client";

import { components } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

function Content({ source }: Props) {
  return <MDXRemote {...source} components={components} />;
}

export { Content };
