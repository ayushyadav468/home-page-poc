import { BannerCard } from "@repo/ui/bannerCard";

export default function Page(): JSX.Element {
  return (
    <main className='flex gap-1'>
      <BannerCard name="Boost" module_alias="Build visibility for yourself" />
      <BannerCard name="Prep" module_alias="Build visibility for yourself" />
      <BannerCard name="Learn" module_alias="Build visibility for yourself" />
    </main>
  );
}
