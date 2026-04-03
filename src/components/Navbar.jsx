import { useState, useEffect } from "react";
import tarunImg from '../assets/taruncodes.jpg';
import { useCharacter } from "../context/CharacterContext";

const SECTIONS = ['home', 'intro', 'projects', 'skills', 'experience', 'achievements', 'contact'];
const SECTION_LABELS = ['INTRO', 'INTRO', 'PROJECTS', 'SKILLS', 'EXP', 'ACHIEVEMENTS', 'CONTACT'];

function Typewriter({ text, speed = 40 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}<span className="pixel-cursor" style={{ height: '0.8em', width: 4 }}></span></span>;
}

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', gap: 12 }}>
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

        {/* Right: NPC UI */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 7, color: 'var(--orange)', opacity: 0.9, letterSpacing: '2px', fontWeight: 'bold' }}>
            STATUS: ONLINE // v2.0
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="nav-chat-bubble">
              <Typewriter text={message} />
            </div>
            <img src={tarunImg} alt="TarunCodes" className="nav-avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}