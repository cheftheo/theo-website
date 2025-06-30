import Link from "next/link"
import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeCompare, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export const Whatsthat = () => (
    <section className='flex col-span-2 justify-center'>
        <div className='bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-2 text-neutral-100 w-full max-w-5xl'>
            <h2 className='text-xl font-bold'>What's that?</h2>
            <div className='flex flex-col text-neutral-400'>
                This is a personal website built with Next.js, TypeScript, and Tailwind CSS
                It showcases my skills and projects, and serves as a portfolio for potential employers

                <div className="mt-6">
                    As I said before, I love to automate things, so I built this website to be fully automated. 
                    Like this one: it's using <span className="text-white">GitHub Actions <FontAwesomeIcon icon={faGithub}/></span> as <span className="text-white">CD Pipeline <FontAwesomeIcon icon={faCodeCompare}/></span> to deploy 
                    automatically on <span className="text-white">AWS ECS <FontAwesomeIcon icon={faAws} /></span> when I push changes to the <span className="text-white">main branch <FontAwesomeIcon icon={faCodeBranch} /></span>.
                    Also, back there is a revere-proxy Nginx server that serves the static files and handles the routing.

                    <div className="mt-2">The code is open source and available on <Link href="https://github.com/cheftheo/theo-website" className="text-blue-300">here</Link></div>
                </div>
            </div>

        </div>
    </section>
)