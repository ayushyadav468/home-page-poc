import { API_ENDPOINT } from '@arpittyagi/foundit-utils';
import { ProductBanner, TodoCard } from '@repo/ui';
// import { headers } from 'next/headers';

export default function Page(): JSX.Element {
  // const header = headers();
  // const host = header.get("host");
  const apiEndpoint = API_ENDPOINT.thorApi.bannerList;
  console.log(apiEndpoint)

  return (
    <main>
      <ProductBanner />
      <div className="my-6 mx-auto w-[80%] flex flex-wrap gap-x-4 gap-y-6 flex-row">
        <TodoCard />
      </div>
    </main>
  );
}
