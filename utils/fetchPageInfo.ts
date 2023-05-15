import { PageInfo } from '@/typings';

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_BASE_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/page-info`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
