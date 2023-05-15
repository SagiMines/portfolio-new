import { Social } from '@/typings';

export const fetchSocials = async () => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_BASE_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/socials`
  );
  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
