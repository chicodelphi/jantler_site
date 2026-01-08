import React from 'react';
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
            <a href="#inicio" className="hover:opacity-70">Início</a>
            <a href="#atuacao" className="hover:opacity-70">Atuação</a>
            <a href="#sobre" className="hover:opacity-70">Sobre</a>
            <a href="#contato" className="hover:opacity-70">Contato</a>
          </nav>
          <a
            href="#contato"
            className="bg-white text-black px-5 py-2 text-sm font-medium hover:bg-neutral-200 transition"
          >
            Falar com Dr. Alan
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="pt-32 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center"
      >
        {/* TEXTO */}
        <div>
          <p className="uppercase tracking-[0.3em] text-xs opacity-60 mb-6">
            A trajetória
          </p>

          <h1 className="font-serif text-5xl lg:text-6xl leading-tight mb-8">
            Defensor incansável dos <br />
            direitos do consumidor.
          </h1>

          <p className="text-white/70 leading-relaxed mb-6 max-w-xl">
            O Dr. Alan Jantsch construiu sua carreira de 15 anos no epicentro
            do direito empresarial e do consumidor, atuando estrategicamente
            para antecipar riscos e garantir vitórias.
          </p>

          <p className="text-white/60 leading-relaxed mb-10 max-w-xl">
            Desde 2014, dedica-se exclusivamente à proteção do consumidor
            e beneficiários previdenciários, com atuação em diversos
            estados brasileiros.
          </p>

          <div className="flex gap-4">
            <div className="border border-white/10 p-5">
              <p className="text-sm font-medium">OAB/SC 73129</p>
              <p className="text-xs opacity-60">Inscrição principal</p>
            </div>
            <div className="border border-white/10 p-5">
              <p className="text-sm font-medium">
                OAB/AM A2251 | OAB/DF 78906
              </p>
              <p className="text-xs opacity-60">Suplementares</p>
            </div>
          </div>
        </div>

        {/* IMAGEM DO ESCRITÓRIO */}
        <div className="relative aspect-square border border-white/10 overflow-hidden">
          <img
            src={escritorioImg}
            alt="Escritório Jantler"
            className="w-full h-full object-cover grayscale opacity-90"
          />
          <div className="absolute inset-0 bg-black/40" />
          <span className="absolute top-4 left-4 text-xs opacity-70">
            Escritório Jantler
          </span>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="py-24 bg-neutral-950 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden border border-white/10">
            <img
              src={alanImg}
              alt="Dr. Alan Jantsch"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div>
            <h2 className="font-serif text-4xl mb-6">
              Excelência jurídica com visão estratégica.
            </h2>

            <p className="text-white/70 leading-relaxed mb-6">
              Atuação focada em resultados, com rigor técnico, ética e
              profundo conhecimento do sistema jurídico.
            </p>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} />
                Defesa estratégica do consumidor
              </div>
              <div className="flex items-center gap-3">
                <Scale size={18} />
                Atuação previdenciária especializada
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} />
                Atendimento direto com o advogado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="py-24 text-center border-t border-white/10"
      >
        <h2 className="font-serif text-4xl mb-6">
          Fale diretamente com o advogado.
        </h2>
        <p className="text-white/60 mb-10">
          Atendimento humanizado, estratégico e transparente.
        </p>

        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 hover:bg-neutral-200 transition"
        >
          Iniciar conversa
          <ArrowRight size={18} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} Jantler Advocacia — Todos os direitos reservados.
      </footer>
    </div>
  );
}
