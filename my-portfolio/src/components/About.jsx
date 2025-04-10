import React from 'react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiTypescript, SiJavascript, SiNodedotjs, SiPython, SiDjango, 
         SiOpenai, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiDocker, SiNetlify, SiJenkins, SiGithub, 
         SiGit, SiPostman, SiSentry, SiCplusplus, } from 'react-icons/si';
import { FaServer, FaCogs, FaDatabase, FaCloud, FaCode} from 'react-icons/fa';
import frontend from '../assets/frontend.png'
import backend from '../assets/backend.png'
import cloud from '../assets/cloud.png'
import database from '../assets/database.png'
import versionControl from '../assets/Vcontrol.png'
import programming from '../assets/programming.png'

const About = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Tech Stack</h2>
            <p className="mt-1 text-base leading-7 text-gray-600 sm:mt-8 font-pj lg:m-0">Tools and Techonologies I have experience with</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
                <img src={frontend} alt="Front-end Development Icon" className="mx-auto my-auto w-12" />

                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Frontend Development</h3>

                <ul className="mt-4 text-base text-gray-600 font-pj grid grid-cols-2 gap-x-4 gap-y-2 ml-8">

                    <li className="flex items-center space-x-2">
                      <SiReact className="text-blue-500" />
                      <span>React.js</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SiNextdotjs className="text-black" />
                      <span>Next.js</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SiTailwindcss className="text-teal-400" />
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SiVite className="text-purple-500" />
                      <span>Vite</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SiTypescript className="text-blue-600" />
                      <span>TypeScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <SiJavascript className="text-yellow-500" />
                      <span>JavaScript</span>
                    </li>

                </ul>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <img src={backend} alt="Front-end Development Icon" className="mx-auto my-auto w-12" />

                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Backend Development</h3>

                <ul className="mt-4 text-base text-gray-600 font-pj grid grid-cols-2 gap-x-4 gap-y-2 ml-8">

                    <li className="flex items-center space-x-2">
                        <SiNodedotjs className="text-green-600" />
                        <span>Node.js</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaServer className="text-gray-700" />
                        <span>Express.js</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiPython className="text-blue-600" />
                        <span>Python</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaCogs className="text-gray-500" />
                        <span>RESTful APIs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiOpenai className="text-black" />
                        <span>OpenAI API</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiDjango className="text-green-900" />
                        <span>Django</span>
                    </li>

                </ul>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <img src={database} alt="Front-end Development Icon" className="mx-auto my-auto w-12" />

                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Databases</h3>

                <ul className="mt-4 text-base text-gray-600 font-pj grid grid-cols-2 gap-x-4 gap-y-2 ml-8">

                    <li className="flex items-center space-x-2">
                        <SiMongodb className="text-green-700" />
                        <span>MongoDB</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiPostgresql className="text-blue-700" />
                        <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiMysql className="text-blue-500" />
                        <span>MySQL</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiFirebase className="text-yellow-500" />
                        <span>Firebase</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaDatabase className="text-purple-500" />
                        <span>Convex</span>
                    </li>

                </ul>

            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                <img src={cloud} alt="Front-end Development Icon" className="mx-auto my-auto w-12" />
                
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">DevOps/Cloud Tools</h3>

                <ul className="mt-4 text-base text-gray-600 font-pj grid grid-cols-2 gap-x-4 gap-y-2 ml-8">

                    <li className="flex items-center space-x-2">
                        <FaCloud className="text-orange-500" />
                        <span>AWS</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiDocker className="text-blue-500" />
                        <span>Docker</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiNetlify className="text-green-500" />
                        <span>Netlify</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiFirebase className="text-yellow-500" />
                        <span>Firebase</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiJenkins className="text-red-600" />
                        <span>Jenkins</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiGithub className="text-gray-900" />
                        <span>GitHub Actions</span>
                    </li>

                </ul>

            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <img src={versionControl} alt="Front-end Development Icon" className="mx-auto my-auto w-12" />

                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Version Control & Testing</h3>

                <ul className="mt-4 text-base text-gray-600 font-pj grid grid-cols-2 gap-x-4 gap-y-2 ml-8">

                    <li className="flex items-center space-x-2">
                        <SiGit className="text-red-500" />
                        <span>Git</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiGithub className="text-gray-800" />
                        <span>GitHub</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiPostman className="text-orange-500" />
                        <span>Postman</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiSentry className="text-purple-500" />
                        <span>Sentry</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaCogs className="text-blue-500" />
                        <span>CI/CD</span>
                    </li>

                </ul>

            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <img src={programming} alt="Front-end Development Icon" className="mx-auto my-auto w-12" />

                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Programming Languages</h3>

                <ul className="mt-4 text-base text-gray-600 font-pj grid grid-cols-2 gap-x-4 gap-y-2 ml-8">

                    <li className="flex items-center space-x-2">
                        <SiPython className="text-blue-600" size={24} />
                        <span>Python</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaCode className="text-red-600" size={24} />
                        <span>Java</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <SiJavascript className="text-yellow-500" size={24} />
                        <span>JavaScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaCode className="text-purple-700" size={24} />
                        <span>C#</span>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</section>

    )
}
export default About;