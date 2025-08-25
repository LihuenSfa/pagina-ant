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
        <div className='relative h-screen w-full pt-16 md:pt-0 overflow-hidden bg-black'>
            <video src={currentVideo} className='opacity-50 absolute inset-0 h-full w-full object-cover pointer-events-none'autoPlay muted loop disablePictureInPicture/> 

            {/* Contenido superpuesto */}
            <div className="relative z-10 h-screen w-full flex flex-col px-0 md:px-16 pt-4 md:pt-16">
                <div className='flex flex-col justify-around grow p-0'>
                    <h1 className="font-ducktape text-5xl 2xl:text-7xl xl:text-6xl lg:text-5xl font-bold text-yellow-10 text-center sm:text-end mb-8 md:mb-0">
                        Yellow Tapes
                    </h1>
                    <div className="flex flex-col items-center sm:items-start gap-4 font-helvetica 2xl:text-7xl xl:text-6xl lg:text-5xl text-2xl text-white">
                        <button onMouseEnter={() => handleHover("heroVid3")} className="flex flex-col sm:flex-row sm:gap-2 transition hover:text-gray" >
                            Graffiti Tapes - Lima  
                            <p className='text-sm'>2025</p>
                        </button>
                        
                        <button onMouseEnter={() => handleHover("heroVid2")} className="flex flex-col sm:flex-row sm:gap-2 transition hover:text-gray" >
                            The I love you bridge  
                            <p className='text-sm'>2021</p>
                        </button>
                        <button onMouseEnter={() => handleHover("heroVid1")} className="flex flex-col sm:flex-row sm:gap-2 transition hover:text-gray" >
                            Todos mis caminos son la destrucción  
                            <p className='text-sm'>2024</p>
                        </button>
                    </div>
                </div>
                <button onClick={scrollDown} className='mt-12 md:mt-0 self-center rounded-full border-2 border-white px-[2rem] py-[0.5rem] hover:text-gray hover:border-gray pulse'>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </button>
            </div>
        </div>
    )
}

export default HeroComp