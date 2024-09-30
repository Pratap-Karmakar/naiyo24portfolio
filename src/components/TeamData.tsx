'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from './variants'; // Ensure correct path
import TeamDataSlider from './TeamDataSlider';

const TeamData: React.FC = () => {
    const ref = useRef(null); // Create ref to monitor when the component is in view
    const isInView = useInView(ref, { once: false }); // Tracks visibility

    return (
        <div className='h-full text-white py-32 text-center' ref={ref}>
            <div className='container mx-auto h-full flex flex-col justify-center'>
                {/* Text */}
                <motion.h2
                    variants={fadeIn({ direction: 'right', delay: 0.2 })} // "Meet Our" from the right
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'} // Toggle animation on scroll
                    exit="hidden"
                    className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center pb-10"
                >
                    <span>Meet Our </span>

                    {/* "Team" comes from the left */}
                    <motion.span
                        variants={fadeIn({ direction: 'left', delay: 0.3 })} // "Team" from the left
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'} // Toggle animation on scroll
                        exit="hidden"
                        className="text-purple-400"
                    >
                        Team
                    </motion.span>
                </motion.h2>

                {/* Slider */}
                <motion.div
                    variants={fadeIn({ direction: 'up', delay: 0.4 })} // Slider comes from the top
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'} // Toggle animation on scroll
                    exit="hidden"
                >
                    <TeamDataSlider />
                </motion.div>
            </div>
        </div>
    );
};

export default TeamData;
