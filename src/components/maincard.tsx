import  { TextGenerateEffect }  from '../components/text-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const MainCard = () => {
    const prop1 = "Tech Engineer who loves innovation"


    return (
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
    );
}