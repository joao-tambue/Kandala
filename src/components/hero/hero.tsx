import React from 'react';
import Link from 'next/link';
import logo from '../../../public/logo.svg'
import circle from '../../../public/icons/circle-icon.svg'
import mobile from '../../../public/mobile.png'
import googleplaystore from '../../../public/icons/googleplay.svg'
import appstore from '../../../public/icons/appstore.svg'
import img1 from '../../../public/1475.png'
import img2 from '../../../public/1476.png'
import img3 from '../../../public/1477.png'
import img4 from '../../../public/1478.png'
import Image from 'next/image'
import InfiniteScroll from './InfiniteScroll/InfiniteScroll';

const Hero: React.FC = () => {
  return (
    <div>
        <header className="w-full flex items-center justify-between px-8 py-4">
            <div className='flex justify-center items-center gap-4'>
                <Image src={logo} alt='logo' />
                <div className="h-10 border-l border-gray-400"></div>

                <nav className="flex items-center space-x-6 text-sm text-gray-700">
                    <Link href="/" className="text-pink-600 text-[16px]">Home</Link>
                    <Link href="#quem-somos" className="hover:text-pink-600 font-Poppins text-[16px]" style={{ fontFamily: 'Poppins' }}>Quem somos</Link>
                    <Link href="#servicos" className="hover:text-pink-600 font-poppins text-[16px]"style={{ fontFamily: 'Poppins' }} >Nossos serviços</Link>
                    <Link href="#como-funciona" className="hover:text-pink-600 text-[16px]" style={{ fontFamily: 'Poppins' }} >Como funciona</Link>
                    <Link href="#depoimentos" className="hover:text-pink-600 text-[16px]" style={{ fontFamily: 'Poppins' }}>Depoimentos</Link>
                    <Link href="#faq" className="hover:text-pink-600 font-poppins text-[16px]" style={{ fontFamily: 'Poppins' }}>FAQ's</Link>
                </nav>
            </div>

        <div>
            <Link href="#contactos">
            <button className="bg-white flex items-center justify-between gap-4 px-2 border rounded-full h-[52px] font-poppins text-[16px] hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                Contactos
                <Image src={circle} alt='icon' />
            </button>
            </Link>
        </div>
        </header>

        <div className={`flex flex-col items-center justify-center text-center px-4 mt-10`}>
            <h1 className="text-[26px] text-pink-600" style={{ fontFamily: 'Signatie' }}>
                Descubra uma nova rotina de beleza personalizada
            </h1>
            <h2 className="text-[56px] text-black" style={{ fontFamily: 'Miollan' }}>
                Transforme Seu Cuidado Pessoal <br /> com Inteligência Digital
            </h2>
            <p
                className="text-[16px] text-black font-poppins leading-tight"
                style={{ fontFamily: 'Poppins' }}
                >
                O Kandala analisa suas necessidades individuais e oferece <br />
                recomendações personalizadas de produtos, rotinas e dicas profissionais.
            </p>

        </div>


        <div className="relative max-w-[1115px] mx-auto flex items-center justify-between mt-[40px]">

            <div className="flex flex-col">
            <Image src={img2} alt="img1" className='z-10' />
            <Image src={img1} alt="img2" className="rotate-[4deg] -mt-[15px]" />
            <Image src={img2} alt="img3" className="rotate-[7deg] -mt-[30px]" />
            </div>

            <div className='flex flex-col items-center'>
                <div className="absolute top-4 flex gap-2 -mt-[30px]">
                    <Image src={googleplaystore} alt="Google Play" />
                    <Image src={appstore} alt="App Store" />
                </div>
                <div className="relative z-10">
                <Image src={mobile} alt="App mockup" className="object-contain mt-[60px]" />
                </div>
            </div>

            <div className="flex flex-col">
            <Image src={img3} alt="img4" className="rotate-[6deg]" />
            <Image src={img4} alt="img5" className="rotate-[-1deg] z-10" />
            <Image src={img3} alt="img6" className="rotate-[3deg] -mt-[90px]" />
            </div>

        </div>
        <InfiniteScroll />
    </div>
  );
};

export default Hero;
