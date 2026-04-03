import { useCharacter } from "../context/CharacterContext";
import { 
  Code2, 
  Container, 
  Database, 
  FileCode, 
  Github, 
  Globe, 
  Layers, 
  Layout, 
  Cpu, 
  Terminal, 
  Box, 
  Server
} from 'lucide-react';

const SKILLS = [
  { name: 'PHP', icon: <Cpu size={24} className="icon-animated" />, suit: '♠', rank: 'K' },
  { name: 'JavaScript', icon: <FileCode size={24} className="icon-animated" />, suit: '♣', rank: 'A' },
  { name: 'React', icon: <Layers size={24} className="icon-animated" />, suit: '♥', rank: 'K' },
  { name: 'Node.js', icon: <Server size={24} className="icon-animated" />, suit: '♦', rank: 'Q' },
  { name: 'Next.js', icon: <Layout size={24} className="icon-animated" />, suit: '♠', rank: 'J' },
  { name: 'MySQL', icon: <Database size={24} className="icon-animated" />, suit: '♣', rank: 'Q' },
  { name: 'MongoDB', icon: <Box size={24} className="icon-animated" />, suit: '♥', rank: 'J' },
  { name: 'PocketMine', icon: <Terminal size={24} className="icon-animated" />, suit: '♦', rank: 'A' },
  { name: 'Git', icon: <Github size={24} className="icon-animated" />, suit: '♠', rank: '10' },
  { name: 'Docker', icon: <Container size={24} className="icon-animated" />, suit: '♣', rank: 'J' },
  { name: 'Linux', icon: <Code2 size={24} className="icon-animated" />, suit: '♥', rank: 'K' },
  { name: 'REST API', icon: <Globe size={24} className="icon-animated" />, suit: '♦', rank: 'Q' },
];

export default function SkillsSection() {
  const { say } = useCharacter();

  const handleHover = (skill) => {
    const msgs = [
      `${skill.name}? YEP, I M4STERED TH4T.`,
      `LEVELING UP ${skill.name}... ST4TUS: M4X.`,
      `TH4T'S A R4RE ${skill.name} C4RD!`,
      `${skill.name} INTEGR4TION: 100% SUCCEEDED.`
    ];
    say(msgs[Math.floor(Math.random() * msgs.length)], 2000);
  };

  return (
    <section id="skills" className="pixel-bg" style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <h2 className="section-title" style={{ marginBottom: 8 }}>MY SKILL DECK</h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 40 }}>// high-level equipment unlocked</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 20 }}>
          {SKILLS.map((s, i) => (
            <div 
              key={i} 
              className="skill-card" 
              onMouseEnter={() => handleHover(s)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Corner markings */}
              <div className="skill-card-suit suit-tl">{s.rank}<br/>{s.suit}</div>
              <div className="skill-card-suit suit-br">{s.rank}<br/>{s.suit}</div>
              
              <span className="skill-card-icon">{s.icon}</span>
              <span className="skill-card-name" style={{ fontWeight: 'bold' }}>{s.name}</span>
            </div>
          ))}
        </div>

        {/* Proficiency grid */}
        <div style={{ marginTop: 80 }} className="reveal visible">
          <div className="dashed-divider" style={{ marginBottom: 40 }} />
          <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 13, fontWeight: 'bold', color: 'var(--orange)', marginBottom: 24, textTransform: 'uppercase' }}>
            [MONITORING]: PR0FICIENCY LEVELS
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { name: 'PHP / PocketMine', pct: 92, status: 'LEGENDARY' },
              { name: 'JavaScript / Node', pct: 85, status: 'EPIC' },
              { name: 'React / Next.js', pct: 78, status: 'RARE' },
              { name: 'Database Arch', pct: 80, status: 'RARE' },
              { name: 'DevOps / Linux', pct: 70, status: 'COMMON' },
            ].map((sk, i) => (
              <div key={i} className="bento-item" style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, fontWeight: 'bold', color: '#fff' }}>{sk.name}</span>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, fontWeight: 'bold', color: 'var(--orange)' }}>{sk.status}</span>
                </div>
                <div className="pixel-progress" style={{ height: 10 }}>
                  <div className="pixel-progress-fill" style={{ width: `${sk.pct}%` }} />
                </div>
                <div style={{ marginTop: 8, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-dim)' }}>
                  {sk.pct}/100 XP
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-glow" />
    </section>
  );
}
