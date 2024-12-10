import { useEffect } from 'react';

export default function Landing() {
  useEffect(() => {
    const bg = document.getElementById("bg");
    const text = document.getElementById("text");
    const hand = document.getElementById("hand");
    const lamp = document.getElementById("lamp");
    const desk = document.getElementById("desk");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bg) {
        bg.style.top = `${scrollY * 0.1}px`;    
        text.style.top = `${scrollY * 0.5}px`;
        hand.style.top = `${scrollY * 0.2}px`;
        lamp.style.top = `${scrollY * 0.6}px`;
        desk.style.top = `${scrollY * 0.3}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[100px] before:bg-gradient-to-t before:from-[#172527] before:to-transparent before:z-50 relative w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="bg-[url('./img-landing/office.webp')] bg-contain bg-top bg-repeat-x w-full h-full absolute top-0 left-0 pointer-events-none" id="bg"></div>
      <div className="w-full h-screen position-absolute mt-52 z-10">
        <h1 className="text-8xl font-bold text-center text-white uppercase" id="text">Toniesz <br />w rachunkach?</h1>
      </div>
      <div className="bg-[url('./img-landing/hand.webp')] bg-contain bg-bottom bg-repeat-x w-full h-screen absolute z-20" id="hand"></div>
      <div className="bg-[url('./img-landing/lamp.webp')] bg-contain bg-top bg-repeat-x w-full h-screen absolute" id="lamp"></div>
      <div className="bg-[url('./img-landing/desk.webp')] bg-contain bg-bottom bg-repeat-x w-full h-screen absolute z-30" id="desk"></div>
    </section>
  );
}
