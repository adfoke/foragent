import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import tools from './data/tools.json';
import { routeConfig } from './config/routes';
import type { Tool } from './types';

const typedTools = tools as Tool[];

export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'zh-CN';
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header
        toolCount={typedTools.length}
        routes={routeConfig.map(({ path, label }) => ({ path, label }))}
      />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-8 lg:px-10">
        <Routes>
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>

      </main>
    </div>
  );
}
