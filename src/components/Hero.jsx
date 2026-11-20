import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import TiltCard from './TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stats = [
  { value: 6, suffix: '+', label: 'CORE TECH' },
  { value: 3, suffix: '', label: 'CLOUDS' },
  { value: 100, suffix: '%', label: 'SECURITY' },
]

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let frame
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <>
      {display}
      {suffix}
    </>
  )
}

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div>
          <motion.div
            className="section-kicker"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            01 / INTRODUCTION
          </motion.div>

          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="dot" />
            Available for freelance & full-time opportunities
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Crafting <span className="gradient-text">extraordinary</span> digital experiences.
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}>
            Hi, I&apos;m <strong style={{ color: 'var(--text)' }}>Rahanyas</strong> — a developer building
            with <strong style={{ color: 'var(--text)' }}>Python, Linux, and Node.js</strong>, deploying on
            AWS, Render, and Vercel, and applying cybersecurity concepts to keep things fast, resilient,
            and secure.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a href="#about" className="btn btn-secondary">
              <Download size={18} /> About Me
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="show" custom={4}>
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stat-card glass"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <strong>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard className="hero-card glass" max={6}>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="term-dots"><i /><i /><i /></div>
                <span className="term-title">rahanyas — profile.json</span>
                <span className="term-live">● LIVE</span>
              </div>

              <div className="terminal-body">
                <div className="term-main">
                  <p className="term-line"><span className="prompt">$</span> whoami</p>
                  <div className="term-result">
                    rahanyas <span className="term-dim">// developer · cloud · security</span>
                  </div>

                  <p className="term-line"><span className="prompt">$</span> cat stack.config</p>
                  <pre className="term-code">{`const profile = {
  stack: ['Python', 'Linux', 'Node.js'],
  cloud: ['AWS', 'Render', 'Vercel'],
  focus: 'security-first',
  status: 'open to work'
}`}</pre>

                  <p className="term-line"><span className="prompt">$</span> echo $MOTTO</p>
                  <div className="term-result term-ok">Build reliable systems. Ship with intent.</div>

                  <div className="terminal-chips">
                    <span className="chip"><Sparkles size={13} style={{ marginRight: 4 }} /> Python</span>
                    <span className="chip">Linux</span>
                    <span className="chip">Node.js</span>
                    <span className="chip">AWS</span>
                    <span className="chip">Render</span>
                    <span className="chip">Vercel</span>
                    <span className="chip">Cybersecurity</span>
                  </div>
                </div>

                <aside className="term-rail" aria-label="Profile status">
                  <div className="rail-label">SYS.MONITOR</div>
                  <div className="rail-stat"><span>STATUS</span><strong className="term-ok">ONLINE</strong></div>
                  <div className="rail-stat"><span>LOCATION</span><strong>REMOTE</strong></div>
                  <div className="rail-stat"><span>FOCUS</span><strong>BUILD</strong></div>
                  <div className="rail-stat"><span>UPTIME</span><strong>24/7</strong></div>
                  <div className="avatar-orbit mini" aria-hidden="true">
                    <span className="avatar-orbit-ring ring-a" />
                    <span className="avatar-orbit-ring ring-b" />
                    <span className="avatar-satellite sat-a" />
                    <span className="avatar-satellite sat-b" />
                    <div className="avatar-ring">
                      <div className="avatar-inner">R</div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
