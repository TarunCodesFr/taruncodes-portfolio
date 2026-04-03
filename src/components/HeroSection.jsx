import { useState, useEffect, useRef } from 'react';
import tarunImg from '../assets/taruncodes.jpg';
import { useCharacter } from '../context/CharacterContext';
import { Terminal, Send, Github, FileText } from 'lucide-react';

function useTypewriter(words, speed = 100, deleteSpeed = 50, pause = 1500) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = words[wordIdx];
    const tick = () => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          timeoutRef.current = setTimeout(() => setDeleting(true), pause);
          return;
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };
    timeoutRef.current = setTimeout(tick, deleting ? deleteSpeed : speed);
    return () => clearTimeout(timeoutRef.current);
  }, [text, deleting, wordIdx, words, speed, deleteSpeed, pause]);

  return text;
}

export default function HeroSection() {
  const { say } = useCharacter();
  const typed = useTypewriter(
    ['TarunCodes.', 'Backend Developer.', 'PocketMine Developer.', 'Junior SWE.', 'PHP Enthusiast.'],
    90, 45, 1800
  );

  const particles = Array.from({ length: 15 });

  const codeSnippet = `<?php
namespace App\\Plugins;
use PocketMine\\Plugin\\PluginBase;

class TarunCodes extends PluginBase {
    public function onEnable() : void {
        $this->getLogger()->info("TarunCodes v2.0 Initialized!");
        $this->getScheduler()->scheduleRepeatingTask(new BackendTask(), 20);
    }
}
// STATUS: OPTIMIZING...
// CONNECTION: STABLE
// REPOS: SYNCING...`;

  return (
    <section id="home" className="pixel-bg" style={{ minHeight: '100vh', paddingTop: 80, paddingBottom: 60, position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      {/* Decorative Hero Frames */}
      <div className="hero-frame-corner h-top-l" />
      <div className="hero-frame-corner h-top-r" />
      <div className="hero-frame-corner h-bot-l" />
      <div className="hero-frame-corner h-bot-r" />

      {/* Background Code Stream */}
      <div className="code-stream-bg">
        {Array.from({ length: 10 }).map((_, i) => <div key={i}>{codeSnippet}\n\n</div>)}
      </div>

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}

      {/* Moon */}
      <div className="pixel-moon" />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '60px 24px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        {/* Left: main text */}
        <div style={{ flex: '1 1 360px', minWidth: 320 }}>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontWeight: 'bold', fontSize: 'clamp(32px, 6vw, 64px)', color: '#fff', lineHeight: 1.1, marginBottom: 24, textTransform: 'uppercase' }}>
            Hi, I'm <span style={{ color: 'var(--orange)' }}>TarunCodes!</span>
          </h1>

          {/* Typewriter sub-heading */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--text-gray)', marginBottom: 24, minHeight: 40, borderLeft: '3px solid var(--orange)', paddingLeft: 16, display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 'bold' }}>{typed}</span>
            <span className="pixel-cursor" />
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontWeight: '500', fontSize: 14, color: 'var(--text-gray)', marginBottom: 32, lineHeight: 1.8, maxWidth: 520 }}>
            Building high-performance backend systems and custom PocketMine-MP plugins with creativity and precision.
            Leveling up my craft through every line of code.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="./assets/taruncodes-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pixel btn-pixel-filled"
              onMouseEnter={() => say("W4NT TO HIRE ME? CHECK THIS OUT.", 2000)}
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <FileText size={14} /> VIEW RESUME
            </a>
            <a
              href="#contact"
              className="btn-pixel btn-pixel-outline"
              onMouseEnter={() => say("LET'S C0LL4BORATE!", 2000)}
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <Send size={14} /> HIRE ME
            </a>
          </div>
        </div>

        {/* Right: Quick Stats card */}
        <div style={{ flex: '0 0 300px', minWidth: 260 }}>
          <div className="stats-row animate-pulse-glow" style={{ border: '2px solid var(--orange)', background: 'rgba(10, 8, 6, 0.95)' }} onMouseEnter={() => say("THESE ST4TS D0N'T LIE.", 2000)}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '2px solid var(--orange)' }}>
              <Terminal size={18} color="var(--orange)" />
              <div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, fontWeight: 'bold', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SYS MONITOR</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>v2.0 Stable Build</div>
              </div>
            </div>

            {[
              { label: 'Experience', val: '6+ YEARS', icon: <Terminal size={12} /> },
              { label: 'Projects', val: '24 ACTIVE', icon: <Github size={12} /> },
              { label: 'Level', val: '99 MAX', icon: <Terminal size={12} /> },
              { label: 'GitHub Stars', val: '150+', icon: <Github size={12} /> },
            ].map((stat, i) => (
              <div key={i} className="stats-row-item" style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, display: 'flex', alignItems: 'center', gap: 8 }}>{stat.icon} {stat.label}</span>
                <span className="stats-value" style={{ fontWeight: 'bold' }}>{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="section-glow" />
    </section>
  );
}