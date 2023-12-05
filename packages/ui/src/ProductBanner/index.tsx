import { API_ENDPOINT } from '@arpittyagi/foundit-utils';

import { BannerCard } from "../BannerCard";

const getBanner = async (apiEndpoint: string) => {
  const res = await fetch(apiEndpoint, {
    method: "GET",
  });
  const response = await res.json();

  return response as HeaderDataType[];
};

export const ProductBanner = async ({ apiEndpoint }: { apiEndpoint?: string }) => {
  let banners: HeaderDataType[] = [];

  if (apiEndpoint) {
    banners = await getBanner(apiEndpoint);
  } else {
    banners = await getBanner(API_ENDPOINT.thorApi.bannerList);
  }

  return (
    <>
      {banners.length > 0 ? (
        <div className="h-49 md:h-47 lg:h-47 flex flex-col gap-5">
          <span className="flex items-center justify-center gap-5">
            <span className="w-auto md:flex-none">
              Say <strong className="text-content-strong">found it</strong> every
              step of the way
            </span>
            <hr className=" hidden text-border-subtle md:block md:h-px md:w-full lg:flex" />
          </span>
          <div className="grid h-40 grid-cols-2 justify-evenly gap-4 md:h-[138px] md:grid-cols-4 lg:h-[138px] lg:grid-cols-4">
            {banners.map((banner: HeaderDataType) => {
              return (
                <a href={banner.link_rewrite} key={banner.id}>
                  <BannerCard
                    name={banner.name}
                    module_alias={banner.module_alias}
                    module_tag={banner.module_tag}
                    link_rewrite={banner.link_rewrite}
                  />
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  )
};
