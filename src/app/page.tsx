import  { TextGenerateEffect }  from '../components/text-effect';

import { SocialsPage } from '@/components/socials';
import { WhatIdo } from '@/components/whatido';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const prop1 = "Tech Engineer who loves innovation"

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-[600px]:p-10">
      <section className="grid grid-cols-2 text-neutral-100 gap-6 max-[600px]:flex max-[600px]:flex-col max-[600px]:overflow-y-auto">
        <div className="bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-start gap-4">
          <div className="gap-2 font-bold text-2xl">
            Hello there, here is Theo.
            <TextGenerateEffect className="font-semibold text-neutral-400" words={prop1} />
          </div>

          <div className='flex flex-row gap-1'>
            <FontAwesomeIcon icon={faLocationDot} className='size-4'/>
            <span className='text-neutral-400 text-sm font-semibold'>Based in</span>
            <span className='text-neutral-100 text-sm font-semibold'>Bucharest</span>
          </div>

          <button className="p-1 px-3 border border-solid rounded-xl text-neutral-400 items-end self-end hover:text-neutral-100 transition-all ">Contact me</button>
        </div>

        <SocialsPage />

        <section className='flex col-span-2 justify-center'>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-2 text-neutral-100 w-full max-w-5xl'>
            I'm a young tech enthusiast who enjoys working with systems and finding ways to make them better. I like automating things that people usually do by hand, 
            and making sure everything runs smoothly. I'm always curious and open to learning new tools that help teams work faster and easier. 
            For me, it's important to build things that are simple, clear, and reliable.
          </div>
        </section>

        <WhatIdo />

      </section>
    </main>
  );
}
