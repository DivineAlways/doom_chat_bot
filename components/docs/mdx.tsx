'use client';

import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const components = useMemo(
    () => ({
      h1: ({ ...props }) => (
        <h1
          className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
          {...props}
        />
      ),
      h2: ({ ...props }) => (
        <h2
          className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
          {...props}
        />
      ),
      h3: ({ ...props }) => (
        <h3
          className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
          {...props}
        />
      ),
      h4: ({ ...props }) => (
        <h4
          className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          {...props}
        />
      ),
      p: ({ ...props }) => (
        <p
          className="leading-7 [&:not(:first-child)]:mt-6"
          {...props}
        />
      ),
      ul: ({ ...props }) => (
        <ul className="my-6 ml-6 list-disc" {...props} />
      ),
      ol: ({ ...props }) => (
        <ol className="my-6 ml-6 list-decimal" {...props} />
      ),
      li: ({ ...props }) => (
        <li className="mt-2" {...props} />
      ),
      blockquote: ({ ...props }) => (
        <blockquote
          className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
          {...props}
        />
      ),
      img: ({ alt, ...props }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="rounded-md border"
          alt={alt}
          {...props}
        />
      ),
      pre: ({ ...props }) => (
        <pre
          className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4"
          {...props}
        />
      ),
      code: ({ ...props }) => (
        <code
          className="relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
          {...props}
        />
      ),
    }),
    []
  );

  return (
    <div className="mdx prose dark:prose-invert max-w-none">
      <ReactMarkdown components={components}>{code}</ReactMarkdown>
    </div>
  );
}
