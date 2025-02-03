import { Mdx } from '@/components/docs/mdx';
import { readFileSync } from 'fs';
import { join } from 'path';

export default async function DocsPage() {
  try {
    const source = readFileSync(
      join(process.cwd(), 'docs', 'getting-started.mdx'),
      'utf-8'
    );
    
    return (
      <article className="max-w-none">
        <Mdx code={source} />
      </article>
    );
  } catch (error) {
    console.error('Error loading documentation:', error);
    return <div>Failed to load documentation</div>;
  }
}
