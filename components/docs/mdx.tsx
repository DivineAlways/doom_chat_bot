import { Mdx as BaseMdx } from '@/app/mdx-components';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  return <BaseMdx code={code} />;
}
