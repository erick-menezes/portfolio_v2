import Image from 'next/image'
import { Button } from '../ui/button'
import { StatInfo } from './StatInfo'

export function HeroSection() {
    return (
        <section className="flex flex-col max-w-screen-xl w-full mx-auto px-4 min-[425px]:px-10 md:px-14 2xl:px-0">
            <div className="flex flex-col xl:flex-row justify-between">
                <div className="flex flex-col font-bold order-2 xl:order-1">
                    <span className="text-xl md:text-2xl">Olá 👋</span>

                    <span className="mt-4 text-3xl md:text-5xl max-w-4xl leading-tight">
                        Eu sou Erick, <br /> um{' '}
                        <span className="text-primary font-bold">Desenvolvedor Full Stack.</span>
                    </span>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-10">
                        <Button className="bg-primary text-white uppercase rounded-full h-12 px-6 font-bold">
                            Meus projetos
                        </Button>
                        <Button className="border border-primary bg-transparent hover:bg-transparent text-primary uppercase rounded-full h-12 px-6 font-bold">
                            Contate-me
                        </Button>
                    </div>
                </div>

                <div className="hidden md:flex order-1 xl:order-2 md:self-center self-start mb-10 relative w-full md:h-52 xl:w-[400px] xl:h-80">
                    <Image src="/assets/hero_image.svg" alt="Hero cover image" fill quality={100} priority />
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full gap-10 xl:gap-4 mt-20 xl:mt-8">
                <StatInfo value="3+" description="Anos de experiência na área de desenvolvimento web" />
                <StatInfo value="5+" description="Projetos concluídos com sucesso" />
                <StatInfo value="100%" description="Projetos escaláveis e eficientes" />
            </div>
        </section>
    )
}
