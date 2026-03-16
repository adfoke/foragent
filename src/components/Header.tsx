import { Boxes } from 'lucide-react';

type HeaderProps = {
  toolCount: number;
};

export default function Header({ toolCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-[rgba(252,252,250,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="inline-flex items-center gap-3 text-sm"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white">
            <Boxes className="h-4 w-4 text-zinc-950" />
          </span>
          <span>
            <span className="block font-medium tracking-[-0.03em] text-zinc-950">ForAgent.cc</span>
            <span className="block text-xs text-zinc-500">Agent tools</span>
          </span>
        </a>

        <span className="hidden text-sm text-zinc-500 sm:inline-flex">
          {toolCount} tools
        </span>
      </div>
    </header>
  );
}
