import React from 'react';
import {
  MessageCircle,
  Scale,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  MapPin,
  Phone,
  ChevronRight,
  ArrowRight,
  Shield
} from 'lucide-react';

export default function App() {
  const WHATSAPP_LINK =
    'https://wa.me/554899424894?text=Olá%20Dr.%20Alan,%20gostaria%20de%20uma%20consultoria.';

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield size={22} />
            <div>
              <div className="font-serif text-xl font-bold">JANTLER</div>
              <div className="text-[10px] tracking-[0.4em] opacity-60">
                ADVOCACIA
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
            <a href="#inicio">Início</a>
            <a href="#atuacao">Atuação</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            className="bg-white text-black px-6 py-2 text-sm font-semibold"
          >
            Falar com Dr. Alan
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="pt-32 pb-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-xs opacity-60 mb-6">
            A trajetória
          </p>

          <h1 className="font-serif text-5xl lg:text-6xl leading-tight mb-8">
            Defensor incansável dos <br /> direitos do consumidor.
          </h1>

          <p className="text-white/70 leading-relaxed mb-6 max-w-xl">
            O Dr. Alan Jantsch construiu sua carreira de 15 anos no epicentro do
            direito empresarial e do consumidor, atuando estrategicamente para
            antecipar riscos e garantir vitórias.
          </p>

          <p className="text-white/60 leading-relaxed mb-10 max-w-xl">
            Desde 2014, dedica-se exclusivamente à proteção do consumidor e de
            beneficiários previdenciários.
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

        <img
          src="/images/escritorio.jpg"
          className="w-full h-full object-cover grayscale"
        />
      </section>

      {/* ATUAÇÃO */}
      <section id="atuacao" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-16">
            Áreas de atuação
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Area
              icon={<Scale />}
              title="Direito do Consumidor"
              desc="Combate a práticas abusivas de grandes empresas."
            />
            <Area
              icon={<Stethoscope />}
              title="Isenção de IR"
              desc="Direito garantido a portadores de doenças graves."
            />
            <Area
              icon={<ShieldCheck />}
              title="Previdenciário"
              desc="Auxílios e benefícios do INSS."
            />
            <Area
              icon={<TrendingUp />}
              title="Indenizações"
              desc="Danos morais e materiais."
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <img
            src="/images/alan-jantsch.png"
            className="w-full object-cover grayscale"
          />

          <div>
            <h2 className="font-serif text-4xl mb-6">
              Excelência jurídica com visão estratégica.
            </h2>

            <p className="text-white/70 mb-6">
              Defesa técnica, ética e focada em resultado.
            </p>

            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <ShieldCheck /> Defesa estratégica do consumidor
              </li>
              <li className="flex gap-3">
                <Scale /> Atuação previdenciária
              </li>
              <li className="flex gap-3">
                <MessageCircle /> Atendimento direto
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl mb-6">
            Fale diretamente com o advogado.
          </h2>

          <p className="text-black/60 mb-10">
            Atendimento humanizado e estratégico.
          </p>

          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5"
          >
            WhatsApp <ArrowRight />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} Jantler Advocacia
      </footer>
    </div>
  );
}

function Area({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 border border-black/10">
      <div className="mb-4">{icon}</div>
      <h3 className="font-serif text-2xl mb-2">{title}</h3>
      <p className="text-black/60">{desc}</p>
    </div>
  );
}
