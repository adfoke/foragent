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
      className="group flex flex-col gap-5 border-b border-base-300/80 bg-base-100/90 p-6 transition hover:bg-base-200/55 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-medium tracking-[-0.05em] text-base-content">{tool.name}</h3>
          {tool.stars ? (
            <div className="inline-flex shrink-0 items-center gap-1 text-sm text-base-content/55">
              <Star className="h-3.5 w-3.5 fill-current" />
              {tool.stars}
            </div>
          ) : null}
        </div>

        {tool.description ? (
          <p className="mt-2 max-w-2xl text-sm leading-7 text-base-content/68">{tool.description}</p>
        ) : null}

        {tool.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-outline border-base-300 px-2.5 py-3 text-xs text-base-content/60"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {tool.frameworks.length > 0 ? (
          <div className="mt-4 text-sm text-base-content/55">
            {tool.frameworks.join(' / ')}
          </div>
        ) : null}
      </div>

      <span className="btn btn-sm shrink-0 border-base-300 bg-base-100 text-base-content shadow-none group-hover:border-base-content/20 group-hover:bg-base-200">
        <Github className="h-4 w-4" />
        GitHub
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}
