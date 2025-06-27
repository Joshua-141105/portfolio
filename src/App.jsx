import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const achievementsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header on load
      gsap.fromTo(headerRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Animate sections on scroll
      const sections = [
        aboutRef.current,
        skillsRef.current,
        educationRef.current,
        achievementsRef.current,
        projectsRef.current,
        contactRef.current
      ];

      sections.forEach((section, index) => {
        if (section) {
          gsap.fromTo(section,
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.1 * index
            }
          );
        }
      });

      // Animate skill bars
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar) => {
        const width = bar.style.width;
        gsap.fromTo(bar,
          { width: 0 },
          {
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none none"
            },
            width: width,
            duration: 1.5,
            ease: "power3.out"
          }
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main>
        <Header ref={headerRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Education ref={educationRef} />
        <Achievements ref={achievementsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
