import React, { useState, Suspense } from 'react'
import Pc from '../Pc'
import { RevealOnScroll } from './RevealOnScroll'

export default function AboutSection() {
  return (
    <div className="bg-gray-800 py-10 px-4 md:px-10" id="about">
      <h1 className="text-4xl font-extrabold text-blue-400 text-center mb-8">About Me</h1>
      <RevealOnScroll>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-1/2 h-[32rem]">
          <Pc />
        </div>
        <div className="w-full md:w-1/2 mb-10 lg:mb-0">
          <p className="text-gray-300 text-center text-1xl lg:text-2xl font-semibold lg:text-left lg:mt-0 font-mono">Hey I'm a software engineer from <span className="text-blue-400">India</span> and specialize in <span className="text-blue-400">PHP</span>, I'm also a Junior Backend Developer and a <a href="https://github.com/pmmp/PocketMine-MP"><span className="text-blue-400 underline">PocketMine-MP</span></a> Developer for years, I love creating website applications and Pocketmine plugins for the community to make their task easy and productive. I'm <span className="text-blue-400">16 years</span> old thriving to become a known self-taught Developer creating solutions of widely known problems in the tech industry, I will be starting a startup company later on as I'm still in the learing phase as a Software-Engineer. </p>
        </div>
      </div>
      </RevealOnScroll>
    </div>
  )
}