import { useCharacter } from "../context/CharacterContext";

export default function Footer() {
  const { say } = useCharacter();
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '2px dashed rgba(207,73,44,0.4)', padding: '48px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Social row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 24 }}>
          {[
            { label: 'GitHub', href: 'https://github.com/TarunCodesFr', msg: "FORK M3 ON GITHUB!" },
            { label: 'Discord', href: 'https://discordapp.com/users/847373992787705876', msg: "ADD ME ON DISCORD." },
            { label: 'Email', href: 'mailto:akurax4@gmail.com', msg: "SEND A TRANSMISSION." },
          ].map(({ label, href, msg }) => (
            <a 
              key={label} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              onMouseEnter={() => say(msg, 2000)}
              style={{ fontSize: 11 }}
            >
              [ {label} ]
            </a>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
          © {year} <span style={{ color: 'var(--orange)' }}>TARUNCODES</span>. ALL RIGHTS RESERVED. 
          <br/>
          <span style={{ fontSize: 9, opacity: 0.6, marginTop: 12, display: 'block' }}>
            STATUS: PORTFOLIO_V2 // BUILD_SUCCESSFUL
          </span>
        </div>
      </div>
    </footer>
  );
}