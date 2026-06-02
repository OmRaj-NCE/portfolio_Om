import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import WebGLBackground from './components/WebGLBackground';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import AboutMe from './components/AboutMe';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-white selection:text-black">
      <CustomCursor />
      
      {/* Absolute fixed 3D background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <Suspense fallback={null}>
            <WebGLBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        
        <Expertise />
        
        <AboutMe />

        <Pricing />
        
        <Contact />
      </main>
    </div>
  );
}

