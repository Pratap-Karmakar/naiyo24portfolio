'use client'

import { BackgroundGradient } from "./ui/background-gradient"
import whatwedo from '../data/what_we_do.json'

interface datatype{
    id: number,
    title: string,
    description: string,
    isFeatured: boolean,
        
}

function WhatWeDo() {
    const featuredWhatwedo = whatwedo.what_we_do.filter((data:datatype) => data.isFeatured)


  return (
    <div className="py-12">
        <div>
            <div className="text-center">
                {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">What We Do</h2> */}
                <p className="bg-clip-text bg-black text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight ">What We Do</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredWhatwedo.map((what_we_do:datatype)=> (
                    <div key={what_we_do.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{what_we_do.title}</p>
                                <p className="text-sm text-justify text-neutral-600 dark:text-neutral-400 flex-grow">{what_we_do.description}</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo