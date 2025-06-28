export const WorkExp = () => {
    return (
        <section className='flex col-span-2 justify-center'>
            <div className='bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-2 text-neutral-100 w-full max-w-5xl'>
                <h2 className='text-xl font-bold'>Work Experience</h2>

                <section>
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-200 mb-1 sm:mb-0">PTC</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-violet-400 bg-white rounded-full">Feb, 2025</time>
                            <div className="text-xl font-bold text-neutral-100">Support Engineer</div>
                        </div>
                        <p className="text-sm p-2">In my role as a Support Engineer at PTC, I specialized in providing advanced technical support for enterprise tools such as PTC Modeler and Codebeamer. 
                            I worked directly with large enterprise clients to troubleshoot issues, resolve incidents and assist with deployment or upgrades of our tools.
                        </p>
                        <ul className="text-indigo-200 list-disc pl-4">
                            <li>Worked closely with customer engineers and system administrators to resolve support cases</li>
                            <li>Collaborated with the R&D team to investigate and escalate product bugs and technical issues</li>
                            <li>Assisted customer DevOps teams with deployments, upgrades, and configuration of PTC applications</li>
                            <li>Updated legacy code or created new Python/Bash simple scripts for automations and improving KPIs with 15%</li>
                            <li>Contributed to the PTC Knowledge Center by writing articles on common issues, FAQs or technical solutions</li>
                        </ul>

                        <div className="mt-2 text-indigo-200">
                            <span className="font-bold">Technologies used:</span>
                            <ul className="list-disc pl-4">
                                <li>Virtualization & Infrastructure: VMWare, Active Directory, AWS Cloud, Kubernetes</li>
                                <li>Containers: Docker, Docker Compose, Rancher</li>
                                <li>Databases & OS: PostgreSQL, Ubuntu, Red Hat, Windows Server</li>
                                <li>Monitoring: Grafana, Prometheus, Loki, cAdvisor</li>
                                <li>Other: Nginx, IIS, Python, PowerShell, Bash, Jenkins, REST APIs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-200 mb-1 sm:mb-0">Acrom</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-violet-400 bg-white rounded-full">Jul, 2024</time>
                            <div className="text-xl font-bold text-neutral-100">IT Support Specialist, L2</div>
                        </div>
                        <p className="text-sm p-2">At Acrom, I was responsible for providing daily IT support to major HoReCa clients like McDonald's, Taco Bell, FryDay, 
                            and Spartan. I ensured their hardware and software systems run smoothly and quickly resolve any issues that appears.
                        </p>
                        <ul className="text-indigo-200 list-disc pl-4">
                            <li>Delivered 24/7 first-line and second-line support via phone or email, maintaining SLAs and tracking all activity in ZenDesk</li>
                            <li>Provided on-site support for installation, troubleshooting, and system setups</li>
                            <li>Monitored and maintained the health of servers and network infrastructure (routers, switches, access points)</li>
                            <li>Updated or create PowerShell scripts to automate common tasks and improve efficiency</li>
                            <li>Ensured all customer systems were fully operational, particularly during peak business hours</li>
                            <li>Updated or created new users, groups or policies in Active Directory</li>
                            <li>Test customers production environment (servers, routers, switches, APs, etc) in our labs</li>
                        </ul>

                        <div className="mt-2 text-indigo-200">
                            <span className="font-bold">Technologies used:</span> Hyper-V, Active Directory, Windows Server, Cisco Meraki, Cisco Switches and Routers, SD-WAN, IDRAC, Ingenico pinpads, fiscal printers, WSUS, IIS, DFS, DHCP, DNS
                            <div className="mt-2">
                                <span className="font-bold">Achievements:</span>
                                <ul className="list-disc pl-4">
                                    <li>Promoted to Level 2 Support within just three months of joining the company</li>
                                    <li>Successfully replaced 250+ Cisco Catalyst switches with Meraki models for over 100 McDonald's restaurants within the timeline scheduled with lowest impact on uptime possible</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="font-caveat font-medium text-2xl text-indigo-200 mb-1 sm:mb-0">Simiz Fashion</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-violet-400 bg-white rounded-full">Jun, 2023</time>
                            <div className="text-xl font-bold text-neutral-100">Junior System Administrator</div>
                        </div>
                        <p className="text-sm p-2">At Simiz Fashion, I worked as a Junior SysAdmin, providing first-line helpdesk support to internal staff. I was 
                            responsible for maintaining and troubleshooting a range of devices including PCs, laptops, printers, cameras, and various IoT devices.
                        </p>

                        <ul className="text-indigo-200 list-disc pl-4">
                            <li>Delivered day-to-day support for both hardware and software issues across the company</li>
                            <li>Maintained uptime and functionality for SQL databases, production servers, virtual machines, and connected IoT devices (cameras, smart gates, card readers)</li>
                            <li>Managed Active Directory accounts, groups, and policies for employees and devices</li>
                            <li>Ran basic SQL queries to retrieve and analyze data when needed</li>
                        </ul>

                        <div className="mt-2 text-indigo-200">
                            <span className="font-bold">Technologies Used:</span> Active Directory, SQL, Hyper-V, FortiClient VPN, Nginx, Veeam, CentOS, RedHat
                            <div className="mt-2"><span className="font-bold">Achievements:</span>
                                <ul className="list-disc pl-4">
                                    <li>Successfully set up a complete Active Directory forest, deploying it for over 300 devices in the company.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </section>
    )
}