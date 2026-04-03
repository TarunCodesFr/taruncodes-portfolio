import { useCharacter } from "../context/CharacterContext";

export default function AboutSection() {
  const { say } = useCharacter();

  const handleHover = (msg) => {
    say(msg, 2500);
  };

  return (
    <section id="intro" className="pixel-bg" style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <h2 className="section-title" style={{ marginBottom: 40, textAlign: 'center' }}>
          [SYSTEM]: INITIALIZING BI0...
        </h2>

        <div className="bento-grid">
          {/* Main Name/Tagline Box */}
          <div className="bento-item bento-col-2 bento-row-2" onMouseEnter={() => handleHover("T4RUN C0DES. B4CKEND SPECI4LIST.")}>
            <div className="bento-header">Identity</div>
            <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 24, color: '#fff', marginBottom: 16 }}>TARUNCODES</h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-gray)', lineHeight: 1.6 }}>
              Backend developer with a passion for building systems that work silently in the shadows.
              Specialized in PocketMine-MP, PHP, and modern JS ecosystems.
            </p>
          </div>

          {/* Philosophy */}
          <div className="bento-item bento-col-2" onMouseEnter={() => handleHover("M4KE IT W0RK → M4KE IT RIGHT.")}>
            <div className="bento-header">Philosophy</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--orange)' }}>
              Make it work → make it right → make it fast → make it beautiful.
            </p>
          </div>

          {/* Passions */}
          <div className="bento-item bento-col-1" onMouseEnter={() => handleHover("CH4SING NEW IDE4S...")}>
            <div className="bento-header">Passions</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-white)' }}>
              Solving hard problems and building things worth flexing.
            </p>
          </div>

          {/* Interests */}
          <div className="bento-item bento-col-1" onMouseEnter={() => handleHover("MINECCR4FT & TECH F0RUMS.")}>
            <div className="bento-header">Interests</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>
              Minecraft servers, Tech forums, Lo-fi phonk.
            </p>
          </div>

          {/* Quick List - Expanded */}
          <div className="bento-item bento-col-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {[
              { label: 'Role', value: 'Backend / Performance Engineer' },
              { label: 'Interest Proof', value: 'Contributor at Poggit' },
              { label: 'Weakness', value: 'Übermensch confirmed' },
              { label: 'How I code', value: 'Music = Oxygen' },
            ].map((item, i) => (
              <div key={i} style={{ flex: '1 1 200px' }}>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--orange)', display: 'block', marginBottom: 4 }}>{item.label}:</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '2px dashed rgba(207,73,44,0.3)', display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/TarunCodesFr', icon: '⊕' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tarun-s-a756383b5/', icon: 'in' },
            { label: 'Discord', href: 'https://discordapp.com/users/847373992787705876', icon: '◈' },
            { label: 'Email', href: 'mailto:akurax4@gmail.com', icon: '✉' },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 14 }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="section-glow" />
    </section>
  );
}