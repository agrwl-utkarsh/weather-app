export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';

import ClientHome from './ClientHome';

export default function Home() {
  return <ClientHome />;
}