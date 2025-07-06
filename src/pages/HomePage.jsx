import React, { useEffect, useRef } from "react";
import HeroSectionVid from "../assets/video.mp4";
import HeroFallbackImage from "../assets/fallbackimg.png";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[60vh] sm:h-[70vh] md:h-[90vh] lg:h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={HeroSectionVid}
          autoPlay
          loop
          muted
          playsInline
          poster={HeroFallbackImage}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="w-full text-white max-w-2xl space-y-6 text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight logoFont animate-fadeInUp">
            Clarity in law. <br />
            Confidence in results.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 pMd animate-fadeInUp animation-delay-100">
            Expert legal support tailored to your unique needs.
          </p>

          <button
            className="bg-[#2a65f8] hover:bg-[#1e4ed8] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-semibold shadow-lg transition duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1 animate-fadeInUp animation-delay-200 text-sm sm:text-base"
            onClick={() => window.location.href = "#contact"}
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default HomePage;
