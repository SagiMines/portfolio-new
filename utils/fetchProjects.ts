import { Project } from '@/typings';

export const fetchProjects = async () => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_BASE_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/projects`
  );
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
