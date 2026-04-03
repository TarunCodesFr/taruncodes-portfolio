import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useCharacter } from "../context/CharacterContext";
import { Mail, Github, MessageSquare, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const { say } = useCharacter();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleHover = (msg) => {
    say(msg, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    say("INITIATING TR4NSMISSION...", 3000);

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      { from_name: formData.name, from_email: formData.email, message: formData.message },
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => { 
        setSubmitStatus('success'); 
        setFormData({ name: '', email: '', message: '' }); 
        say("TR4NSMISSION SUCCESSFUL! I'LL REPLIER S00N.", 5000);
      })
      .catch(() => {
        setSubmitStatus('error');
        say("ERR0R: TR4NSMISSION FAILED. CHECK SIGNAL.", 5000);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="pixel-bg" style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        <h2 className="section-title" style={{ marginBottom: 8 }}>SEND A TRANSMISSION</h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 40 }}>// open for collabs, gigs, or just talking code</p>

        <div className="bento-item">
          {/* Status messages */}
          {submitStatus === 'success' && (
            <div style={{ marginBottom: 20, padding: '12px 16px', border: '1px solid #22c55e', background: 'rgba(34,197,94,0.08)', fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#22c55e', textTransform: 'uppercase' }}>
              [SYSTEM]: Message sent successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div style={{ marginBottom: 20, padding: '12px 16px', border: '1px solid #ef4444', background: 'rgba(239,68,68,0.08)', fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#ef4444', textTransform: 'uppercase' }}>
              [ERR0R]: Transmission failed. Check connection.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
              <div onMouseEnter={() => handleHover("ID3NTIFY YOURSELF...")}>
                <label style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--orange)', textTransform: 'uppercase', display: 'block', marginBottom: 8, fontWeight: 'bold' }}>{'>'} Name</label>
                <input
                  type="text" required
                  placeholder="Your callsign"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="retro-input"
                />
              </div>
              <div onMouseEnter={() => handleHover("WHER3 SHOULD I REPLY?")}>
                <label style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--orange)', textTransform: 'uppercase', display: 'block', marginBottom: 8, fontWeight: 'bold' }}>{'>'} Email</label>
                <input
                  type="email" required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="retro-input"
                />
              </div>
            </div>

            <div onMouseEnter={() => handleHover("WHATS ON YOUR MIND?")}>
              <label style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--orange)', textTransform: 'uppercase', display: 'block', marginBottom: 8, fontWeight: 'bold' }}>{'>'} Message</label>
              <textarea
                required rows={5}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="retro-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-pixel btn-pixel-filled"
              onMouseEnter={() => handleHover("RE4DY TO SEND?")}
              style={{ alignSelf: 'flex-start', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <Send size={14}/> {isSubmitting ? 'SENDING...' : 'SEND TRANSMISSION'}
            </button>
          </form>
        </div>

        {/* Contact info grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 32 }}>
          {[
            { label: 'Email', value: 'akurax4@gmail.com', href: 'mailto:akurax4@gmail.com', icon: <Mail size={16} className="icon-animated" />, msg: "SEND M3 AN EM4IL!" },
            { label: 'GitHub', value: '@TarunCodesFr', href: 'https://github.com/TarunCodesFr', icon: <Github size={16} className="icon-animated" />, msg: "FOLLOW THE C0DE." },
            { label: 'Discord', value: '#TarunCodes', href: 'https://discordapp.com/users/847373992787705876', icon: <MessageSquare size={16} className="icon-animated" />, msg: "LET'S CH4T ON DISCORD." },
            { label: 'Place', value: 'India', href: null, icon: <MapPin size={16} className="icon-animated" />, msg: "CURR3NT LOC4TION." },
          ].map(({ label, value, href, icon, msg }) => (
            <div 
              key={label} 
              className="bento-item" 
              onMouseEnter={() => handleHover(msg)}
              style={{ padding: '14px 16px', background: 'transparent' }}
            >
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 'bold' }}>{icon} {label}</div>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff', textDecoration: 'underline' }}>{value}</a>
              ) : (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff' }}>{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="section-glow" />
    </section>
  );
}
