import { ArrowUpRight, Github, Star } from 'lucide-react';
import type { Tool } from '../types';

type ToolCardProps = {
  tool: Tool;
  index: number;
};

export default function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <article
      className="group flex flex-col gap-5 border-b border-zinc-200 bg-white p-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-medium tracking-[-0.05em] text-zinc-950">{tool.name}</h3>
          {tool.stars ? (
            <div className="inline-flex shrink-0 items-center gap-1 text-sm text-zinc-500">
              <Star className="h-3.5 w-3.5 fill-current" />
              {tool.stars}
            </div>
          ) : null}
        </div>

        {tool.description ? (
          <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600">{tool.description}</p>
        ) : null}

        {tool.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {tool.frameworks.length > 0 ? (
          <div className="mt-4 text-sm text-zinc-500">
            {tool.frameworks.join(' / ')}
          </div>
        ) : null}
      </div>

      <a
        href={tool.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-950"
      >
        <Github className="h-4 w-4" />
        GitHub
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
