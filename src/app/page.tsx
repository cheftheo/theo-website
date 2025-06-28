import { SocialsPage } from '@/components/socials';
import { WhatIdo } from '@/components/whatido';
import { WorkExp } from '@/components/workexp';
import { Desc } from '@/components/desc';
import { MainCard } from '@/components/maincard';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-[600px]:p-10">
      <section className="grid grid-cols-2 text-neutral-100 gap-6 max-[600px]:flex max-[600px]:flex-col max-[600px]:overflow-y-auto">
        <MainCard />
        <SocialsPage />
        <Desc />
        <WhatIdo />
        <WorkExp />

      </section>
    </main>
  );
}
