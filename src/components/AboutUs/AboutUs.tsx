'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../../public/21.png';
import circle2 from '../../../public/icons/circle2.svg';

export default function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded((prev) => !prev);

  const shortText = ``;

  const moreInfo = `Seja para um momento de cuidado ou uma transformação completa,
  estamos aqui para tornar cada experiência única, prática e inesquecível. Com uma plataforma intuitiva.`;

  return (
    <div className='flex items-center justify-center mx-auto mt-22'>
      <Image src={img} alt="About Us" className="border rounded-2xl w-[650px] h-[531px] object-cover" />
      <div className="flex flex-col gap-4 w-[630px] px-6">
        <h1 className="text-[26px] text-pink-600 font-medium" style={{ fontFamily: 'Signatie' }}>Quem somos</h1>
        <h2 className='font-bold text-[26px] text-[#402A25]' style={{ fontFamily: 'Poppins' }}>
          Descubra a beleza que transforma! Nossa aplicação conecta você aos melhores serviços de beleza, com praticidade e estilo.
        </h2>

        <p className="text-[16px] w-[630px] text-black font-sans font-light leading-8 ">
          Somos mais do que uma aplicação de beleza — somos a sua parceira para <br /> realçar o que há 
          de melhor em você. Com uma plataforma intuitiva, conectamos <br /> você a profissionais de
          confiança, oferecendo serviços personalizados que se <br /> encaixam na sua rotina. Seja para um
           momento de cuidado ou uma <br /> transformação completa, estamos aqui para tornar cada experiência
            única, <br /> prática e inesquecível.
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="more-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[16px] w-[630px] text-black font-sans font-light leading-8">
                {moreInfo}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 items-center">
          <button
            onClick={toggleText}
            className="bg-[#F34564] flex items-center justify-center gap-4 w-[171px] border rounded-full h-[52px] text-[16px] text-white cursor-pointer"
          >
            {isExpanded ? 'Ver menos' : 'Saber mais'}
            <Image src={circle2} alt='icon' />
          </button>
        </div>
      </div>
    </div>
  );
}
