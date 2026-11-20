import { motion } from 'framer-motion'
import { Code2, Rocket, ShieldCheck, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const fill = {
  hidden: { width: 0 },
  show: (value) => ({
    width: `${value}%`,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  }),
}

const skills = [
  { name: 'Python', level: 'Advanced', value: 92 },
  { name: 'Linux', level: 'Advanced', value: 88 },
  { name: 'Node.js', level: 'Advanced', value: 86 },
  { name: 'AWS', level: 'Strong', value: 80 },
  { name: 'Render & Vercel', level: 'Strong', value: 84 },
  { name: 'Cybersecurity Concepts', level: 'Strong', value: 78 },
]

const highlights = [
  {
    icon: <Code2 size={18} />,
    title: 'Backend & Scripting',
    meta: 'Development',
    text: 'Python and Node.js for reliable services, automation, and APIs.',
  },
  {
    icon: <Rocket size={18} />,
    title: 'Cloud & Deployment',
    meta: 'Infrastructure',
    text: 'Shipping on AWS, Render, and Vercel with practical cloud fundamentals.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Security Mindset',
    meta: 'Cybersecurity',
    text: 'Applying core cybersecurity concepts to build safer, more resilient systems.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-kicker">02 / PROFILE</div>
          <div className="eyebrow"><Sparkles size={16} /> About Me</div>
          <h2 className="section-title">Passionate about building products people enjoy using.</h2>
          <p className="section-subtitle">
            I&apos;m a developer who cares deeply about how systems work under the hood — from Python
            scripts and Linux servers to cloud deployments on AWS, Render, and Vercel, with security
            in mind throughout.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="card-label">01 / OVERVIEW</div>
            <h3 style={{ marginTop: 0, fontFamily: '"Space Grotesk", sans-serif' }}>Who I am</h3>
            <p>
              I work across Python, Linux, and Node.js to build dependable services and automation,
              then deploy them on AWS, Render, and Vercel. I enjoy turning complex problems into
              simple, reliable solutions.
            </p>
            <p>
              Cybersecurity is a core interest — I care about secure defaults, least privilege, and
              understanding how systems fail so the defenses I build hold up in the real world.
            </p>

            <h4 style={{ margin: '1.2rem 0 0.6rem' }}>Core Skills</h4>
            <motion.div
              className="skills-grid"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} className="skill-item" variants={item}>
                  <div className="skill-top">
                    <strong>{skill.name}</strong>
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-track">
                    <motion.div className="skill-fill" variants={fill} custom={skill.value} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="card-label">02 / STRENGTHS</div>
            <h3 style={{ marginTop: 0, fontFamily: '"Space Grotesk", sans-serif' }}>What I bring</h3>
            <div className="timeline">
              {highlights.map((h, index) => (
                <motion.div
                  key={h.title}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    {h.icon} {h.meta}
                  </div>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </motion.div>
              ))}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 4 }}
              >
                <div className="meta">Journey</div>
                <h4>Always learning, always shipping</h4>
                <p>
                  I value collaboration, clear communication, and continuous improvement — bringing
                  ideas from the first commit to production-ready deployments.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-quote glass"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span className="quote-mark">&ldquo;</span>
          <p>Secure defaults, simple design, and systems that hold up in the real world.</p>
          <span className="quote-by">— working principle</span>
        </motion.div>
      </div>
    </section>
  )
}
