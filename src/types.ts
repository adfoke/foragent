export type Tool = {
  name: string;
  description?: string;
  tags: string[];
  frameworks: string[];
  githubUrl: string;
  stars?: number;
  featured?: boolean;
};
