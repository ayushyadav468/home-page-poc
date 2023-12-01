import React from "react";

import {
  Chat,
  GraduateHat,
  Rocket,
  SearchDoc,
} from "../Icons/library";

export const BannerCard: React.FC<HeaderDataType> = ({
  name,
  module_alias,
  module_tag,
}) => {
  const cardColor: any = {
    bgCard: {
      rocket: "bg-decorative-boost",
      searchDoc: "bg-decorative-prep",
      graduateHat: "bg-decorative-learn",
      chat: "bg-decorative-network",
    },
    bgCirle: {
      rocket: {
        top: "bg-decorative-boost-circle",
        side: "bg-decorative-boost-circle-side",
      },
      searchDoc: {
        top: "bg-decorative-prep-circle",
        side: "bg-decorative-prep-circle-side",
      },
      graduateHat: {
        top: "bg-decorative-learn-circle",
        side: "bg-decorative-learn-circle-side",
      },
      chat: {
        top: "bg-decorative-network-circle",
        side: "bg-decorative-network-circle-side",
      },
    },
    title: {
      rocket: "text-decorative-boost-title",
      searchDoc: "text-decorative-prep-title",
      graduateHat: "text-decorative-learn-title",
      chat: "text-decorative-network-title",
    },
  };

  const cardIcon: any = {
    rocket: (
      <Rocket
        className="h-[40px] w-[42px] -translate-x-[10px] transform md:m-4 md:h-[51px] md:w-[54px] md:translate-x-0 md:-rotate-45 md:transform"
        fill="#FC5912"
      />
    ),
    searchDoc: (
      <SearchDoc className="-translate-x-[10px] transform md:mb-4 md:ml-4 md:translate-x-0 md:-rotate-45" />
    ),
    graduateHat: (
      <GraduateHat className="h-[38px] w-[51px] -translate-x-[10px] transform md:mb-4 md:mr-2 md:h-[53px] md:w-[72px] md:translate-x-0 md:-rotate-45" />
    ),
    chat: (
      <Chat className="h-[41px] w-[74px] -translate-x-[16px] transform md:mb-4 md:h-[49px] md:w-[88px] md:translate-x-0 md:-rotate-45" />
    ),
  };

  return module_tag ? (
    <div
      className={`relative flex h-[72px] min-w-[132px] flex-auto overflow-hidden rounded-2xl md:h-[138px] md:min-w-[132px] md:items-end md:justify-center lg:min-w-[132px] ${cardColor.bgCard[module_tag]}`}
    >
      {/* Middle semicircle */}
      <div
        className={`${cardColor.bgCirle[module_tag]?.top} absolute left-1/2 right-0 top-1/2 flex h-[137px] w-[137px] -translate-y-1/2 translate-x-1/4 transform items-center justify-start rounded-full md:top-0 md:-translate-x-1/2 md:rotate-45 md:items-end md:justify-end`}
      >
        {cardIcon[module_tag] && cardIcon[module_tag]}
      </div>

      {/* Left semicircle */}
      <div
        className={`${cardColor.bgCirle[module_tag]?.side} hidden md:absolute md:-left-20 md:bottom-2 md:block md:h-[85px] md:min-w-[85px] md:translate-x-1/2 md:-rotate-45 md:transform md:rounded-full`}
      ></div>

      {/* Right semicircle */}
      <div
        className={`${cardColor.bgCirle[module_tag]?.side} hidden md:absolute md:-right-20  md:top-2  md:block  md:h-[85px]  md:min-w-[85px]  md:-translate-x-1/2  md:rotate-45  md:transform  md:rounded-full`}
      ></div>
      <div className="relative z-10 flex h-[48px] max-w-[132px] flex-col items-start gap-1 p-3 md:h-[106px] md:min-w-[200px] md:max-w-[300px] md:items-center md:justify-end md:p-4">
        {/* Your card content */}
        <h2
          className={`center text-sm ${cardColor.title[module_tag]} font-bold md:text-xl`}
        >
          {name}
        </h2>
        <p className="text-decorative-boost-desc text-[10px] md:text-xs">
          {module_alias}
        </p>
      </div>
    </div>
  ) : null;
};
