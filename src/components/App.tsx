import { LanguageProvider } from "../context/LanguageContext";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

