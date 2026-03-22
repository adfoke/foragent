import type { ComponentType } from 'react';
import ToolsPage from '../pages/ToolsPage';

export type AppRoute = {
  path: string;
  label: string;
  component: ComponentType;
};

export const routeConfig: AppRoute[] = [
  {
    path: '/',
    label: 'Tools',
    component: ToolsPage,
  },
];
