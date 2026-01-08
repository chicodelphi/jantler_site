import {
  MessageCircle,
  ShieldCheck,
  Scale,
  ArrowRight
} from 'lucide-react';

import alanImg from './assets/alan-jantsch.png';
import escritorioImg from './assets/escritorio.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-serif tracking-wide">
            JANTLER <span className="opacity-70">ADVOCACIA</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="pt-32 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs opacity-60 mb-6">
            A trajetória
          </p>

          <h1 className="font-serif text-5xl lg:text-6xl leading-tight mb-8">
            Defensor incansável dos <br /> direitos do consumidor.
          </h1>

          <p className="text-white/70 mb-6 max-w-xl">
            O Dr. Alan Jantsch construiu sua carreira de 15 anos no epicentro do
            direito empresarial e do consumidor.
          </p>
        </div>

        <div className="relative aspect-square border border-white/10 overflow-hidden">
          <img
            src={escritorioImg}
            alt="Escritório Jantler"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-neutral-950 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={alanImg}
            alt="Dr. Alan Jantsch"
            className="w-full h-full object-cover grayscale border border-white/10"
          />

          <div>
            <h2 className="font-serif text-4xl mb-6">
              Excelência jurídica com visão estratégica.
            </h2>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex gap-3">
                <ShieldCheck size={18} /> Defesa estratégica do consumidor
              </div>
              <div className="flex gap-3">
                <Scale size={18} /> Atuação previdenciária
              </div>
              <div className="flex gap-3">
                <MessageCircle size={18} /> Atendimento direto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 text-center border-t border-white/10">
        <h2 className="font-serif text-4xl mb-6">
          Fale diretamente com o advogado.
        </h2>

        <a
          href="https://wa.me/554899424894"
          target="_blank"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 hover:bg-neutral-200 transition"
        >
          WhatsApp <ArrowRight size={18} />
        </a>
      </section>

      <footer className="py-10 text-center text-xs text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} Jantler Advocacia
      </footer>
    </div>
  );
}
