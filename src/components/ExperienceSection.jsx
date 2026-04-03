import { useCharacter } from "../context/CharacterContext";

const EXPERIENCES = [
  {
    level: 5,
    role: 'Backend & Performance Engineer Intern',
    company: 'ApnaNotes',
    period: '2026 – Present',
    desc: 'Deep-diving into high-scale performance bottlenecks. Optimizing service latency and refactoring core backend modules for maximum throughput.',
    skills: ['Golang', 'Node.js', 'Redis', 'PostgreSQL', 'Microservices'],
    bullets: [
      'Identifying and eliminating 40% latency in core API endpoints',
      'Implementing advanced caching strategies with Redis',
      'Scaling backend infrastructure to handle 100k+ concurrent requests',
    ],
  },
  {
    level: 4,
    role: 'Founder & Technical Lead',
    company: 'Trunal (Digital Agency)',
    period: '2025 – 2026',
    desc: 'Founded a boutique digital agency focusing on high-performance web systems and bespoke backend solutions.',
    skills: ['PHP', 'React', 'Management', 'System Arch', 'Cloud'],
    bullets: [
      'Led the technical vision and engineering team for 10+ client pivots',
      'Architected scalable backend solutions for local businesses and startups',
      'Oversaw end-to-end delivery of 20+ successful project transmissions',
    ],
  },
  {
    level: 3,
    role: 'Master Backend Developer',
    company: 'Freelance / High-Tier Gigs',
    period: '2023 – 2025',
    desc: 'Executing specialized backend transmissions for global clients. Leveling up the craft through 20+ high-stakes projects.',
    skills: ['PHP', 'Node.js', 'MySQL', 'PocketMine', 'DevOps'],
    bullets: [
      'Completed 20+ successful freelance backend projects with 100% up-time',
      'Developed elite-grade PocketMine plugins for competitive networks',
      'Designed mission-critical REST APIs for real-time applications',
    ],
  },
  {
    level: 2,
    role: 'PocketMine Plugin Developer',
    company: 'Open Source / Community',
    period: '2022 – 2023',
    desc: 'Developed and maintained open-source plugins for the PocketMine-MP Minecraft server ecosystem.',
    skills: ['PHP', 'PocketMine', 'MySQL', 'Git'],
    bullets: [
      'Published multiple plugins on Poggit with positive community feedback',
      'Contributed to open-source PocketMine ecosystem',
      'Learned advanced PHP OOP, event-driven architecture',
    ],
  },
  {
    level: 1,
    role: 'Self-Taught Developer',
    company: 'Personal Projects',
    period: '2021 – 2022',
    desc: 'Started the coding journey learning PHP, JavaScript, and web fundamentals through projects and online resources.',
    skills: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    bullets: [
      'Built first production web apps from scratch',
      'Learned fundamental programming concepts and data structures',
      'Created personal tools and automation scripts',
    ],
  },
];

export default function ExperienceSection() {
  const { say } = useCharacter();

  const handleHover = (exp) => {
    const msgs = [
      `LEVEL ${exp.level} UNL0CKED.`,
      `TH4T W4S A GRIND!`,
      `${exp.period} - G00D TIMES.`,
      `XP G4INED IN ${exp.role.split(' ')[0]}.`
    ];
    say(msgs[Math.floor(Math.random() * msgs.length)], 2000);
  };

  return (
    <section id="experience" className="pixel-bg" style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <h2 className="section-title" style={{ marginBottom: 8 }}>THE GRIND SO FAR</h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 48 }}>// experience unlocked</p>

        <div className="timeline-line">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ display: 'flex', gap: 0, marginBottom: 40, position: 'relative' }}>
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ position: 'absolute', left: -31, marginTop: 6 }} />

              {/* Content */}
              <div style={{ flex: 1 }}>
                {/* Level badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, background: 'var(--orange)', color: '#fff', padding: '2px 8px', textTransform: 'uppercase' }}>
                    Level {exp.level}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>{exp.period}</span>
                </div>

                <div className="retro-card" style={{ padding: 20 }} onMouseEnter={() => handleHover(exp)}>
                  <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{exp.role}</h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange)', marginBottom: 12 }}>{exp.company}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: 14 }}>{exp.desc}</p>

                  <ul style={{ marginBottom: 14, paddingLeft: 0, listStyle: 'none' }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-gray)', marginBottom: 6, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--orange)', flexShrink: 0 }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {exp.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-glow" />
    </section>
  );
}
