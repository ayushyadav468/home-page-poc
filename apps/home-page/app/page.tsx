import { BannerCard, TodoCard } from '@repo/ui';

export default function Page(): JSX.Element {
  return (
    <main>
      <div className="flex items-center justify-center gap-2">
        <BannerCard
          name="Boost"
          module_alias="Build visibility for yourself"
          module_tag="rocket"
        />
        <BannerCard
          name="SearchDoc"
          module_alias="Build visibility for yourself"
          module_tag="searchDoc"
        />
        <BannerCard
          name="GraduateHat"
          module_alias="Build visibility for yourself"
          module_tag="graduateHat"
        />
        <BannerCard
          name="chat"
          module_alias="Build visibility for yourself"
          module_tag="chat"
        />
      </div>
      <div className="my-6 mx-auto w-[80%] flex flex-wrap gap-x-4 gap-y-6 flex-row">
        <TodoCard />
      </div>
    </main>
  );
}
