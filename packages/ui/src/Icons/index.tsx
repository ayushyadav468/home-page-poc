import React from "react";

import {
  Chat,
  GraduateHat,
  Rocket,
  SearchDoc
} from "./library";

export const Icons: React.FC = ({ }) => {
  const IconComponents = [
    { name: "Rocket", component: Rocket },
    { name: "SearchDoc", component: SearchDoc },
    { name: "GraduateHat", component: GraduateHat },
    { name: "Chat", component: Chat },
  ];
  return (
    <div className="h-screen p-3">
      <h1 className="text-center text-3xl font-bold">
        Hover on the Icons to get the Component Names
      </h1>
      <div className="mt-6 flex flex-wrap">
        {IconComponents.map(({ name, component: Component }) => (
          <span key={name} title={name} className="cursor-pointer">
            <Component width={30} height={30} />
          </span>
        ))}
      </div>
    </div>
  );
};
