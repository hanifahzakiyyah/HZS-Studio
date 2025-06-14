import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
// import { useRive, useStateMachineInput, useRiveEvent } from "@rive-app/react-canvas";
import { useRive, useRiveEvent, useStateMachineInput } from "rive-react";


export default function Hero({ setScrollEnabled, onBahasaChange }){
    const [showButtons, setShowButtons] = useState(false);
    const [active, seActive] = useState(false)
    const [bahasa, setBahasa] = useState("ind");

    const {rive, RiveComponent} = useRive({
        src: "bahasa.riv",
        stateMachines: "State Machine 1",
        artboard: "Artboard",
        autoplay: true,
    })

   useEffect(() => {
        if (!rive) return;

        const handleStateChange = (event) => {
            const stateName = event.data;

            if (stateName.includes("indToEng")) {
                handleClick("eng");
            }
            if (stateName.includes("engToInd")) {
                handleClick("ind");
            }
        };

        rive.on('statechange', handleStateChange);

        return () => {
            rive.off('statechange', handleStateChange);
        };
    }, [rive]);



    // if (rive){
    //     console.log(rive.contents)
    // }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const bahasaFromUrl = params.get("lang");
        if (bahasaFromUrl && (bahasaFromUrl === "ind" || bahasaFromUrl === "eng")) {
            setBahasa(bahasaFromUrl);
            if (onBahasaChange) onBahasaChange(bahasaFromUrl);
        }
    }, []);

    // useEffect(() => {
    //     onBahasaChange(bahasa);
    // }, [bahasa]);


    const enableScrollAndScrollToSection = (sec) => {
        setScrollEnabled(true);
        setTimeout(() => {
          document.getElementById(sec)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const handleClick = (pilihan) => {
        setBahasa(pilihan);
        if (onBahasaChange) onBahasaChange(pilihan);
    };

    // test

    return (
        <section id="hero" className="container relative w-scree h-screen overflow-hidden flex items-center justify-center flex-col lg:flex-row">
            
            
            <div className="w-full h-1/2 lg:w-1/2 lg:h-full -mt-4 -mb-16 lg:-mt-[150px] text-gray-300 text-center font-monos flex items-center justify-center "
            >
                <div>
                    
                    <motion.h1
                        className="text-md lg:text-3xl lg:mb-5"
                        style={{ filter: 'drop-shadow(0px 0px 15px #ffffff88)' }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        {bahasa === "ind" ? (
                            <>
                                Buat Website 3D dan<br />
                                Animasi Interaktif memukau<br />
                                bersama<br />
                            </>
                        ) : (
                            <>
                                Build Stunning 3D Websites<br />
                                and Interactive Animations<br />
                                with<br />
                            </>
                        )}
                        <motion.span
                            className="text-2xl lg:text-6xl block lg:my-5 my-0 lg:mb-7 mb-0"
                            whileHover={{ scale: 1.1, originX: 0 }}
                            whileTap={{ scale: 1.1, originX: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            HZS Studio
                        </motion.span>
                    </motion.h1>
                    
                    <div className="relative flex flex-col items-center">
                        <motion.button
                            className="z-10 py-3 px-5 my-1 backdrop-blur-sm rounded-sm border-l-8 border-r border-t border-b border-slate-400 shadow-2xl text-sm lg:text-xl"
                            whileHover={{ scaleX: 1.5, originX:0}}
                            whileTap={{ scaleX: 1.5, originX:0 }}
                            // transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            onClick={()=>setShowButtons(!showButtons)}
                        >
                            <span className="z-10">
                                {bahasa === "ind" ? ( <>Mulai Sekarang!</>) : ( <>Get Started!</>)}
                            </span>
                        </motion.button>
            
                        {showButtons && (
                            <div className="absolute top-[60px] flex flex-col items-start gap-1 ml-10">
                                <motion.button
                                    className="z-10 lg:py-3 py-1 px-5 rounded-sm border-l-4 border-slate-400 shadow-2xl text-sm lg:text-xl"
                                    whileHover={{ scaleX: 1.3, originX:0 }}
                                    whileTap={{ scaleX: 1.3, originX:0 }}
                                    initial={{ opacity: 0, y: -20}}
                                    animate={{ opacity: 1, y: 0}}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    onClick={()=>enableScrollAndScrollToSection("porto")}
                                >
                                    <span className="z-10">
                                        {bahasa === "ind" ? ('Lihat Portfolio') : ('Show Portfolio')}
                                    </span>
                                </motion.button>
            
                                <motion.button
                                    className="z-10 lg:py-3 py-1 px-5 rounded-sm border-l-4 border-slate-400 shadow-2xl text-sm lg:text-xl"
                                    whileHover={{ scaleX: 1.5, originX:0 }}
                                    whileTap={{ scaleX: 1.5, originX:0 }}
                                    initial={{ opacity: 0, y: -20}}
                                    animate={{ opacity: 1, y: 0}}
                                    transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.2 }}
                                    onClick={()=>enableScrollAndScrollToSection("layanan")}
                                >
                                    <span className="z-10">
                                        {bahasa === "ind" ? ('Layanan & Produk'):('Services & Products')}
                                    </span>
                                </motion.button>
                                
                                <motion.button
                                    className="z-10 lg:py-3 py-1 px-5 rounded-sm border-l-4 border-slate-400 shadow-2xl text-sm lg:text-xl"
                                    whileHover={{ scaleX: 1.5, originX:0 }}
                                    whileTap={{ scaleX: 1.5, originX:0 }}
                                    initial={{ opacity: 0, y: -20}}
                                    animate={{ opacity: 1, y: 0}}
                                    transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.2 }}
                                    onClick={()=>enableScrollAndScrollToSection("about")}
                                >
                                    <span className="z-10">
                                        {bahasa === "ind" ? ('Tentang Kami'):('About Us')}
                                    </span>
                                </motion.button>
                            </div>
                        )}
                    </div> 
                </div>

            </div>

            <div className=" w-full h-1/2 lg:w-1/2 lg:h-full flex items-center justify-center lg:justify-start mt-0 lg:-mt-28 ml-0" >
                <div className="w-[300px] h-[200px] lg:w-[600px] lg:h-[400px]">
                    <RiveComponent />
                </div>
            </div>


            {/* <div className="absolute top-[30vh] lg:top-[5vh] right-0 lg:-right-52 scale-100 lg:scale-90 w-full lg:w-[75vw] h-[90vh] bg-center bg-cover lg:bg-auto backdrop-blur-sm"
                style={{
                    backgroundImage: "url('/hero.webp')",
                    maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 63%)",
                    WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 63%)"
                }}>

                <img
                    src="/hero.webp"
                    alt="Hero Image"
                    loading="eager"
                    fetchpriority="high"
                    className="hidden"
                />
            </div> */}


            
        </section>
    )
}
