import { useDeferredValue, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Header from './components/Header';
import ToolCard from './components/ToolCard';
import tools from './data/tools.json';
import type { Tool } from './types';

const typedTools = tools as Tool[];

export default function App() {
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
    <div
      id="top"
      className="min-h-screen text-zinc-950"
    >
      <Header toolCount={typedTools.length} />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:px-8 lg:px-10">
        <section className="border-b border-zinc-200 pb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            ForAgent.cc
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl">
            Agent Skills & Agent Tools
          </h1>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex w-full max-w-2xl items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition focus-within:border-zinc-900">
              <Search className="h-4 w-4 text-zinc-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                placeholder="搜索工具、标签或框架"
              />
            </label>

            <p className="shrink-0 text-sm text-zinc-500">
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
                  className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-950"
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
          <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white">
            {filteredTools.map((tool, index) => (
              <ToolCard
                key={tool.name}
                tool={tool}
                index={index}
              />
            ))}
          </div>

          {filteredTools.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-zinc-300 px-6 py-16 text-center text-sm text-zinc-500">
              没有结果
            </div>
          ) : null}
        </section>

        <footer className="mt-10 border-t border-zinc-200 pt-6">
          <a
            href="mailto:trawow@gmail.com"
            className="text-sm text-zinc-500 transition hover:text-zinc-950"
          >
            trawow@gmail.com
          </a>
        </footer>

      </main>
    </div>
  );
}
