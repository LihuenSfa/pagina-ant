import imgCam from "../assets/Graffiti-2.jpg";

const SeccionContacto = () => {
    return (
        <section className="relative md:h-screen w-full overflow-hidden">
            <img src={imgCam} alt="" className='absolute inset-0 h-full w-full object-cover fondo'/>
            <div className="relative z-10 flex pt-24 pb-16 md:pt-0 md:pb-0 md:h-full w-full flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="mb-6 text-4xl md:text-7xl ">Déjenos un mensaje</h1>
                <form action="https://formsubmit.co/Anthony@yellowtapes.com" method="POST" target="_blank" className="lg:w-[40%]">
                    <div className="flex flex-col gap-4 xl:flex-row justify-center xl:gap-4 py-4 w-full">
                        <div className="border-2 border-yellow bg-zinc rounded w-full">
                            <input type="text" name="name" required placeholder="Nombre completo" className="bg-zinc p-[1rem] w-full"/>
                        </div>
                        <div className="border-2 border-yellow bg-none rounded lg:w-full">
                            <input type="email" name="email" required placeholder="Email" className="bg-zinc p-[1rem] w-full"/>
                        </div>
                    </div>
                    <div className="pb-4 ">
                        <textarea name="message" required placeholder="Tu mensaje" className="bg-zinc p-[1rem] border-2 border-yellow rounded w-[100%] h-[100%]"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" value="send" className="w-full xl:w-auto bg-yellow border-2 border-yellow text-zinc rounded-3xl px-[1.5rem] py-[0.7rem] font-bold hover:bg-zinc hover:text-yellow">ENVIAR</button>
                    </div>
                </form>
                <div className="border-t-2 p-4 mt-4 cursor-text select-text lg:block w-[80%] md:w-[35%] text-center text-sm lg:text-lg">
                    <p>Gerente General: Anthony Tymchuk</p>
                    <p>email: anthony@yellowtapes.com</p>
                </div>
            </div>
        </section>
    )
}
export default SeccionContacto