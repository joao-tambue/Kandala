import Image from 'next/image';
import icon1 from '../../../../public/icons/icon1.svg'
import icon2 from '../../../../public/icons/icon2.svg'
import icon3 from '../../../../public/icons/icon3.svg'
import icon4 from '../../../../public/icons/icon4.svg'

export default function More() {
    return (
        <div className="flex items-center justify-center mt-32 w-[1320px] mx-auto">
            <div className="max-w-[315px] mx-auto flex flex-col gap-3 text-center items-center">
                <Image src={icon4} alt='icon1' />
                <h1 className="font-semibold">Agendamento Simplificado</h1>
                <p className="text-gray-600 text-[14px]">Agende seus serviços favoritos em poucos cliques, a qualquer hora e lugar. Escolha o profissional, o horário e o local que combinam com você.</p>
            </div>
            <div className="max-w-[315px] mx-auto flex flex-col gap-3 text-center items-center">
                <Image src={icon3} alt='icon1' />
                <div className="font-semibold">Profissionais de Confiança</div>
                <p className="text-gray-600 text-[14px]">Conectamos você a especialistas verificados, prontos para oferecer cuidados personalizados com segurança e excelência.</p>
            </div>
            <div className="max-w-[315px] mx-auto flex flex-col gap-3 text-center items-center">
                <Image src={icon2} alt='icon1' />
                <h1 className="font-semibold">Experiência Personalizada</h1>
                <p className="text-gray-600 text-[14px]">Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.</p>
            </div>
            <div className="max-w-[315px] mx-auto flex flex-col gap-3 text-center items-center">
                <Image src={icon1} alt='icon1' />
                <h1 className="font-semibold"> Inspiração na Sua Mão</h1>
                <p className="text-gray-600 text-[14px]">Explore dicas, tutoriais e as últimas novidades em beleza para criar looks incríveis e se manter sempre atualizada.</p>
            </div>
        </div>
    );
}