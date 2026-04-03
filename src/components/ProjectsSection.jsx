import { useState, useEffect, useCallback } from 'react';
import { useCharacter } from "../context/CharacterContext";
import { Github, Star, ExternalLink, Code, RefreshCw } from 'lucide-react';

const RARITY_COLORS = {
  LEGENDARY: '#f59e0b',
  EPIC: '#a855f7',
  RARE: '#3b82f6',
  COMMON: '#6b7280',
};

export default function ProjectsSection() {
  const { say } = useCharacter();
  const [allRepos, setAllRepos] = useState([]);
  const [displayRepos, setDisplayRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleDeck = useCallback((fullList) => {
    setIsShuffling(true);
    const shuffled = [...fullList].sort(() => 0.5 - Math.random());
    setDisplayRepos(shuffled.slice(0, 6));
    setTimeout(() => setIsShuffling(false), 500);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/taruncodesfr/repos?sort=updated&per_page=60')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const mapped = data.map(repo => ({
            title: repo.name.replace(/-/g, ' ').toUpperCase(),
            desc: repo.description || "No description provided. This project is likely a secret backend experiment.",
            tags: repo.topics.length > 0 ? repo.topics.slice(0, 3) : ['PHP', 'Dev'],
            href: repo.html_url,
            stars: repo.stargazers_count,
            rarity: repo.stargazers_count > 50 ? 'LEGENDARY' : 
                    repo.stargazers_count > 10 ? 'EPIC' : 
                    repo.stargazers_count > 2 ? 'RARE' : 'COMMON'
          }));
          setAllRepos(mapped);
          shuffleDeck(mapped);
        }
      })
      .catch(err => console.error("Failed to fetch repos:", err))
      .finally(() => setIsLoading(false));
  }, [shuffleDeck]);

  const handleShuffle = () => {
    say("SHUFFLING D3CK... SELECTING N3W PROJECTS.", 2000);
    shuffleDeck(allRepos);
  };

  const handleHover = (p) => {
    const msgs = [
      `OH, I REMEMBER BUILDING ${p.title}. TOUGH ONE.`,
      `TH4T'S A ${p.rarity} PROJECT!`,
      `CHECK OUT THE SOURCE C0DE FOR ${p.title}.`,
      `SHIPPED ${p.title} RECENTLY. ST4BLE VERSION.`
    ];
    say(msgs[Math.floor(Math.random() * msgs.length)], 2500);
  };

  return (
    <section id="projects" className="pixel-bg" style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>WHERE DID MY TIME GO?</h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)' }}>// projects I've shipped / still haunted by</p>
          </div>
          
          <button 
            onClick={handleShuffle}
            disabled={isLoading || isShuffling}
            className="btn-pixel btn-pixel-outline"
            style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, padding: '12px 20px' }}
          >
            <RefreshCw size={14} className={isShuffling ? 'animate-spin' : ''} /> SHUFFLE DECK
          </button>
        </div>

        {isLoading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bento-item animate-pulse" style={{ height: 280, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }} />
            ))}
          </div>
        ) : (
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: 24,
              opacity: isShuffling ? 0.3 : 1,
              transform: isShuffling ? 'scale(0.98)' : 'scale(1)',
              transition: 'all 0.3s ease'
            }}
          >
            {displayRepos.map((p, i) => (
              <div 
                key={p.title + i} 
                className="bento-item project-card" 
                onMouseEnter={() => handleHover(p)}
                style={{ borderTop: `4px solid ${RARITY_COLORS[p.rarity]}`, display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Github size={16} color={RARITY_COLORS[p.rarity]} />
                    <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.title}</h3>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-pixel)', fontSize: 8, color: RARITY_COLORS[p.rarity] }}>
                    <Star size={10} fill={RARITY_COLORS[p.rarity]} /> {p.stars}
                  </div>
                </div>
                
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: 20, minHeight: 60, flex: 1 }}>{p.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.tags.map(t => <span key={t} className="skill-tag" style={{ fontSize: 9 }}>{t}</span>)}
                </div>
                
                <a 
                  href={p.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-pixel btn-pixel-outline" 
                  style={{ fontSize: 10, padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  <Code size={12} /> VIEW SOURCE <ExternalLink size={10}/>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="section-glow" />
    </section>
  );
}
