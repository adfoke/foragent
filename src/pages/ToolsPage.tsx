import { useDeferredValue, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import tools from '../data/tools.json';
import type { Tool } from '../types';

const typedTools = tools as Tool[];

export default function ToolsPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const filteredTools = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return typedTools;
    }

    return typedTools.filter((tool) => {
      const haystack = [
        tool.name,
        tool.description ?? '',
        tool.githubUrl,
        ...tool.tags,
        ...tool.frameworks,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [deferredQuery]);

  const quickTags = useMemo(() => {
    return [...new Set(typedTools.flatMap((tool) => tool.tags))].slice(0, 6);
  }, []);

  return (
    <>
      <section className="border-b border-base-300/80 pb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-base-content/55">
          ForAgent.cc
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-balance text-base-content sm:text-6xl lg:text-7xl">
          Agent Skills & Agent Tools
        </h1>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="input input-lg flex w-full max-w-2xl items-center gap-3 border-base-300 bg-base-100/90 shadow-sm">
            <Search className="h-4 w-4 text-base-content/40" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="grow bg-transparent text-sm"
              placeholder="搜索工具、标签或框架"
            />
          </label>

          <p className="shrink-0 text-sm text-base-content/55">
            {filteredTools.length} / {typedTools.length}
          </p>
        </div>

        {quickTags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {quickTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="btn btn-sm border-base-300 bg-base-100/85 text-base-content/70 shadow-none hover:border-base-content/20 hover:bg-base-200"
              >
                {tag}
              </button>
            ))}
          </div>
        ) : null}
      </section>

      <section
        id="tools"
        className="pt-8"
      >
        <div className="overflow-hidden rounded-[28px] border border-base-300/80 bg-base-100/85 shadow-sm">
          {filteredTools.map((tool, index) => (
            <ToolCard
              key={tool.name}
              tool={tool}
              index={index}
            />
          ))}
        </div>

        {filteredTools.length === 0 ? (
          <div className="mt-6 rounded-[28px] border border-dashed border-base-300 px-6 py-16 text-center text-sm text-base-content/55">
            没有结果
          </div>
        ) : null}
      </section>
    </>
  );
}
