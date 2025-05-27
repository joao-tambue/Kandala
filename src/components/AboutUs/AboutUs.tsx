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

  const shortText = `Somos mais do que uma aplicação de beleza — somos a sua parceira para realçar o que há de melhor em você. Com uma plataforma intuitiva,
  conectamos você a profissionais de confiança, oferecendo serviços personalizados que se encaixam na sua rotina.`;

  const moreInfo = `Seja para um momento de cuidado ou uma transformação completa,
  estamos aqui para tornar cada experiência única, prática e inesquecível. Com uma plataforma intuitiva,
  conectamos você a profissionais de confiança, oferecendo serviços personalizados que se encaixam na sua rotina.`;

  return (
    <div className='flex items-center gap-8 mt-[60px] w-[1250px] mx-auto max-md:flex-col max-md:w-full px-4'>
      <Image src={img} alt="About Us" className="w-full h-auto object-cover max-w-[500px]" />
      <div className="flex flex-col gap-4">
        <h1 className="text-[20px] font-medium text-gray-700">Quem somos</h1>
        <h2 className='font-semibold text-[26px]'>
          Descubra a beleza que transforma! Nossa aplicação conecta você aos melhores serviços de beleza, com praticidade e estilo.
        </h2>

        <p className="text-[18px] text-gray-500 font-normal">
          {shortText}
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
              <p className="text-[18px] text-gray-500 font-normal">
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
