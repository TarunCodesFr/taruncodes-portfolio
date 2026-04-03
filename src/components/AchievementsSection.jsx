import { useCharacter } from "../context/CharacterContext";
import { 
  Award, 
  Zap, 
  Terminal, 
  Briefcase, 
  Moon, 
  Wrench 
} from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'Master of Backend',
    desc: 'Successfully architected and deployed 20+ mission-critical freelance backend systems with zero downtime.',
    rarity: 'LEGENDARY',
    xp: 1200,
    progress: 100,
    icon: <Award className="icon-animated" size={32} />,
  },
  {
    title: 'Freelance Titan',
    desc: 'Delivered high-tier engineering solutions for a global client base, completing over 20+ high-stakes contracts.',
    rarity: 'EPIC',
    xp: 800,
    progress: 100,
    icon: <Briefcase className="icon-animated" size={32} />,
  },
  {
    title: 'Self-Taught Master',
    desc: 'Unrivaled expertise in backend engineering, self-directed mastery of modern stacks and distributed systems.',
    rarity: 'LEGENDARY',
    xp: 1000,
    progress: 95,
    icon: <Zap className="icon-animated" size={32} />,
  },
  {
    title: 'Plugin Dominance',
    desc: 'Created industry-standard PocketMine plugins used by major networks and thousands of players.',
    rarity: 'EPIC',
    xp: 600,
    progress: 90,
    icon: <Terminal className="icon-animated" size={32} />,
  },
  {
    title: 'Digital Visionary',
    desc: 'Founded Trunal to bridge the gap between complex engineering and elegant digital agencies.',
    rarity: 'RARE',
    xp: 500,
    progress: 100,
    icon: <Wrench className="icon-animated" size={32} />,
  },
  {
    title: 'Night Shift Architect',
    desc: 'Building the future of the web while the world sleeps. 3AM is the peak productive hour.',
    rarity: 'COMMON',
    xp: 100,
    progress: 100,
    icon: <Moon className="icon-animated" size={32} />,
  },
];

const RARITY_COLORS = {
  LEGENDARY: '#f59e0b',
  EPIC: '#a855f7',
  RARE: '#3b82f6',
  COMMON: '#6b7280',
};

export default function AchievementsSection() {
  const { say } = useCharacter();

  const handleHover = (a) => {
    const msgs = [
      `TH4T ${a.title} ACHIEV3M3NT W4S WORTH IT.`,
      `+${a.xp} XP G4INED. ST4TS INCRE4SING...`,
      `LEVELING UP... CURRENT PROGRESS: ${a.progress}%`,
      `OH, A ${a.rarity} R4RITY UNL0CK! N1CE.`
    ];
    say(msgs[Math.floor(Math.random() * msgs.length)], 2000);
  };

  return (
    <section id="achievements" className="pixel-bg" style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <h2 className="section-title" style={{ marginBottom: 8 }}>PRO GAMER, AREN'T I?</h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 40 }}>// achievements unlocked in this playthrough</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {ACHIEVEMENTS.map((a, i) => {
            const color = RARITY_COLORS[a.rarity];
            return (
              <div 
                key={i} 
                className="bento-item" 
                onMouseEnter={() => handleHover(a)}
                style={{ borderTop: `4px solid ${color}` }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ color }}>{a.icon}</div>
                  <div className="bento-header" style={{ color, marginBottom: 0, fontWeight: 'bold' }}>{a.rarity}</div>
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>{a.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: 20, minHeight: 40 }}>{a.desc}</p>

                {/* Progress */}
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="pixel-progress" style={{ marginBottom: 8, height: 6 }}>
                    <div className="pixel-progress-fill" style={{ width: `${a.progress}%`, background: color }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 8, fontWeight: 'bold', color: 'var(--text-dim)' }}>PROG: {a.progress}%</span>
                    <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 8, fontWeight: 'bold', color }}>+{a.xp} XP</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section-glow" />
    </section>
  );
}
