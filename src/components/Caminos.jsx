import imgUno from "../assets/caminos-uno.png";
import premio from "../assets/premioalmasboludo.svg"
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Caminos = () => {

    useGSAP(() => {
        gsap.fromTo('.fade', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
            trigger: '.fade',
            end: 'bottom bottom',
            scrub: true,
            },
        })
    })

    return (
        <section className="relative w-full bg-[#fae846] overflow-hidden flex items-center px-8 py-2 md:py-16">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start lg:flex-row gap-8 lg:justify-center">
                <div className="fade sm:w-[80%] md:w-[70%] lg:w-[50%] grow">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="relative lg:w-2/5 font-helvetica grow flex flex-col justify-between gap-4 text-black">
                    <div className="text-lg gap-2 flex flex-col text-center md:text-left">
                        <h1 className="fade alpha text-5xl lg:text-4xl xl:text-5xl">
                            Todos mis caminos son la destrucción
                        </h1>
                        <div className="fade flex justify-center gap-4 text-[10px] min-[448px]:text-sm xl:text-md md:justify-start text-zinc font-nb font-bold">
                            <p className="border-2 border-solid border-black rounded-3xl px-1 min-[370px]:px-2">Año: 2024</p>  
                            <p className="border-2 border-solid border-black rounded-3xl px-1 min-[370px]:px-2">Duración: 20min</p>
                            <p className="border-2 border-solid border-black rounded-3xl px-1 min-[370px]:px-2">País: Perú, Lima</p>
                        </div>
                            <h4 className="fade text-zinc hidden 2xl:contents">
                                Anthony (22), un joven atrapado en los recuerdos con una chica, busca un escape consumiendo drogas y yendo a raves en el centro de Lima. 
                                En una de sus salidas nocturnas conoce a KDS (22), un personaje urbano que sobrevive en la calle. Juntos deambulan por la ciudad, construyendo una amistad hablando de grafitis, fumando y hasta robando una tienda. 
                                Entre estas experiencias, sus conversaciones los llevan a compartir sus conflictos románticos y a reflexionar sobre ellos. 
                                Con sus palabras y vivencias, KDS le hace ver a Anthony que, a pesar de los problemas, la vida sigue y que al final, todo es parte del camino.
                            </h4>
                        <h4 className="fade text-zinc contents 2xl:hidden">
                            Anthony (22), un joven atrapado en los recuerdos con una chica, busca un escape consumiendo drogas y yendo a raves en el centro de Lima. 
                            En una de sus salidas nocturnas conoce a KDS (22), un personaje urbano que sobrevive en la calle.
                            Con sus palabras y vivencias, KDS le hace ver a Anthony que, a pesar de los problemas, la vida sigue y que al final, todo es parte del camino.
                        </h4>
                    </div>
                    <div className="self-center lg:self-start w-32 border-2 border-solid border-black text-center rounded-3xl hover:border-black text-[#fae846] hover:text-black bg-black hover:bg-[#fae846]">
                        <Link className="fade" to="/ReproductorCaminos">
                            <p className="text-lg">
                                Mirar Teaser
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <img src={premio} alt="" className="absolute h-24 sm:h-32 md:h-48 bottom-[-4px] right-0 xl:h-64 xl:bottom-[-6px] [mask-image:linear-gradient(to_bottom,transparent,black)] 
           [mask-repeat:no-repeat] 
           [mask-size:100%] 
           [mask-position:top] 
           [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] 
           [-webkit-mask-repeat:no-repeat] 
           [-webkit-mask-size:100%] 
           [-webkit-mask-position:top]"/>
        </section>
    );
};

export default Caminos;
