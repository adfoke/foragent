import { Button, Card, Chip, Input } from '@heroui/react';
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
      <section className="border-b border-[color:var(--separator)] pb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
          ForAgent.cc
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-balance text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          Agent Skills & Agent Tools
        </h1>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="搜索工具、标签或框架"
              placeholder="搜索工具、标签或框架"
              fullWidth
              variant="secondary"
              className="h-14 rounded-full border border-[color:var(--separator)] bg-[var(--surface)] pl-11 pr-4 text-sm text-[var(--foreground)] shadow-[var(--field-shadow)] outline-none transition placeholder:text-[var(--muted)]"
            />
          </div>

          <Chip
            size="md"
            variant="secondary"
            color="default"
            className="shrink-0"
          >
            {filteredTools.length} / {typedTools.length}
          </Chip>
        </div>

        {quickTags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {quickTags.map((tag) => (
              <Button
                key={tag}
                size="sm"
                variant="secondary"
                onPress={() => setQuery(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        ) : null}
      </section>

      <section
        id="tools"
        className="pt-8"
      >
        <Card className="overflow-hidden rounded-[28px] border border-[color:var(--separator)] bg-[var(--surface)]">
          {filteredTools.map((tool, index) => (
            <ToolCard
              key={tool.name}
              tool={tool}
              index={index}
            />
          ))}
        </Card>

        {filteredTools.length === 0 ? (
          <Card className="mt-6 rounded-[28px] border border-dashed border-[color:var(--separator)] bg-transparent px-6 py-16 text-center text-sm text-[var(--muted)] shadow-none">
            没有结果
          </Card>
        ) : null}
      </section>
    </>
  );
}
