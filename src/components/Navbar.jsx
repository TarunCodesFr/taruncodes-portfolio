import { useState, useEffect } from "react";
import tarunImg from '../assets/taruncodes.jpg';
import { useCharacter } from "../context/CharacterContext";

const SECTIONS = ['home', 'intro', 'projects', 'skills', 'experience', 'achievements', 'contact'];
const SECTION_LABELS = ['INTRO', 'INTRO', 'PROJECTS', 'SKILLS', 'EXP', 'ACHIEVEMENTS', 'CONTACT'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(0);
  const { message } = useCharacter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80;
      let found = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) found = i;
      });
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 20px', gap: 12 }}>
        {/* Left: section label + dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="nav-section-indicator">{SECTION_LABELS[activeSection]}</span>
          <div className="nav-dots">
            {SECTIONS.map((_, i) => (
              <button
                key={i}
                className={`nav-dot ${i <= activeSection ? 'active' : ''}`}
                onClick={() => {
                  const el = document.getElementById(SECTIONS[i]);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label={`Go to ${SECTIONS[i]}`}
              />
            ))}
          </div>
        </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 7, color: 'var(--orange)', opacity: 0.8, letterSpacing: '2px' }}>
              PORTFOLIO OS v2.0
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="nav-chat-box" style={{ 
                position: 'relative',
                minWidth: 200,
                transition: 'all 0.3s ease',
                border: '2px solid var(--orange)',
                background: 'rgba(207, 73, 44, 0.05)',
                fontFamily: 'var(--font-pixel)',
                fontSize: '12px',
                padding: '4px 8px'
              }}>
                <div key={message} style={{ animation: 'fade-in 0.3s ease-out' }}>
                  {message}
                </div>
                {/* Speech bubble pointer */}
                <div style={{
                  position: 'absolute',
                  right: -8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0,
                  height: 0,
                  borderTop: '6px solid transparent',
                  borderBottom: '6px solid transparent',
                  borderLeft: '8px solid var(--orange)',
                }} />
              </div>
              <img src={tarunImg} alt="TarunCodes" className="nav-avatar" style={{ border: '2px solid var(--orange)' }} />
            </div>
          </div>
      </div>
    </nav>
  );
}