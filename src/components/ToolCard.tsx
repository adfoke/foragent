import { Chip } from '@heroui/react';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import type { Tool } from '../types';

type ToolCardProps = {
  tool: Tool;
  index: number;
};

export default function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <a
      href={tool.githubUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${tool.name} on GitHub`}
      className="group flex flex-col gap-5 border-b border-[color:var(--separator)] bg-[var(--surface)] p-6 transition hover:bg-[var(--default)] last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-medium tracking-[-0.05em] text-[var(--foreground)]">{tool.name}</h3>
          {tool.stars ? (
            <div className="inline-flex shrink-0 items-center gap-1 text-sm text-[var(--muted)]">
              <Star className="h-3.5 w-3.5 fill-current" />
              {tool.stars}
            </div>
          ) : null}
        </div>

        {tool.description ? (
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">{tool.description}</p>
        ) : null}

        {tool.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <Chip
                key={tag}
                size="sm"
                variant="secondary"
                color="default"
                className="font-mono text-[11px]"
              >
                {tag}
              </Chip>
            ))}
          </div>
        ) : null}

        {tool.frameworks.length > 0 ? (
          <div className="mt-4 text-sm text-[var(--muted)]">
            {tool.frameworks.join(' / ')}
          </div>
        ) : null}
      </div>

      <span className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[var(--surface)] px-4 text-sm font-medium text-[var(--foreground)] shadow-[var(--surface-shadow)] transition group-hover:bg-[var(--surface)]">
        <Github className="h-4 w-4" />
        GitHub
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}
