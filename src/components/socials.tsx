'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const SocialsPage = () => {
    function handleClickSocials(link: string) {
        switch (link) {
        case 'github':
            window.open('https://github.com/cheftheo', '_blank');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/theodor-marascu-447241243/', '_blank');
            break;
        case 'instagram':
            window.open('https://www.instagram.com/theom32/', '_blank');
            break;
        case 'email':
            window.open('mailto:marascu.theodor@gmail.com', '_blank');
            break;
        }
    }

    return (
        <section className="grid grid-cols-2 gap-6 ">
            <button onClick={() => handleClickSocials('github')} className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-md items-center flex flex-col justify-between hover:bg-zinc-600 transition-all">
                <FontAwesomeIcon icon={faGithub} className='text-neutral-400 transition-all' />
            </button>
            
            <button onClick={() => handleClickSocials('linkedin')} className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-m items-center flex flex-col justify-between hover:bg-sky-700 transition-all">
                <FontAwesomeIcon icon={faLinkedin} className='text-neutral-400 transition-all' />
            </button>

            <button onClick={() => handleClickSocials('instagram')} className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-m items-center flex flex-col justify-between hover:bg-pink-700 transition-all">
                <FontAwesomeIcon icon={faInstagram} className='text-neutral-400 transition-all' />
            </button>

            <button onClick={() => handleClickSocials('email')} className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-m items-center flex flex-col justify-between hover:bg-rose-700 transition-all">
                <FontAwesomeIcon icon={faEnvelope} className='text-neutral-400 transition-all' />
            </button>
        </section>
    )
}