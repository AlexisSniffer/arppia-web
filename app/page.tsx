import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <footer className="py-12 border-t border-white/10 text-center bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">Arppia</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Arppia. Construyendo el futuro digital. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
