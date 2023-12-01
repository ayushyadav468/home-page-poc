

import React from "react";

import { Chat, GraduateHat, Rocket } from "../Icons/library";
import SearchDoc from "../Icons/library/SearchDoc";

export const BannerCard: React.FC<headerDataType> = ({
  name,
  module_alias,
}) => {
  const cardColor: any = {
    bgCard: {
      boost: "bg-decorative-boost",
      prep: "bg-decorative-prep",
      learn: "bg-decorative-learn",
      network: "bg-decorative-network",
    },
    bgCirle: {
      boost: {
        top: "bg-decorative-boost-circle",
        side: "bg-decorative-boost-circle-side",
      },
      prep: {
        top: "bg-decorative-prep-circle",
        side: "bg-decorative-prep-circle-side",
      },
      learn: {
        top: "bg-decorative-learn-circle",
        side: "bg-decorative-learn-circle-side",
      },
      network: {
        top: "bg-decorative-network-circle",
        side: "bg-decorative-network-circle-side",
      },
    },
    title: {
      boost: "text-decorative-boost-title",
      prep: "text-decorative-prep-title",
      learn: "text-decorative-learn-title",
      network: "text-decorative-network-title",
    },
  };

  const cardIcon: any = {
    boost: <Rocket className="m-4 -rotate-45 transform" fill="#FC5912" />,
    prep: <SearchDoc className="mb-4 ml-4 -rotate-45 transform" />,
    learn: <GraduateHat className="mb-4 mr-2 -rotate-45 transform" />,
    network: <Chat className="mb-4 -rotate-45 transform" />,
  };

  return (
    <div
      className={`relative flex h-[138px] w-[291px] items-end justify-center overflow-hidden rounded-2xl ${cardColor.bgCard[name.toLowerCase()]
        }`}
    >
      {/* Middle semicircle */}
      <div
        className={`${cardColor.bgCirle[name.toLowerCase()]
          ?.top} absolute left-1/2 top-0 flex h-[137px] w-[137px] -translate-x-1/2 -translate-y-1/2 rotate-45 transform items-end justify-end rounded-full`}
      >
        {cardIcon[name?.toLowerCase()] && cardIcon[name?.toLowerCase()]}
      </div>
      {/* Left semicircle */}
      <div
        className={`${cardColor.bgCirle[name.toLowerCase()]
          ?.side} absolute -left-20 bottom-2 h-[85px] w-[85px] translate-x-1/2 -rotate-45 transform rounded-full`}
      ></div>

      {/* Right semicircle */}
      <div
        className={`${cardColor.bgCirle[name.toLowerCase()]
          ?.side} absolute -right-20 top-2 h-[85px] w-[85px] -translate-x-1/2 rotate-45 transform rounded-full`}
      ></div>
      <div className="relative z-10 flex h-[106px] w-[261px] flex-col items-center justify-end p-4">
        {/* Your card content */}
        <h2
          className={`center ${cardColor.title[name.toLowerCase()]
            } text-xl font-bold`}
        >
          {name}
        </h2>
        <p className="text-decorative-boost-desc">{module_alias}</p>
      </div>
    </div>
  );
};
