import React, { useEffect, useRef, useState } from "react";
import "./Home.css";


import DotMatrix from "../../components/DotMatrix/DotMatrix";

import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import RevealText from "../../components/RevealText/RevealText";
import Reviews from "../../components/Reviews/Reviews";
import SplitCardShowcase from "../../components/SplitCardShowcase/SplitCardShowcase";

import Footer from "../../components/Footer/Footer";
import TextReveal from "../../components/TextReveal/TextReveal";

import { siteConfig } from "../../data";
import { ArrowDown } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

let shouldPlayInitialMatrix;

const getInitialMatrixState = () => {
  if (shouldPlayInitialMatrix !== undefined) {
    return shouldPlayInitialMatrix;
  }

  shouldPlayInitialMatrix = !sessionStorage.getItem("home-dot-matrix-seen");
  if (shouldPlayInitialMatrix) {
    sessionStorage.setItem("home-dot-matrix-seen", "true");
  }

  return shouldPlayInitialMatrix;
};

const Home = ({ isPreloaderComplete = false }) => {
  const stickyTitlesRef = useRef(null);
  const titlesRef = useRef([]);
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);
  const [isInitialLoad] = useState(getInitialMatrixState);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    let workHeaderPinTrigger;
    if (workHeaderSection && homeWorkSection) {
      // Keep section label visible while cards advance underneath.
      workHeaderPinTrigger = ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          {isPreloaderComplete && (
            <DotMatrix
              color="#969992"
              dotSize={2}
              spacing={5}
              opacity={0.9}
              delay={isInitialLoad ? 2 : 0.5}
            />
          )}

          <div className="hero-center">
            <h1>{siteConfig.person.firstName}</h1>
            <h1>{siteConfig.person.lastName}</h1>
          </div>

          <div className="hero-footer">
            <div className="hero-footer-left">
              <p>{siteConfig.home.heroDescription}</p>
            </div>
            
            <div className="scroll-indicator" onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="primary sm">Scroll to see my work</span>
              <ArrowDown size={20} className="scroll-arrow" />
            </div>

            <div className="hero-footer-right">
              <p className="primary sm">▸ {siteConfig.home.heroHighlights[0]}</p>
              <p className="primary sm">▸ {siteConfig.home.heroHighlights[1]}</p>
            </div>
          </div>
        </section>

        <ProjectCarousel />
        
        <section className="about">
          <div className="container">
            <div className="about-copy">
              <TextReveal type="flicker">
                <p>{siteConfig.home.introTagline}</p>
              </TextReveal>
              <TextReveal>
                <h3>
                  {siteConfig.home.introHeading}
                </h3>
              </TextReveal>
            </div>
          </div>
          <div className="section-footer light">
            <TextReveal type="flicker">
              <p>{siteConfig.home.introStateLabel}</p>
            </TextReveal>
          </div>
        </section>

        <SplitCardShowcase />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Home;
