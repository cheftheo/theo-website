
export const WhatIdo = () => {
    return (
        <section className='flex col-span-2 justify-center'>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-2 text-neutral-100 w-full max-w-5xl'>
            <h2 className='text-xl font-bold'>What I do?</h2>
            <p className='text-neutral-400'>I specialize in creating and maintaining systems that help teams work better. I focus on making things simple, clear, and reliable. This is my tech stack:</p>
            <ul className='pl-5 flex flex-rows gap-2 flex-wrap text-white'>
              <li>Networking</li>
              <li>Active Directory</li>
              <li>Linux/Windows</li>
              <li>Python Lua Bash PowerShell</li>
              <li>Docker</li>
              <li>K8s</li>
              <li>AWS Cloud</li>
              <li>Git Github Actions</li>
              <li>Grafana Prometheus Loki cAdvisor</li>
              <li>SQL MongoDB PostgreSQL</li>
              <li>JS/TS NextJS TailwindCSS</li>
            </ul>
          </div>  
        </section>
    )
}