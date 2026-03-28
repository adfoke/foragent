import { Chip } from '@heroui/react';
import { ArrowUpRight, Boxes, Github, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type HeaderProps = {
  toolCount: number;
  routes: Array<{
    path: string;
    label: string;
  }>;
};

export default function Header({ toolCount, routes }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--separator)] bg-[rgba(255,255,252,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <NavLink
            to="/"
            className="inline-flex items-center gap-3 text-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--separator)] bg-[var(--surface)] shadow-[var(--surface-shadow)]">
              <Boxes className="h-4 w-4 text-[var(--foreground)]" />
            </span>
            <span>
              <span className="block font-medium tracking-[-0.03em] text-[var(--foreground)]">ForAgent.cc</span>
              <span className="block text-xs text-[var(--muted)]">Agent tools</span>
            </span>
          </NavLink>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <nav className="hidden gap-2 sm:flex">
              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  end={route.path === '/'}
                  className={({ isActive }) =>
                    `inline-flex h-9 items-center rounded-full border border-[color:var(--separator)] bg-[var(--surface)] px-4 text-sm transition hover:bg-[var(--default)] ${
                      isActive ? 'text-[var(--foreground)]' : 'text-[var(--muted)]'
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>

            <Chip
              size="md"
              variant="secondary"
              color="default"
              className="h-9"
            >
              {toolCount} tools
            </Chip>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            <a
              href="https://x.com/JohnCui2046"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--foreground)] shadow-[var(--surface-shadow)] transition hover:bg-[var(--default)]"
            >
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-[color:var(--separator)] bg-[var(--surface)] text-xs font-bold text-[var(--foreground)]">
                X
              </span>
              X
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/adfoke"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--foreground)] shadow-[var(--surface-shadow)] transition hover:bg-[var(--default)]"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:trawow@gmail.com"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--foreground)] shadow-[var(--surface-shadow)] transition hover:bg-[var(--default)]"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
