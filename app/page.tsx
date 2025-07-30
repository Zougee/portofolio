'use client';

import dynamic from 'next/dynamic';
import Navbar from './components/Navbar/Navbar';
import Proyek from './components/Proyek/Proyek';
import RotatingText from './components/RotatingText/RotatingText';
import BlurText from './components/BlurText/BlurText';
import SplitText from './components/SplitText/SplitText';
import AnimatedContent from './components/AnimatedContent/AnimatedContent';

// ✅ Import Lanyard secara dinamis agar tidak bikin lag di awal
const Lanyard = dynamic(() => import('./components/Lanyard/Lanyard'), {
  ssr: false,
  loading: () => <div className="text-center text-white">Loading 3D model...</div>,
});

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1d3c45] text-white">
      <Navbar />

      <section
        id="home"
        className="container mx-auto min-h-screen px-6 lg:px-12 flex items-center pt-24"
      >
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="flex flex-col gap-6">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">I'm Ready for</h1>
                  <RotatingText
                    texts={[
                      'Internet of Things',
                      'Web Design',
                      'Networking',
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#d2601a] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                    staggerFrom="last"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </AnimatedContent>

              <div>
                <BlurText
                  text="M. Gading Nur Alif Widodo"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-5xl font-bold"
                />
                <BlurText
                  text="Internet Based System Automation"
                  delay={450}
                  animateBy="words"
                  direction="top"
                  className="text-5xl font-bold text-[#d2601a]"
                />
              </div>

              <div>
                <SplitText
                  text="I'm an IT Specialist in IoT, with the Ability to Design and Develop Automated, Integrated Solutions. Skilled in Web Design using Modern Frameworks, with Strong Expertise in Computer Networking to Ensure Scalable and Reliable Systems."
                  className="text-xl font-semibold leading-relaxed text-left max-w-[700px] sm:max-w-[600px] lg:max-w-[700px]"
                  delay={20}
                  duration={0.6}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center items-start mt-8 md:mt-4">
            <div
              className="
                aspect-square
                w-[80vw] max-w-[300px]
                sm:w-[320px] sm:max-w-none
                md:w-[380px]
                lg:w-[500px]
                flex items-center justify-center
                -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12
              "
            >
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pt-20">
        <Proyek />
      </section>

      <footer id="contact" className="bg-[#162b32] py-10 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
          <div className="flex justify-center gap-8 text-4xl">
            <a
              href="https://instagram.com/gadiinq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-125"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/in/m-gading"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Zougee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition-transform transform hover:scale-125"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            © 2025 M. Gading Nur Alif Widodo. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
