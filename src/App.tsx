import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const tech_stack: string[] = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Socket.IO",
  "AWS",
  "PostgreSQL",
  "Render",
  "Vercel",
  "Resend",
  "TypeScript",
  "Redux Toolkit",
  "css",
  "OAuth",
  "Cloudinary",
  "Scss",
  "python",

];

export default function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 🔥 Smooth Scroll (Lenis)
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Sync GSAP + Lenis
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Intro animation
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
      });
    }

    // Scroll animations
    gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
      });
    });

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  // 👉 Smooth anchor navigation using Lenis
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id) as HTMLElement | null;
    if (!target || !lenisRef.current) return;
    lenisRef.current.scrollTo(target, { offset: -80, duration: 1.2 });
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wide">Rahanyas</h1>
        <div className="space-x-6 hidden md:flex text-sm uppercase">
          <a href="#about" onClick={(e) => handleNav(e, "#about")} className="hover:text-gray-300">About</a>
          <a href="#projects" onClick={(e) => handleNav(e, "#projects")} className="hover:text-gray-300">Projects</a>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="flex flex-col justify-center items-center text-center h-[92vh] px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Build. Scale. Ship.
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl">
          Full Stack MERN Developer crafting real-time apps, scalable backends,
          and modern, high-performance interfaces.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" onClick={(e) => handleNav(e, "#projects")} className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
            View Projects
          </a>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Contact
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-20 py-24 text-center fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I build end-to-end web applications with a focus on reliability,
          performance, and clean architecture. Experienced in real-time systems
          (chat, notifications), secure authentication (JWT/OAuth), and
          production deployments on AWS/Render/Vercel.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">React, TypeScript, Redux Toolkit, Tailwind</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">Node.js, Express, REST APIs, WebSockets</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">Infra</h3>
            <p className="text-gray-400 text-sm">MongoDB, PostgreSQL, AWS, Render, Vercel</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 py-20 fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tech_stack.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:-translate-y-1 transition">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-20 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 fade-up">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            title: "Real-time Chat App",
            link : "https://hey-lyart.vercel.app",
            git : "https://github.com/rahanyas/hey",
            desc: "Socket.IO based chat with rooms, typing indicators, and JWT auth.",
          }, {
            title: "e-commerce",
            link : "https://e-commerce-811r.onrender.com",
            git : 'https://github.com/rahanyas/e-commerce',
            desc: "shoping website for clothes for men and women",
          }, {
            title: "electronics selling",
            link : "https://progbiz-test.vercel.app/",
            git : "https://github.com/rahanyas/React-project",
            desc: "showing companies items ",
          }].map((p, i) => (
            <div key={i} className="fade-up group bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3 capitalize">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-5">{p.desc}</p>
              <div className="flex gap-4 text-sm">
                <a className="underline" href={p.link} target="_blank">Live</a>
                <a className="underline" href={p.git} target="_blank">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-24 text-center fade-up">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-gray-400 mb-6">
          Open for freelance, full-time roles, and collaborations.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:rahanyas3@email.com" className="px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition">Email</a>
          <a href="https://linkedin.com/in/rahanyas-razak-89951229b" target="_blank" className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Rahanyas. Built with React + GSAP + Lenis.
      </footer>
    </div>
  );
}