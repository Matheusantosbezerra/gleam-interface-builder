import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, BookOpen, Briefcase, Building2, Gavel, HeartHandshake, Instagram, Mail, MapPin, Menu, MessageCircle, Pause, Phone, Play, Users, Volume2, VolumeX, X } from "lucide-react";
//#region src/assets/hero-video.mp4
var hero_video_default = "/assets/hero-video-BZSYfME4.mp4";
//#endregion
//#region src/assets/team-paula.jpg
var team_paula_default = "/assets/team-paula-DXojx4YJ.jpg";
//#endregion
//#region src/assets/team-roberta.jpg
var team_roberta_default = "/assets/team-roberta-BgkHXpQr.jpg";
//#endregion
//#region src/assets/team-renan.jpg
var team_renan_default = "/assets/team-renan-HqEj-4c3.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var areas = [
	{
		icon: Users,
		title: "Direito de Família",
		text: "Cuidamos das questões mais delicadas com atenção e humanidade. Divórcio, pensão alimentícia, guarda, partilha de bens e inventários conduzidos com diálogo e equilíbrio."
	},
	{
		icon: Building2,
		title: "Direito Imobiliário",
		text: "Segurança jurídica em compra, venda, locação e regularização de imóveis. Atuamos também na mediação de disputas e procedimentos extrajudiciais."
	},
	{
		icon: Briefcase,
		title: "Contratual e Empresarial",
		text: "Mais que elaborar e revisar contratos, ajudamos empresas a construir relações comerciais sólidas. Prevenção de riscos e proteção dos interesses do negócio."
	},
	{
		icon: Gavel,
		title: "Direito Trabalhista",
		text: "Justiça nas relações de trabalho. Defendemos empregados e empregadores em rescisões, verbas, horas extras e negociações com equilíbrio para ambas as partes."
	},
	{
		icon: BookOpen,
		title: "Direito Civil",
		text: "Soluções para o dia a dia de pessoas e empresas. Responsabilidade civil, indenizações, obrigações e bens — transformamos problemas em soluções eficazes."
	},
	{
		icon: HeartHandshake,
		title: "Direito Previdenciário",
		text: "Acompanhamos cada cliente em sua jornada por benefícios previdenciários: aposentadorias, pensões, auxílio-doença e revisões com cuidado e precisão."
	}
];
var team = [
	{
		name: "Paula Andressa Izoton",
		oab: "OAB/SC 70.846B",
		role: "Trabalhista · Imobiliário · Empresarial",
		bio: "Pós-graduada em Direito Processual Civil e em Direito Processual do Trabalho. Defende os interesses de seus clientes com determinação e visão prática.",
		img: team_paula_default
	},
	{
		name: "Roberta Silveira Esperidião",
		oab: "OAB/SC 45.794",
		role: "Família · Imobiliário · Empresarial",
		bio: "Pós-graduada em Direito Notarial e Registral, Trabalho e Imobiliário. Busca soluções jurídicas estratégicas com dedicação, segurança e agilidade.",
		img: team_roberta_default
	},
	{
		name: "Renan Cesar Trentin",
		oab: "OAB/RS 96.917",
		role: "Civil · Previdenciário · Empresarial",
		bio: "Pós-graduado em Direito Civil e Empresarial. Assegura os direitos de seus clientes com competência, ética e precisão em assessoria personalizada.",
		img: team_renan_default
	}
];
function useReveal() {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		visible
	};
}
function Reveal({ children, delay = 0, className = "" }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ jsx("div", {
		ref,
		className,
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : "translateY(18px)",
			transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .8s cubic-bezier(.16,1,.3,1) ${delay}ms`
		},
		children
	});
}
function Index() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [sent, setSent] = useState(false);
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isMuted, setIsMuted] = useState(true);
	const [mouseOffset, setMouseOffset] = useState({
		x: 0,
		y: 0
	});
	const [mousePos, setMousePos] = useState({
		x: -100,
		y: -100
	});
	const [isHovering, setIsHovering] = useState(false);
	useEffect(() => {
		const handleMouseMove = (e) => {
			const { innerWidth, innerHeight } = window;
			const x = e.clientX / innerWidth * 2 - 1;
			const y = e.clientY / innerHeight * 2 - 1;
			setMouseOffset({
				x: x * 12,
				y: y * 12
			});
			setMousePos({
				x: e.clientX,
				y: e.clientY
			});
			setIsHovering(!!e.target.closest("a, button, [role='button'], .cursor-pointer"));
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);
	const togglePlay = () => {
		if (!videoRef.current) return;
		if (isPlaying) videoRef.current.pause();
		else videoRef.current.play();
		setIsPlaying(!isPlaying);
	};
	const toggleMute = () => {
		if (!videoRef.current) return;
		videoRef.current.muted = !videoRef.current.muted;
		setIsMuted(!isMuted);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "text-zinc-200 font-sans antialiased selection:bg-gold-primary/30 min-h-screen relative lg:cursor-none",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "hidden md:block fixed top-0 left-0 size-1.5 bg-gold-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen",
				style: { transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border border-gold-primary/40 will-change-transform bg-gold-primary/5 transition-all",
				style: {
					width: isHovering ? "48px" : "28px",
					height: isHovering ? "48px" : "28px",
					transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
					transition: "transform 0.12s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
					backgroundColor: isHovering ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0.02)"
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-0 overflow-hidden",
				children: [/* @__PURE__ */ jsx("video", {
					ref: videoRef,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					className: "w-full h-full object-cover will-change-transform",
					style: {
						transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px) scale(1.06)`,
						transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
					},
					children: /* @__PURE__ */ jsx("source", {
						src: hero_video_default,
						type: "video/mp4"
					})
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "fixed bottom-6 left-6 z-50 flex gap-3",
				children: [/* @__PURE__ */ jsx("button", {
					onClick: togglePlay,
					"aria-label": isPlaying ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo",
					className: "size-11 rounded-full bg-black/60 border border-zinc-800/80 text-zinc-300 backdrop-blur-md grid place-items-center hover:text-gold-primary hover:border-gold-primary/50 transition-all shadow-lg shadow-black/40",
					children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: "size-4" }) : /* @__PURE__ */ jsx(Play, { className: "size-4" })
				}), /* @__PURE__ */ jsx("button", {
					onClick: toggleMute,
					"aria-label": isMuted ? "Ativar som do vídeo" : "Mutar vídeo",
					className: "size-11 rounded-full bg-black/60 border border-zinc-800/80 text-zinc-300 backdrop-blur-md grid place-items-center hover:text-gold-primary hover:border-gold-primary/50 transition-all shadow-lg shadow-black/40",
					children: isMuted ? /* @__PURE__ */ jsx(VolumeX, { className: "size-4" }) : /* @__PURE__ */ jsx(Volume2, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-black/40 backdrop-blur-md",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#top",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-8 ring-1 ring-gold-primary/40 rounded flex items-center justify-center",
								children: /* @__PURE__ */ jsx("span", {
									className: "font-serif text-gold-primary font-semibold",
									children: "I"
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "font-serif text-lg tracking-tight text-zinc-100",
								children: "IET Advogados"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "hidden md:flex items-center gap-8",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "#sobre",
									className: "text-sm text-zinc-400 hover:text-gold-primary transition-colors",
									children: "Sobre"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#areas",
									className: "text-sm text-zinc-400 hover:text-gold-primary transition-colors",
									children: "Áreas de Atuação"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#equipe",
									className: "text-sm text-zinc-400 hover:text-gold-primary transition-colors",
									children: "Equipe"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#contato",
									className: "text-sm text-zinc-400 hover:text-gold-primary transition-colors",
									children: "Contato"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#contato",
									className: "text-sm bg-gold-primary text-surface-base py-2 px-3.5 font-medium rounded-sm ring-1 ring-gold-primary hover:bg-gold-soft transition-colors",
									children: "Agendar Consulta"
								})
							]
						}),
						/* @__PURE__ */ jsx("button", {
							className: "md:hidden text-zinc-300",
							onClick: () => setMenuOpen((o) => !o),
							"aria-label": "Menu",
							children: menuOpen ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
						})
					]
				}), menuOpen && /* @__PURE__ */ jsx("div", {
					className: "md:hidden border-t border-zinc-800/50 bg-black/90 backdrop-blur-lg px-6 py-4 flex flex-col gap-4",
					children: [
						["Sobre", "#sobre"],
						["Áreas de Atuação", "#areas"],
						["Equipe", "#equipe"],
						["Contato", "#contato"]
					].map(([l, h]) => /* @__PURE__ */ jsx("a", {
						href: h,
						className: "text-sm text-zinc-400 hover:text-gold-primary",
						onClick: () => setMenuOpen(false),
						children: l
					}, h))
				})]
			}),
			/* @__PURE__ */ jsxs("main", {
				id: "top",
				children: [
					/* @__PURE__ */ jsx("section", {
						className: "pt-32 pb-24 md:pt-48 md:pb-32 px-6 relative z-10",
						children: /* @__PURE__ */ jsx("div", {
							className: "max-w-4xl mx-auto text-center",
							children: /* @__PURE__ */ jsxs("div", {
								className: "animate-fade-up",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-gold-primary font-medium text-sm tracking-[0.2em] uppercase mb-6 block",
										children: "IET Advogados Associados"
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "font-serif text-5xl md:text-7xl text-zinc-100 leading-[1.05] mb-8 text-balance",
										children: [
											"Compromisso com a Justiça, ",
											/* @__PURE__ */ jsx("span", {
												className: "italic text-gold-primary",
												children: "Excelência"
											}),
											" em Resultados."
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-zinc-300 max-w-[52ch] mx-auto text-pretty leading-relaxed mb-10",
										children: "Escritório dedicado a oferecer soluções jurídicas eficientes e personalizadas. Atuamos com ética, transparência e compromisso na defense dos direitos de nossos clientes em diversas áreas do Direito."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center justify-center gap-6",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "#contato",
											className: "text-sm bg-gold-primary text-surface-base py-3 px-5 flex items-center gap-2 font-medium rounded-sm ring-1 ring-gold-primary hover:bg-gold-soft transition-colors",
											children: ["Agende uma Consulta", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
										}), /* @__PURE__ */ jsx("a", {
											href: "#areas",
											className: "text-sm font-medium border-b border-gold-primary/40 pb-1 hover:border-gold-primary transition-all text-zinc-200",
											children: "Conheça nossas áreas"
										})]
									})
								]
							})
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "sobre",
						className: "py-24 px-6 border-t border-zinc-800/50 relative z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-4xl mx-auto text-center",
							children: [/* @__PURE__ */ jsxs(Reveal, { children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-gold-primary text-xs tracking-[0.3em] uppercase",
									children: "Sobre"
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "font-serif text-4xl md:text-5xl text-zinc-100 mt-4 mb-8 text-balance",
									children: [
										"Um escritório ",
										/* @__PURE__ */ jsx("span", {
											className: "italic",
											children: "construído sobre confiança"
										}),
										"."
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-zinc-400 leading-relaxed text-pretty md:text-lg",
									children: "A IET Advocacia presta atendimento próximo e confiável, transformando desafios legais em resultados concretos. Cada cliente é atendido com escuta atenta, estratégia clara e foco em soluções duradouras."
								})
							] }), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-8 mt-16",
								children: [
									["10+", "Anos de atuação"],
									["6", "Áreas especializadas"],
									["100%", "Atendimento ético"],
									["3", "Advogados parceiros"]
								].map(([n, l], i) => /* @__PURE__ */ jsx(Reveal, {
									delay: i * 80,
									children: /* @__PURE__ */ jsxs("div", {
										className: "text-left md:text-center",
										children: [/* @__PURE__ */ jsx("div", {
											className: "font-serif text-3xl md:text-4xl text-gold-primary mb-2",
											children: n
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs tracking-widest uppercase text-zinc-500",
											children: l
										})]
									})
								}, l))
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "areas",
						className: "py-24 relative z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-7xl mx-auto px-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
								children: [/* @__PURE__ */ jsxs(Reveal, {
									className: "max-w-[52ch]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-gold-primary text-xs tracking-[0.3em] uppercase",
										children: "Atuação"
									}), /* @__PURE__ */ jsx("h2", {
										className: "font-serif text-4xl md:text-5xl text-zinc-100 mt-4 text-balance",
										children: "Nossas Áreas de Atuação"
									})]
								}), /* @__PURE__ */ jsx(Reveal, {
									delay: 100,
									children: /* @__PURE__ */ jsx("p", {
										className: "text-zinc-400 text-pretty max-w-md",
										children: "Expertise jurídica em seis frentes complementares, sempre com olhar estratégico e atenção aos detalhes do seu caso."
									})
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 ring-1 ring-black/5 overflow-hidden rounded-lg",
								children: areas.map((a, i) => {
									const Icon = a.icon;
									return /* @__PURE__ */ jsx(Reveal, {
										delay: i * 60,
										children: /* @__PURE__ */ jsxs("div", {
											className: "group bg-black/40 backdrop-blur-sm p-10 hover:bg-black/60 transition-colors cursor-default h-full flex flex-col border border-zinc-800/50 rounded-sm",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "size-10 mb-8 flex items-center justify-center border border-zinc-800 group-hover:border-gold-primary/50 transition-colors",
													children: /* @__PURE__ */ jsx(Icon, { className: "size-4 text-gold-primary" })
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "font-serif text-2xl text-zinc-100 mb-4",
													children: a.title
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-sm text-zinc-500 leading-relaxed mb-8 flex-1",
													children: a.text
												}),
												/* @__PURE__ */ jsx("div", { className: "h-px w-0 group-hover:w-full bg-gold-primary/60 transition-all duration-500" })
											]
										})
									}, a.title);
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "equipe",
						className: "py-24 px-6 relative z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-7xl mx-auto",
							children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
								className: "mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "text-gold-primary text-xs tracking-[0.3em] uppercase",
									children: "Equipe"
								}), /* @__PURE__ */ jsx("h2", {
									className: "font-serif text-4xl md:text-5xl text-zinc-100 mt-4",
									children: "Nossa Equipe"
								})] }), /* @__PURE__ */ jsx("p", {
									className: "text-zinc-500 text-sm max-w-md",
									children: "Advogados parceiros com formação especializada e visão complementar para atender você em diferentes frentes."
								})]
							}) }), /* @__PURE__ */ jsx("div", {
								className: "flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6",
								children: team.map((m, i) => /* @__PURE__ */ jsx(Reveal, {
									delay: i * 100,
									children: /* @__PURE__ */ jsxs("article", {
										className: "flex-none w-[320px] md:w-[360px] snap-start group",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "overflow-hidden rounded-[min(1vw,12px)] outline outline-1 -outline-offset-1 outline-white/5 mb-6",
												children: /* @__PURE__ */ jsx("img", {
													src: m.img,
													alt: m.name,
													loading: "lazy",
													width: 640,
													height: 800,
													className: "w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
												})
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "font-serif text-2xl text-zinc-100 mb-1",
												children: m.name
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-xs tracking-widest uppercase text-gold-primary/90 mb-3",
												children: m.oab
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-xs uppercase tracking-wider text-zinc-500 mb-4",
												children: m.role
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-sm text-zinc-400 leading-relaxed",
												children: m.bio
											})
										]
									})
								}, m.name))
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "contato",
						className: "py-24 border-t border-zinc-800/50 relative z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-6xl mx-auto px-6",
							children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
								className: "text-center mb-14",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-gold-primary text-xs tracking-[0.3em] uppercase",
										children: "Contato"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "font-serif text-4xl md:text-5xl text-zinc-100 mt-4 text-balance",
										children: "Entre em Contato"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-zinc-400 mt-4 max-w-xl mx-auto",
										children: "Estamos à disposição para esclarecer dúvidas e agendar uma consulta confidencial."
									})
								]
							}) }), /* @__PURE__ */ jsxs("div", {
								className: "grid md:grid-cols-2 gap-12",
								children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("ul", {
									className: "space-y-5",
									children: [
										[
											["(47) 99976-3026", "tel:+5547999763026"],
											["(54) 98121-3027", "tel:+5554981213027"],
											["(54) 99971-8143", "tel:+5554999718143"]
										].map(([p, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: h,
											className: "flex items-center gap-4 text-zinc-300 hover:text-gold-primary transition-colors group",
											children: [/* @__PURE__ */ jsx("span", {
												className: "size-10 grid place-items-center border border-zinc-800 group-hover:border-gold-primary/50 transition-colors",
												children: /* @__PURE__ */ jsx(Phone, { className: "size-4 text-gold-primary" })
											}), /* @__PURE__ */ jsx("span", {
												className: "text-sm",
												children: p
											})]
										}) }, p)),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: "mailto:ietassociados@gmail.com",
											className: "flex items-center gap-4 text-zinc-300 hover:text-gold-primary transition-colors group",
											children: [/* @__PURE__ */ jsx("span", {
												className: "size-10 grid place-items-center border border-zinc-800 group-hover:border-gold-primary/50 transition-colors",
												children: /* @__PURE__ */ jsx(Mail, { className: "size-4 text-gold-primary" })
											}), /* @__PURE__ */ jsx("span", {
												className: "text-sm",
												children: "ietassociados@gmail.com"
											})]
										}) }),
										/* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-4 text-zinc-400",
											children: [/* @__PURE__ */ jsx("span", {
												className: "size-10 grid place-items-center border border-zinc-800",
												children: /* @__PURE__ */ jsx(MapPin, { className: "size-4 text-gold-primary" })
											}), /* @__PURE__ */ jsx("span", {
												className: "text-sm",
												children: "Atendimento em SC e RS"
											})]
										})
									]
								}) }), /* @__PURE__ */ jsx(Reveal, {
									delay: 100,
									children: /* @__PURE__ */ jsxs("form", {
										className: "space-y-4",
										onSubmit: (e) => {
											e.preventDefault();
											setSent(true);
										},
										children: [
											/* @__PURE__ */ jsx("input", {
												required: true,
												type: "text",
												placeholder: "Seu Nome",
												className: "w-full bg-black/40 border border-zinc-800 px-4 py-3.5 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-primary/60 transition-colors rounded-sm"
											}),
											/* @__PURE__ */ jsx("input", {
												required: true,
												type: "email",
												placeholder: "Seu E-mail",
												className: "w-full bg-black/40 border border-zinc-800 px-4 py-3.5 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-primary/60 transition-colors rounded-sm"
											}),
											/* @__PURE__ */ jsx("textarea", {
												required: true,
												rows: 4,
												placeholder: "Sua Mensagem",
												className: "w-full bg-black/40 border border-zinc-800 px-4 py-3.5 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-primary/60 transition-colors rounded-sm resize-none"
											}),
											/* @__PURE__ */ jsx("button", {
												type: "submit",
												className: "w-full bg-gold-primary text-surface-base py-4 font-medium tracking-wide hover:bg-gold-soft transition-colors rounded-sm flex items-center justify-center gap-2",
												children: sent ? "Mensagem enviada ✓" : "Enviar Mensagem"
											}),
											sent && /* @__PURE__ */ jsx("p", {
												className: "text-xs text-zinc-500 text-center",
												children: "Retornaremos o contato em breve."
											})
										]
									})
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "bg-black/40 border-t border-zinc-800/50 py-16 px-6 relative z-10 backdrop-blur-sm",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-[40ch]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5 mb-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-8 ring-1 ring-gold-primary/40 rounded flex items-center justify-center",
								children: /* @__PURE__ */ jsx("span", {
									className: "font-serif text-gold-primary font-semibold",
									children: "I"
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "font-serif text-lg text-zinc-100",
								children: "IET Advogados"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-zinc-500 leading-relaxed",
							children: "Excelência e confiança em serviços jurídicos. Atendimento personalizado em Santa Catarina e Rio Grande do Sul."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-x-16 gap-y-8",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-medium text-zinc-300 uppercase tracking-widest mb-4",
							children: "Links Rápidos"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-2.5",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#sobre",
									className: "text-sm text-zinc-500 hover:text-gold-primary transition-colors",
									children: "Sobre Nós"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#areas",
									className: "text-sm text-zinc-500 hover:text-gold-primary transition-colors",
									children: "Áreas de Atuação"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#equipe",
									className: "text-sm text-zinc-500 hover:text-gold-primary transition-colors",
									children: "Equipe"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#contato",
									className: "text-sm text-zinc-500 hover:text-gold-primary transition-colors",
									children: "Contato"
								}) })
							]
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-medium text-zinc-300 uppercase tracking-widest mb-4",
							children: "Siga-nos"
						}), /* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-gold-primary transition-colors",
							children: [/* @__PURE__ */ jsx(Instagram, { className: "size-4" }), "Instagram"]
						})] })]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900/80 flex flex-col md:flex-row justify-between gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs text-zinc-600",
						children: "© 2026 IET Advogados Associados — Todos os direitos reservados."
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-zinc-600",
						children: "Compromisso · Ética · Excelência"
					})]
				})]
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://wa.me/5547999763026",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Fale conosco no WhatsApp",
				className: "fixed bottom-6 right-6 z-50 size-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg shadow-black/40 hover:scale-110 transition-transform",
				children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-6" })
			})
		]
	});
}
//#endregion
export { Index as component };
