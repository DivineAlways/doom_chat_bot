'use client';

import { MDXRemote } from 'next-mdx-remote';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  return (
    <div className="prose dark:prose-invert max-w-none prose-headings:font-heading prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-pre:bg-muted prose-pre:border">
      <MDXRemote 
        source={code}
      />
    </div>
  );
}
