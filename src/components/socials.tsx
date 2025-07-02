'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const SocialsPage = () => {
    return (
        <section className="grid grid-cols-2 gap-6">
            <a href="https://github.com/cheftheo" target="_blank" rel="noopener noreferrer" className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-md flex flex-col justify-between items-center hover:bg-zinc-600 transition-all">
                <FontAwesomeIcon icon={faGithub} className="text-neutral-400 transition-all" />
            </a>

            <a href="https://www.linkedin.com/in/theodor-marascu-447241243/" target="_blank" rel="noopener noreferrer" className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-md flex flex-col justify-between items-center hover:bg-sky-700 transition-all">
                <FontAwesomeIcon icon={faLinkedin} className="text-neutral-400 transition-all" />
            </a>

            <a href="https://www.instagram.com/theom32/" target="_blank" rel="noopener noreferrer" className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-md flex flex-col justify-between items-center hover:bg-pink-700 transition-all">
                <FontAwesomeIcon icon={faInstagram} className="text-neutral-400 transition-all" />
            </a>

            <a href="mailto:marascu.theodor@gmail.com" target="_blank" rel="noopener noreferrer" className="text-4xl bg-zinc-800 p-10 rounded-lg shadow-md flex flex-col justify-between items-center hover:bg-rose-700 transition-all">
                <FontAwesomeIcon icon={faEnvelope} className="text-neutral-400 transition-all" />
            </a>
        </section>
    )
}