import React, { useRef } from "react";
import starburst from "../assets/starburst.svg";
import postmanVideo from "../assets/postman-hero-video.mp4";

const Hero = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    return (
        <section className="relative w-full pt-30 min-h-screen pb-30 flex flex-col items-center justify-center text-center overflow-hidden bg-[linear-gradient(9.34deg,#140B1E_0%,#140B1E_70%,#491591_85%,#822C66_92%,#E0531F_100%)]">
            <div className="relative z-10 max-w-3xl px-4 flex flex-col items-center gap-6">
                <img src={starburst} alt="Starburst" className="w-4 h-4" />
                <span className="text-xl font-ibm-pm mb-3 text-white font-light uppercase">
                    A new postman is here
                </span>

                <h1 className="text-4xl font-degular md:text-[60px] font-semibold text-white">
                    The AI-native API Platform
                </h1>

                <p className="text-[22px] font-light text-white max-w-3xl tracking-wide">
                    Develop, test, manage, and distribute APIs and services.
                    Built for engineers. Designed for enterprise scale.
                </p>

                <button className="mt-4 bg-(--primary-brand-color) hover:bg-(--secondary-brand-color) transition px-4.5 py-2.5 rounded-sm text-white font-medium cursor-pointer">
                    Try the New Postman
                </button>
            </div>

            <div className="relative z-10 mt-15 w-full flex justify-center">
                <div
                    className="max-w-305 rounded-xl overflow-hidden border border-(--primary-brand-color) shadow-[0_0_60px_rgba(168,85,247,0.3)]"
                    onMouseEnter={handleMouseEnter}
                >
                    <video
                        ref={videoRef}
                        src={postmanVideo}
                        muted
                        className="w-full opacity-100"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
