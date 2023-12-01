import { BannerCard } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className='flex items-center justify-center gap-2'>
      <BannerCard name="Boost" module_alias="Build visibility for yourself" />
      <BannerCard name="Prep" module_alias="Build visibility for yourself" />
      <BannerCard name="Learn" module_alias="Build visibility for yourself" />
    </main>
  );
}
