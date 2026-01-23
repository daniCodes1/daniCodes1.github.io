import React, { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";
import {Link} from 'react-scroll';


export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Shipping ideas into reality.",
      "Designing reliable software systems.",
      "Simplifying hard problems.",
      "Building cool visualizations.",
    ],
    loop: true,
    delaySpeed: 1200,
    typeSpeed: 42,
    deleteSpeed: 22,
  });


  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: ["#a855f7", "#ffffff"] },
        opacity: { value: 0.28 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        links: { enable: true, distance: 140, opacity: 0.14, width: 1 },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 120, duration: 0.4 } },
      },
    }),
    []
  );

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="hero" id="home">
      <Particles className="hero__particles" init={particlesInit} options={particlesOptions} />

      <div className="hero__content">
        <p className="hero__starter">Hi, I’m Dani.</p>

        <h1 className="hero__title">
          <span className="hero__gradient hero__typewriter">{text}</span>
          <Cursor cursorStyle="▍" />
        </h1>

        <p className="hero__sub">
          Final-year CS student building reliable backend systems and clean, user-facing tools.
        </p>

        <div className="hero__ctas">
          {/* <a className="btn btn--primary" href="#projects">View experiences</a> */}
          <Link
  to="experiences"
  smooth={true}
  offset={-260}
  duration={500}
  className="btn btn--primary"
>
  View experiences
</Link>

           <Link to='about' smooth={true} offset={-100} duration={500}
          className='btn'>Learn more </Link>
        </div>
      </div>
    </section>
  );
}

// export default Hero