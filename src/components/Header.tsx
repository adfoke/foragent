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
    <header className="sticky top-0 z-20 border-b border-base-300/70 bg-[rgba(255,255,252,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <NavLink
            to="/"
            className="inline-flex items-center gap-3 text-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300 bg-base-100 shadow-sm">
              <Boxes className="h-4 w-4 text-base-content" />
            </span>
            <span>
              <span className="block font-medium tracking-[-0.03em] text-base-content">ForAgent.cc</span>
              <span className="block text-xs text-base-content/55">Agent tools</span>
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
                    `btn btn-sm border-base-300 bg-base-100/80 shadow-none ${
                      isActive ? 'text-base-content' : 'text-base-content/60'
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>

            <span className="badge badge-lg border-base-300 bg-base-100/80 text-base-content/65">
              {toolCount} tools
            </span>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            <a
              href="https://x.com/JohnCui2046"
              target="_blank"
              rel="noreferrer"
              className="btn h-11 border-base-300 bg-base-100 px-4 text-sm font-semibold text-base-content shadow-none hover:border-base-content/20 hover:bg-base-200"
            >
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-base-300 bg-base-100 text-xs font-bold text-base-content">
                X
              </span>
              X
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/adfoke"
              target="_blank"
              rel="noreferrer"
              className="btn h-11 border-base-300 bg-base-100 px-4 text-sm font-semibold text-base-content shadow-none hover:border-base-content/20 hover:bg-base-200"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:trawow@gmail.com"
              className="btn h-11 border-base-300 bg-base-100 px-4 text-sm font-semibold text-base-content shadow-none hover:border-base-content/20 hover:bg-base-200"
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
