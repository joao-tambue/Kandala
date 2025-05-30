import Image from "next/image";
import iPhone13 from '../../../public/iPhone13.png'
import iPhone15 from '../../../public/phone15.png'

export default function Howitworks () {
    return (
        <section className="w-[1080px] mx-auto mt-[150px] flex flex-col gap-20">
            <div className="flex flex-col left-0 -ml-3 gap-9">
                <h1 className="text-[24px] text-pink-600" style={{ fontFamily: 'Signatie' }}>Como Funciona?</h1>
                <h2 className="text-[54px] leading-16 text-black" style={{ fontFamily: 'Miollan' }}>
                    Sua jornada de beleza em <br />quatro passos fáceis
                </h2>
            </div>

            <div className=" px-4 flex flex-col items-center justify-between">
            
                <div className="flex items-center gap-4 ">


                    <div className="mt-10 border-l-1 border-black pl-4 w-[552px] h-[399px] flex flex-col justify-between">
                        <h1 className="text-[56px] text-pink-600 px-3" style={{ fontFamily: 'Miollan' }}>1</h1>
                        <div className="w-[524px] px-3">
                            <h3 className="text-2xl font-medium font-sans text-black mb-2">
                            Crie sua Conta
                            </h3>
                            <p className="text-[#402A25] text-lg text-[16px]" style={{ fontFamily: 'Poppins' }}>
                            Monte sua rotina de beleza com serviços sob medida, desde <br /> maquiagem até cuidados com a pele, tudo pensado para você.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center bg-[#F2F2F7] w-[533px] h-[399px]">
                    <Image
                        src={iPhone13}
                        alt="celular"
                        className="z-30 h-[545px] -mt-24 object-cover"
                    />
                    </div>

                </div>

            </div>

            <div className=" px-4 flex flex-col items-center justify-between">
            
                <div className="flex justify-between items-center gap-4 ">

                    <div className="bg-[#F2F2F7] w-[533px] h-[365px] mt-8">
                        <Image src={iPhone15} alt="celular"
                        className="w-[730px] h-[490px] absolute z-50 left-0 -mt-14 ml-14 object-cover "
                         />
                    </div>

                    {/*<div className="absolute z-50 h-[500px] bg-[#F2F2F7]">
                        <Image
                            src={iPhone15}
                            alt="Mockup de celulares"
                            className="w-[730px] h-[490px] object-cover -translate-x-20"
                        />
                    </div>*/}

                    <div className="mt-10 border-l-1 border-black pl-4 w-[559px] h-[365px] flex flex-col justify-between">
                            <h1 className="text-[56px] text-pink-600 px-3" style={{ fontFamily: 'Miollan' }}>2</h1>
                        <div className="w-[524px] px-3">
                            <h3 className="text-2xl font-medium font-sans text-black mb-2">
                            Escolha o Serviço
                            </h3>
                            <p className="text-[#402A25] text-lg text-[16px]" style={{ fontFamily: 'Poppins' }}>
                            Monte sua rotina de beleza com serviços sob medida, desde <br /> maquiagem até cuidados com a pele, tudo pensado para você.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}