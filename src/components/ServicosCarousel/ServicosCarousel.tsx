'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import icon from '../../../public/icons/iconscroll.svg'
import Image from 'next/image'

const servicos = [
  {
    titulo: 'Maquiagem Personalizada',
    descricao: 'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
  },
  {
    titulo: 'Corte e Coloração',
    descricao: 'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
  },
  {
    titulo: 'Manicure e Pedicure',
    descricao: 'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
  },
  {
    titulo: 'Maquiagem para Eventos',
    descricao: 'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
  },
];

export default function ServicosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 3;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-6 py-12 flex flex-col justify-center gap-10 relative mt-[110px] ml-28">
        <p className="text-pink-500 text-[24px]" style={{ fontFamily: 'Signatie' }} >Nossos Serviços</p>
        <h2 className="text-[54px] leading-16 "
        style={{ fontFamily: 'Miollan' }}
        >
            Transforme sua beleza com <br />
            serviços feitos para você.
        </h2>

       <div className="flex flex-col gap-10">
            <div className="relative">
                <div
                ref={scrollRef}
                className="flex gap-x-4 overflow-x-auto scroll-smooth no-scrollbar px-1"
                >
                {servicos.map((servico, index) => (
                    <div
                    key={index}
                    className="w-[370px] flex-shrink-0 bg-[#F2F2F7] rounded-xl p-6"
                    >
                    <div className="flex flex-col h-[370px] justify-between">
                        <Image src={icon} alt="icon" />
                        <div>
                        <h3
                            className="font-semibold mb-2"
                            style={{ fontFamily: 'Poppins' }}
                        >
                            {servico.titulo}
                        </h3>
                        <p
                            className="text-[16px] text-[#8E8E93]"
                            style={{ fontFamily: 'Poppins' }}
                        >
                            {servico.descricao}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                {/* Botões de navegação */}
                <div className="absolute -bottom-[69px] left-0 flex gap-3">
                <button
                    onClick={() => scroll('left')}
                    className="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition"
                >
                    <ChevronRight size={20} />
                </button>
                </div>
            </div>
            </div>

    </section>
  );
}

