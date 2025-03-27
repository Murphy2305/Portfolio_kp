import React, { useState, useEffect, useRef } from 'react';
import Button from '../Components/Button';
import Globe from 'react-globe.gl';

const About = () => {
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlobeReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [hasCopied,setHasCopy]= useState(false);
  const handleCopy = (e) =>{

    navigator.clipboard.writeText('kpshekhawat678@gmail.com');
    setHasCopy(true);

    setTimeout(() => {
        setHasCopy(false);
    }, 2000);

  }

  return (
    <section className="c-space my-20" id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container card glow-effect">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Kushal Shekhawat</p>
              <p className="grid-subtext">
                As a problem-solving developer, I thrive on tackling challenges and creating efficient, seamless solutions.
                With experience in both frontend and backend development, I enjoy building dynamic and responsive digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/gridd.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                    I work with a diverse tech stack to build scalable and efficient applications, always eager to explore new technologies and expand my skill set.
                </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              {globeReady && (
                                <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                labelsData={[{ lat: 26.9, lng: 75.8, text: 'Jaipur, India', color: 'white', size: 15 }]}
                pointsData={[{ lat: 26.9, lng: 75.8, size: 1.5, color: 'red' }]} // Point for Jaipur
                pointAltitude={0.05} // Slightly raised point
                pointRadius={0.5} // Adjust size of the point
                pointColor={() => 'red'} // Point color
                onGlobeReady={() => console.log('Globe is ready')}
                />

              )}
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Jaipur, India, and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I find joy in problem-solving and creating thoughtful solutions through code. Programming isn&apos;t just a skill but a continuous journey of learning and exploration, 
                where each challenge presents an opportunity to grow and innovate.
              </p>
            </div>
          </div>
        </div>


        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                />

                <div className="space-y-2 ">

                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container " onClick={handleCopy}>
                    <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                    <p className="lg:text-xl md:text-xl font-small text-gray_gradient text-white">kpshekhawat678@gmail.com</p>
                </div>
                </div>
            </div>
            </div>
        </div>

    </section>
  );
};

export default About;