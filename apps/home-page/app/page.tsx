'use client'

import { API_ENDPOINT } from '@arpittyagi/foundit-utils';
import { ClientProductBanner, ServerProductBanner } from '@repo/ui';
// import { headers } from 'next/headers';

export default function Page(): JSX.Element {
  // const header = headers();
  // const host = header.get("host");
  // const apiEndpoint = API_ENDPOINT.thorApi.bannerList;
  // console.log(apiEndpoint)

  return (
    <main>
      <ClientProductBanner />
    </main>
  );
}
