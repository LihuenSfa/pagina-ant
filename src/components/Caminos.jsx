import imgUno from "../assets/caminos-uno.png";
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
        <section className="w-full bg-[#fae846] overflow-hidden flex items-center px-8 py-16">
            <div className="md:flex gap-10 justify-center">
                <div className="fade w-[50%]">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between gap-4">
                    <div className="text-lg">
                        <h1 className="fade text-5xl text-black">
                            Todos mis caminos son la destrucción
                        </h1>
                        <div className="fade text-zinc pb-4">
                            <p>Año: 2024</p>  
                            <p>Duración: 20min</p>
                            <p>País: Perú, Lima</p>
                        </div>
                        <h4 className="fade text-zinc">
                            Anthony (22), un joven atrapado en los recuerdos con una chica, busca un escape consumiendo drogas y yendo a raves en el centro de Lima. En una de sus salidas nocturnas conoce a KDS (22), un personaje urbano que sobrevive en la calle. Juntos deambulan por la ciudad, construyendo una amistad hablando de grafitis, fumando y hasta robando una tienda. Entre estas experiencias, sus conversaciones los llevan a compartir sus conflictos románticos y a reflexionar sobre ellos. Con sus palabras y vivencias, KDS le hace ver a Anthony que, a pesar de los problemas, la vida sigue y que al final, todo es parte del camino.
                        </h4>
                    </div>
                    <div className="w-32 border-2 border-solid border-black text-center rounded-3xl hover:border-black text-[#fae846] hover:text-black bg-black hover:bg-[#fae846]">
                        <Link className="fade" to="/pagina-ant/ReproductorCaminos">
                            <p className="text-lg">
                                Mirar Teaser
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Caminos;
