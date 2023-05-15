import { Skill } from '@/typings';

export const fetchSkills = async () => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_BASE_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/skills`
  );
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
