import {useRef, useState} from 'react';
import heroVid1 from "../assets/TMCSLDaudFix.mp4";
import heroVid2 from "../assets/LoveYouBridgeAudFix.mp4";
import heroVid3 from "../assets/graffity.mp4";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const HeroComp = () => {
    const [currentVideo, setCurrentVideo] = useState(heroVid3);
  
    const videos = {
        heroVid1: heroVid1,
        heroVid2: heroVid2,
        heroVid3: heroVid3,
    };

    const handleHover = (videoKey) => {
        setCurrentVideo(videos[videoKey]);
    };

    const scrollDown = () => {
        window.scrollBy({top:700,left:0,behavior:'smooth'});
    }

    return (
        <div className='relative h-screen w-full overflow-hidden bg-black'>
            <video src={currentVideo} className='opacity-50 absolute inset-0 h-full w-full object-cover pointer-events-none'autoPlay muted loop /> 

            {/* Contenido superpuesto */}
            <div className="relative z-10 h-screen w-full flex flex-col px-16 pt-16 pb-4">
                <div className='flex flex-col justify-around grow'>
                    <h1 className="font-ducktape 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-yellow-10 text-end">
                        Yellow Tapes
                    </h1>
                    <div className="flex flex-col items-start gap-4 font-helvetica 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white">
                        <button onMouseEnter={() => handleHover("heroVid3")} className="flex gap-2 transition hover:text-gray" >
                            Graffiti Tapes - Lima  
                            <p className='text-sm'>2025</p>
                        </button>
                        
                        <button onMouseEnter={() => handleHover("heroVid2")} className="flex gap-2 transition hover:text-gray" >
                            The I love you bridge  
                            <p className='text-sm'>2021</p>
                        </button>
                        <button onMouseEnter={() => handleHover("heroVid1")} className="flex gap-2 transition hover:text-gray" >
                            Todos mis caminos son la destrucción  
                            <p className='text-sm'>2024</p>
                        </button>
                    </div>
                </div>
                <button onClick={scrollDown} className='self-center rounded-full border-2 border-white px-[2rem] py-[0.5rem] hover:text-gray hover:border-gray pulse'>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </button>
            </div>
        </div>
    )
}

export default HeroComp