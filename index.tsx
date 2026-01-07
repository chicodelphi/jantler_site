import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  MessageCircle, 
  Scale, 
  ShieldCheck, 
  Stethoscope, 
  TrendingUp, 
  MapPin, 
  Phone, 
  ChevronRight,
  Menu,
  X,
  Award,
  Globe,
  ArrowRight,
  Shield
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP_LINK = "https://wa.me/554899424894?text=Olá%20Dr.%20Alan,%20gostaria%20de%20uma%20consultoria.";

  // Reusing the same portrait image for both hero and about
  const LAWYER_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"; 
  // NOTE: In a real environment, the user should replace this URL with the actual uploaded asset URL.
  // Using a very high quality representative portrait from Unsplash since I cannot link local base64 easily here without huge blobs.
  const PORTRAIT_URL = "https://storage.googleapis.com/path-to-your-image/advogado.jpg"; // Reference for final implementation

  const Header = () => (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-sm">
            <Shield size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tighter serif">JANTLER</span>
            <span className="text-white/60 text-[10px] font-medium tracking-[0.4em] -mt-1 uppercase">ADVOCACIA</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-widest uppercase">
          <a href="#inicio" className="hover:text-white/60 transition-colors">Início</a>
          <a href="#atuacao" className="hover:text-white/60 transition-colors">Atuação</a>
          <a href="#sobre" className="hover:text-white/60 transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-white/60 transition-colors">Contato</a>
          <a href={WHATSAPP_LINK} target="_blank" className="bg-white text-black px-6 py-2.5 rounded-sm hover:bg-white/90 transition-all">
            Falar com Dr. Alan
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-2xl serif">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
          <a href="#atuacao" onClick={() => setIsMenuOpen(false)}>Atuação</a>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
          <a href={WHATSAPP_LINK} className="bg-white text-black px-10 py-4 rounded-sm text-lg font-bold font-sans">
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 text-white space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Atuação Nacional
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] serif tracking-tighter">
              Justiça e <br />
              <span className="text-white/40 italic">Integridade.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed font-light">
              Especialista em Direito do Consumidor e Previdenciário. 
              A defesa incisiva de quem conhece as táticas das grandes corporações por dentro.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href={WHATSAPP_LINK} target="_blank" className="bg-white text-black px-10 py-5 rounded-sm font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-2xl group">
              <MessageCircle size={20} />
              CONSULTORIA IMEDIATA
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-lg">
            <div>
              <p className="text-3xl font-bold serif">15</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 leading-tight">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-bold serif">SC/DF/AM</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 leading-tight">Inscrições OAB</p>
            </div>
            <div>
              <p className="text-3xl font-bold serif">24h</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 leading-tight">Suporte ao Cliente</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden group">
            {/* The provided image shows a man with a beard and dark hair. Replicating that look. */}
            <img 
			src="/images/alan-jantsch.png"
			alt="Dr. Alan Jantsch"
			className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
			/>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 space-y-1">
              <p className="text-white font-bold text-2xl serif">Alan Jantsch</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">Advogado Fundador</p>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-white/10 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-white/10 -z-10"></div>
        </div>
      </div>
    </section>
  );

  const Specialties = () => {
    const areas = [
      {
        icon: <Scale className="text-white" size={28} />,
        title: "Direito do Consumidor",
        desc: "Experiência de 15 anos combatendo práticas abusivas de grandes empresas de telefonia e varejo."
      },
      {
        icon: <Stethoscope className="text-white" size={28} />,
        title: "Isenção de Imposto de Renda",
        desc: "Direito garantido para pessoas com doenças graves. Recuperação de valores retroativos."
      },
      {
        icon: <ShieldCheck className="text-white" size={28} />,
        title: "Auxílios Previdenciários",
        desc: "Reestabelecimento de benefícios e auxílios-doença cessados indevidamente pelo INSS."
      },
      {
        icon: <TrendingUp className="text-white" size={28} />,
        title: "Indenizações",
        desc: "Busca reparatória por danos morais e materiais com foco em resultados céleres."
      }
    ];

    return (
      <section id="atuacao" className="py-32 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-end mb-24">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-black/40 font-bold uppercase tracking-[0.3em] text-[10px]">Áreas de Especialidade</h2>
              <h3 className="text-5xl md:text-6xl font-bold serif leading-tight">Expertise que <br /> gera <span className="italic">resultados.</span></h3>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-black/60 text-lg leading-relaxed">
                Nossa atuação é pautada na agilidade técnica e no conhecimento profundo das brechas exploradas pelas grandes corporações.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-black/10 border border-black/10 overflow-hidden">
            {areas.map((area, i) => (
              <div key={i} className="group p-12 bg-white hover:bg-black hover:text-white transition-all duration-500">
                <div className="mb-10 w-16 h-16 border border-black group-hover:border-white flex items-center justify-center transition-colors">
                  {React.cloneElement(area.icon as React.ReactElement<any>, { className: "group-hover:text-white text-black" })}
                </div>
                <h4 className="text-2xl font-bold mb-6 serif">{area.title}</h4>
                <p className="text-black/60 group-hover:text-white/60 mb-8 leading-relaxed">
                  {area.desc}
                </p>
                <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase border-b border-black group-hover:border-white pb-1 transition-all">
                  Consultar caso <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const About = () => (
    <section id="sobre" className="py-32 bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">A Trajetória</h2>
            <h3 className="text-4xl md:text-5xl font-bold serif leading-tight">Defensor incansável dos direitos do consumidor.</h3>
            
            <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
              <p>
                O <strong>Dr. Alan Jantsch</strong> construiu sua carreira de 15 anos no epicentro do direito empresarial e do consumidor. Tendo advogado para gigantes do setor de Telefonia, ele possui o conhecimento estratégico necessário para antecipar movimentos e garantir vitórias.
              </p>
              <p>
                Desde 2014, dedica-se <strong>exclusivamente à proteção do consumidor</strong> e de beneficiários previdenciários, atendendo com rigor técnico em diversos Estados brasileiros, incluindo SC, DF e AM.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 glass rounded-sm">
                <p className="text-white font-bold mb-1">OAB/SC 73129</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Inscrição Principal</p>
              </div>
              <div className="p-6 glass rounded-sm">
                <p className="text-white font-bold mb-1">OAB/AM A2251 | OAB/DF 78906</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Suplementares</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square bg-white/5 overflow-hidden border border-white/10 p-4">
               <img 
				src="/images/escritorio.jpg"
				alt="Escritório Jantler"
				className="w-full h-full object-cover grayscale opacity-80"/>
            </div>
            {/* Minimalist floating element */}
            <div className="absolute -bottom-10 -right-10 bg-white text-black p-10 hidden md:block">
              <p className="text-5xl font-bold serif mb-1">10y+</p>
              <p className="text-[10px] font-bold tracking-widest uppercase opacity-60">Pró-Consumidor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contato" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-black/40 font-bold uppercase tracking-[0.3em] text-[10px]">Atendimento Digital e Presencial</h2>
            <h3 className="text-5xl md:text-6xl font-bold serif">Fale conosco.</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 border-t border-black/10 pt-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-black/40 uppercase tracking-widest text-[10px] font-bold">
                  <MapPin size={14} /> Localização
                </div>
                <p className="text-xl serif font-bold">Rua Dr Montaury, 1471, Centro<br />Caxias do Sul - RS</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-black/40 uppercase tracking-widest text-[10px] font-bold">
                  <Phone size={14} /> WhatsApp
                </div>
                <a href={WHATSAPP_LINK} className="text-3xl font-bold hover:opacity-70 transition-opacity">(48) 99424-894</a>
              </div>
              
              <div className="pt-8">
                 <a href={WHATSAPP_LINK} className="bg-black text-white px-10 py-6 font-bold flex items-center justify-center gap-3 hover:bg-black/90 transition-all">
                  INICIAR ATENDIMENTO AGORA <ChevronRight size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-8">
               <p className="text-black/60 leading-relaxed text-lg italic">
                "Nosso compromisso é com a transparência e a busca incessante pela justiça em cada causa, tratando cada cliente como prioridade absoluta."
              </p>
              <div className="h-px bg-black/10 w-24"></div>
              <div>
                <p className="font-bold text-xl serif">Alan Jantsch</p>
                <p className="text-black/40 text-xs tracking-widest uppercase">Diretor Jurídico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-sm">
              <Shield size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl tracking-tighter serif">JANTLER</span>
              <span className="text-white/40 text-[10px] font-medium tracking-[0.5em] -mt-1 uppercase">ADVOCACIA</span>
            </div>
          </div>

          <div className="text-left md:text-right space-y-2">
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Inscrições Profissionais</p>
            <p className="text-white/60 text-xs">OAB/SC 73129 • OAB/AM A2251 • OAB/DF 78906</p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Jantler Advocacia. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Specialties />
      <About />
      <Contact />
      <Footer />
      
      {/* Dynamic Floating Button for High Conversion */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 bg-white text-black p-5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-sm text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          Falar com Dr. Alan
        </span>
      </a>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
