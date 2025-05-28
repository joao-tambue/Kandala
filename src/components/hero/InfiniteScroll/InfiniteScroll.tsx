'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const images = [
  '/icons/1.png',
  '/icons/2.png',
  '/icons/3.png',
  '/icons/4.png',
  '/icons/5.png',
  '/icons/6.png',
  '/icons/7.png',
  '/icons/8.png',
  '/icons/9.png',
  '/icons/10.png',
  '/icons/11.png',
  '/icons/12.png',
];

export default function InfiniteScroll() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 40,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden bg-[#3c2a24] py-2">
      <motion.div
        className="flex gap-2 w-max"
        animate={controls}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0]">
            <Image
              src={src}
              alt={`logo-${i}`}
              width={100}
              height={40}
              className="object-contain w-[115px] h-[51px] "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
