import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Scale,
  Users,
  Building2,
  Briefcase,
  Gavel,
  BookOpen,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import paulaImg from "@/assets/team-paula.jpg";
import robertaImg from "@/assets/team-roberta.jpg";
import renanImg from "@/assets/team-renan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IET Advogados Associados — Compromisso e Excelência" },
      {
        name: "description",
        content:
          "Escritório de advocacia dedicado a soluções jurídicas eficientes e personalizadas em Direito de Família, Imobiliário, Empresarial, Trabalhista, Civil e Previdenciário.",
      },
      { property: "og:title", content: "IET Advogados Associados" },
      {
        property: "og:description",
        content: "Compromisso com a justiça, excelência em resultados.",
      },
    ],
  }),
  component: Index,
});

const areas = [
  {
    icon: Users,
    title: "Direito de Família",
    text:
      "Cuidamos das questões mais delicadas com atenção e humanidade. Divórcio, pensão alimentícia, guarda, partilha de bens e inventários conduzidos com diálogo e equilíbrio.",
  },
  {
    icon: Building2,
    title: "Direito Imobiliário",
    text:
      "Segurança jurídica em compra, venda, locação e regularização de imóveis. Atuamos também na mediação de disputas e procedimentos extrajudiciais.",
  },
  {
    icon: Briefcase,
    title: "Contratual e Empresarial",
    text:
      "Mais que elaborar e revisar contratos, ajudamos empresas a construir relações comerciais sólidas. Prevenção de riscos e proteção dos interesses do negócio.",
  },
  {
    icon: Gavel,
    title: "Direito Trabalhista",
    text:
      "Justiça nas relações de trabalho. Defendemos empregados e empregadores em rescisões, verbas, horas extras e negociações com equilíbrio para ambas as partes.",
  },
  {
    icon: BookOpen,
    title: "Direito Civil",
    text:
      "Soluções para o dia a dia de pessoas e empresas. Responsabilidade civil, indenizações, obrigações e bens — transformamos problemas em soluções eficazes.",
  },
  {
    icon: HeartHandshake,
    title: "Direito Previdenciário",
    text:
      "Acompanhamos cada cliente em sua jornada por benefícios previdenciários: aposentadorias, pensões, auxílio-doença e revisões com cuidado e precisão.",
  },
];

