import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import tarunImg from '../assets/taruncodes.jpg'; // ✅ Vite-managed static import

export default function HeroSection() {
    return (
        <div className="bg-gray-800 flex justify-center min-h-screen p-5" id="home">
            <div className="rounded-2xl p-10 bg-gray-700 w-full max-w-[90%] xl:max-w-[80%] mx-auto mt-20 flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-col lg:flex-row-reverse items-center lg:justify-between md:px-16 lg:px-32 gap-8">
                    {/* logo */}
                    <img
                        src={tarunImg}
                        alt="TarunCodes Logo"
                        className="w-36 h-36 md:w-44 md:h-44 lg:w-60 lg:h-60 rounded-full mt-5 lg:mt-10"
                    />

                    {/* title */}
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-400 text-center lg:text-left">
                        Hi there 👋 I'm <br />
                        <span className="text-white">
                            <Typewriter
                                words={['TarunCodes.', 'Backend Developer.', 'Junior Software Engineer.', 'Minecraft Enthusiast.']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>

                        {/* introduction */}
                        <p className="text-gray-400 text-center lg:text-left mt-3 px-4 md:px-10 lg:px-0 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto lg:mx-0 text-sm md:text-base lg:text-lg font-semibold font-mono">
                            Passionate coder aspiring to architect software solutions that seamlessly blend functionality and solve problems. Let's build the future together!
                        </p>

                        {/* links */}
                        <div className="flex justify-center lg:justify-start space-x-6 mt-6">
                            <a href="https://github.com/TarunCodesFr" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-github text-6xl md:text-8xl lg:text-6xl text-black transition-all ease-in-out duration-300 hover:text-gray-900"></i>
                            </a>
                            <a href="https://discordapp.com/users/847373992787705876" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-discord-alt text-6xl md:text-8xl lg:text-6xl text-blue-700 transition-all ease-in-out duration-300 hover:text-blue-600"></i>
                            </a>
                        </div>
                    </h1>
                </div>

                {/* experience bar */}
                <div className="rounded-2xl border border-white w-full md:w-[70%] lg:w-[90%] xl:w-[90%] p-10 bg-transparent mt-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40">
                    <h1 className="text-white flex items-center font-mono gap-5 ">
                        <span className="text-3xl lg:text-5xl font-extrabold text-white font-mono">3+</span> Years of Experience
                    </h1>
                    <h1 className="text-white flex items-center font-mono gap-5">
                        <span className="text-3xl lg:text-5xl font-extrabold text-white font-mono">20+</span> Client Projects
                    </h1>
                    <h1 className="text-white flex items-center font-mono gap-5">
                        <span className="text-3xl lg:text-5xl font-extrabold text-white font-mono">100+</span> Github Contribution
                    </h1>
                </div>
            </div>
        </div>
    );
}
