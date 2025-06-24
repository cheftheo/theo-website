import  { TextGenerateEffect }  from '../components/text-effect';

import { SocialsPage } from '../components/socials';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
  const prop1 = "Tech Engineer who loves innovation"

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1 className="text-4xl font-bold">Welcome to My Next.js App!</h1> */}
      <section className="grid grid-cols-2 text-neutral-100 gap-6">
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

        <section className='flex col-span-2 justify-center'>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-2 text-neutral-100 w-full max-w-5xl'>
            <h2 className='text-xl font-bold'>What I do</h2>
            <p className='text-neutral-400'>I specialize in creating and maintaining systems that help teams work better. I focus on making things simple, clear, and reliable.</p>
            <ul className='list-disc pl-5 text-neutral-400'>
              <li>System Design</li>
              <li>Automation</li>
              <li>Monitoring</li>
              <li>Documentation</li>
              <li>Collaboration</li>
            </ul>
          </div>  
        </section>

      </section>
    </main>
  );
}
