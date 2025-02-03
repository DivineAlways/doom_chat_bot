'use client';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
}
