import Image from 'next/image';
import icon1 from '../../../../public/icons/icon1.svg'
import icon2 from '../../../../public/icons/icon2.svg'
import icon3 from '../../../../public/icons/icon3.svg'
import icon4 from '../../../../public/icons/icon4.svg'

export default function More() {
    return (
        <div className="flex items-center justify-center mt-8 w-[1320px] mx-auto">
            <div className="max-w-[315px] mx-auto flex flex-col gap-2 text-center items-center">
                <Image src={icon4} alt='icon1' />
                <h1 className="font-semibold text-[20px]">Agendamento Simplificado</h1>
                <p className="text-black text-[13px] leading-6 " style={{ fontFamily: 'Poppins' }} >Agende seus serviços favoritos em poucos <br /> cliques, a qualquer hora e lugar. Escolha o <br /> profissional, o horário e o local que <br /> combinam com você.</p>
            </div>
            <div className="max-w-[315px] mx-auto flex flex-col gap-2 text-center items-center">
                <Image src={icon3} alt='icon1' />
                <div className="font-semibold text-[20px]">Profissionais de Confiança</div>
                <p className="text-black text-[13px] leading-6" style={{ fontFamily: 'Poppins' }}>Conectamos você a especialistas <br /> verificados, prontos para oferecer cuidados <br /> personalizados com segurança e excelência.</p>
            </div>
            <div className="max-w-[315px] mx-auto flex flex-col gap-2 text-center items-center">
                <Image src={icon2} alt='icon1' />
                <h1 className="font-semibold text-[20px]">Experiência Personalizada</h1>
                <p className="text-black text-[13px] leading-6 " style={{ fontFamily: 'Poppins' }}>Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados <br /> com a pele, tudo pensado para você.</p>
            </div>
            <div className="max-w-[315px] mx-auto flex flex-col gap-2 text-center items-center">
                <Image src={icon1} alt='icon1' />
                <h1 className="font-semibold text-[20px]"> Inspiração na Sua Mão</h1>
                <p className="text-black text-[13px] leading-6" style={{ fontFamily: 'Poppins' }}>Explore dicas, tutoriais e as últimas <br /> novidades em beleza para criar looks <br /> incríveis e se manter sempre atualizada.</p>
            </div>
        </div>
    );
}