const team = [
  {
    name: "Paula Andressa Izoton",
    oab: "OAB/SC 70.846B",
    role: "Trabalhista · Imobiliário · Empresarial",
    bio:
      "Pós-graduada em Direito Processual Civil e em Direito Processual do Trabalho. Defende os interesses de seus clientes com determinação e visão prática.",
    img: paulaImg,
  },
  {
    name: "Roberta Silveira Esperidião",
    oab: "OAB/SC 45.794",
    role: "Família · Imobiliário · Empresarial",
    bio:
      "Pós-graduada em Direito Notarial e Registral, Trabalho e Imobiliário. Busca soluções jurídicas estratégicas com dedicação, segurança e agilidade.",
    img: robertaImg,
  },
  {
    name: "Renan Cesar Trentin",
    oab: "OAB/RS 96.917",
    role: "Civil · Previdenciário · Empresarial",
    bio:
      "Pós-graduado em Direito Civil e Empresarial. Assegura os direitos de seus clientes com competência, ética e precisão em assessoria personalizada.",
    img: renanImg,
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .8s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="text-zinc-200 font-sans antialiased selection:bg-gold-primary/30 min-h-screen relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideoAsset.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="size-8 ring-1 ring-gold-primary/40 rounded flex items-center justify-center">
              <span className="font-serif text-gold-primary font-semibold">I</span>
            </div>
            <span className="font-serif text-lg tracking-tight text-zinc-100">
              IET Advogados
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-zinc-400 hover:text-gold-primary transition-colors">Sobre</a>
            <a href="#areas" className="text-sm text-zinc-400 hover:text-gold-primary transition-colors">Áreas de Atuação</a>
            <a href="#equipe" className="text-sm text-zinc-400 hover:text-gold-primary transition-colors">Equipe</a>
            <a href="#contato" className="text-sm text-zinc-400 hover:text-gold-primary transition-colors">Contato</a>
            <a
              href="#contato"
              className="text-sm bg-gold-primary text-surface-base py-2 px-3.5 font-medium rounded-sm ring-1 ring-gold-primary hover:bg-gold-soft transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
          <button
            className="md:hidden text-zinc-300"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-800/50 bg-black/90 backdrop-blur-lg px-6 py-4 flex flex-col gap-4">
            {[
              ["Sobre", "#sobre"],
              ["Áreas de Atuação", "#areas"],
              ["Equipe", "#equipe"],
              ["Contato", "#contato"],
            ].map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="text-sm text-zinc-400 hover:text-gold-primary"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <span className="text-gold-primary font-medium text-sm tracking-[0.2em] uppercase mb-6 block">
                IET Advogados Associados
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-zinc-100 leading-[1.05] mb-8 text-balance">
                Compromisso com a Justiça, <span className="italic text-gold-primary">Excelência</span> em Resultados.
              </h1>
              <p className="text-zinc-300 max-w-[52ch] mx-auto text-pretty leading-relaxed mb-10">
                Escritório dedicado a oferecer soluções jurídicas eficientes e personalizadas. Atuamos com ética, transparência e compromisso na defesa dos direitos de nossos clientes em diversas áreas do Direito.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="#contato"
                  className="text-sm bg-gold-primary text-surface-base py-3 px-5 flex items-center gap-2 font-medium rounded-sm ring-1 ring-gold-primary hover:bg-gold-soft transition-colors"
                >
                  Agende uma Consulta
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#areas"
                  className="text-sm font-medium border-b border-gold-primary/40 pb-1 hover:border-gold-primary transition-all text-zinc-200"
                >
                  Conheça nossas áreas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-24 px-6 border-t border-zinc-800/50 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="text-gold-primary text-xs tracking-[0.3em] uppercase">Sobre</span>
              <h2 className="font-serif text-4xl md:text-5xl text-zinc-100 mt-4 mb-8 text-balance">
                Um escritório <span className="italic">construído sobre confiança</span>.
              </h2>
              <p className="text-zinc-400 leading-relaxed text-pretty md:text-lg">
                A IET Advocacia presta atendimento próximo e confiável, transformando desafios legais em resultados concretos. Cada cliente é atendido com escuta atenta, estratégia clara e foco em soluções duradouras.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                ["10+", "Anos de atuação"],
                ["6", "Áreas especializadas"],
                ["100%", "Atendimento ético"],
                ["3", "Advogados parceiros"],
              ].map(([n, l], i) => (
                <Reveal key={l} delay={i * 80}>
                  <div className="text-left md:text-center">
                    <div className="font-serif text-3xl md:text-4xl text-gold-primary mb-2">{n}</div>
                    <div className="text-xs tracking-widest uppercase text-zinc-500">{l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section id="areas" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <Reveal className="max-w-[52ch]">
                <span className="text-gold-primary text-xs tracking-[0.3em] uppercase">Atuação</span>
                <h2 className="font-serif text-4xl md:text-5xl text-zinc-100 mt-4 text-balance">
                  Nossas Áreas de Atuação
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-zinc-400 text-pretty max-w-md">
                  Expertise jurídica em seis frentes complementares, sempre com olhar estratégico e atenção aos detalhes do seu caso.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 ring-1 ring-black/5 overflow-hidden rounded-lg">
              {areas.map((a, i) => {
                const Icon = a.icon;
                return (
                  <Reveal key={a.title} delay={i * 60}>
                    <div className="group bg-black/40 backdrop-blur-sm p-10 hover:bg-black/60 transition-colors cursor-default h-full flex flex-col border border-zinc-800/50 rounded-sm">
                      <div className="size-10 mb-8 flex items-center justify-center border border-zinc-800 group-hover:border-gold-primary/50 transition-colors">
                        <Icon className="size-4 text-gold-primary" />
                      </div>
                      <h3 className="font-serif text-2xl text-zinc-100 mb-4">{a.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-8 flex-1">
                        {a.text}
                      </p>
                      <div className="h-px w-0 group-hover:w-full bg-gold-primary/60 transition-all duration-500" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Equipe — Horizontal portrait gallery */}
        <section id="equipe" className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-gold-primary text-xs tracking-[0.3em] uppercase">Equipe</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-zinc-100 mt-4">
                    Nossa Equipe
                  </h2>
                </div>
                <p className="text-zinc-500 text-sm max-w-md">
                  Advogados parceiros com formação especializada e visão complementar para atender você em diferentes frentes.
                </p>
              </div>
            </Reveal>

            <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 100}>
                  <article className="flex-none w-[320px] md:w-[360px] snap-start group">
                    <div className="overflow-hidden rounded-[min(1vw,12px)] outline outline-1 -outline-offset-1 outline-white/5 mb-6">
                      <img
                        src={m.img}
                        alt={m.name}
                        loading="lazy"
                        width={640}
                        height={800}
                        className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                      />
                    </div>
                    <h3 className="font-serif text-2xl text-zinc-100 mb-1">{m.name}</h3>
                    <p className="text-xs tracking-widest uppercase text-gold-primary/90 mb-3">
                      {m.oab}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">{m.role}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{m.bio}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-24 border-t border-zinc-800/50 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-14">
                <span className="text-gold-primary text-xs tracking-[0.3em] uppercase">Contato</span>
                <h2 className="font-serif text-4xl md:text-5xl text-zinc-100 mt-4 text-balance">
                  Entre em Contato
                </h2>
                <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
                  Estamos à disposição para esclarecer dúvidas e agendar uma consulta confidencial.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12">
              <Reveal>
                <ul className="space-y-5">
                  {[
                    ["(47) 99976-3026", "tel:+5547999763026"],
                    ["(54) 98121-3027", "tel:+5554981213027"],
                    ["(54) 99971-8143", "tel:+5554999718143"],
                  ].map(([p, h]) => (
                    <li key={p}>
                      <a
                        href={h}
                        className="flex items-center gap-4 text-zinc-300 hover:text-gold-primary transition-colors group"
                      >
                        <span className="size-10 grid place-items-center border border-zinc-800 group-hover:border-gold-primary/50 transition-colors">
                          <Phone className="size-4 text-gold-primary" />
                        </span>
                        <span className="text-sm">{p}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="mailto:ietassociados@gmail.com"
                      className="flex items-center gap-4 text-zinc-300 hover:text-gold-primary transition-colors group"
                    >
                      <span className="size-10 grid place-items-center border border-zinc-800 group-hover:border-gold-primary/50 transition-colors">
                        <Mail className="size-4 text-gold-primary" />
                      </span>
                      <span className="text-sm">ietassociados@gmail.com</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-zinc-400">
                    <span className="size-10 grid place-items-center border border-zinc-800">
                      <MapPin className="size-4 text-gold-primary" />
                    </span>
                    <span className="text-sm">Atendimento em SC e RS</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <input
                    required
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full bg-black/40 border border-zinc-800 px-4 py-3.5 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-primary/60 transition-colors rounded-sm"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Seu E-mail"
                    className="w-full bg-black/40 border border-zinc-800 px-4 py-3.5 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-primary/60 transition-colors rounded-sm"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Sua Mensagem"
                    className="w-full bg-black/40 border border-zinc-800 px-4 py-3.5 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-primary/60 transition-colors rounded-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold-primary text-surface-base py-4 font-medium tracking-wide hover:bg-gold-soft transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    {sent ? "Mensagem enviada ✓" : "Enviar Mensagem"}
                  </button>
                  {sent && (
                    <p className="text-xs text-zinc-500 text-center">
                      Retornaremos o contato em breve.
                    </p>
                  )}
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-zinc-800/50 py-16 px-6 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-[40ch]">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="size-8 ring-1 ring-gold-primary/40 rounded flex items-center justify-center">
                <span className="font-serif text-gold-primary font-semibold">I</span>
              </div>
              <span className="font-serif text-lg text-zinc-100">IET Advogados</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Excelência e confiança em serviços jurídicos. Atendimento personalizado em Santa Catarina e Rio Grande do Sul.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <p className="text-xs font-medium text-zinc-300 uppercase tracking-widest mb-4">
                Links Rápidos
              </p>
              <ul className="space-y-2.5">
                <li><a href="#sobre" className="text-sm text-zinc-500 hover:text-gold-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#areas" className="text-sm text-zinc-500 hover:text-gold-primary transition-colors">Áreas de Atuação</a></li>
                <li><a href="#equipe" className="text-sm text-zinc-500 hover:text-gold-primary transition-colors">Equipe</a></li>
                <li><a href="#contato" className="text-sm text-zinc-500 hover:text-gold-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-300 uppercase tracking-widest mb-4">Siga-nos</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-gold-primary transition-colors"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900/80 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-zinc-600">
            © 2026 IET Advogados Associados — Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-600">Compromisso · Ética · Excelência</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5547999763026"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg shadow-black/40 hover:scale-110 transition-transform"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
