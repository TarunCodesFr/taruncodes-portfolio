import RotatingAvatar from './components/RotatingAvatar'
import Clock from './components/Clock'

const links = [
  { label: 'github', href: 'https://github.com/taruncodesfr' },
  { label: 'x / twitter', href: 'https://x.com/TarunCodesFr' },
  { label: 'reddit', href: 'https://www.reddit.com/user/TarunCodes/' },
  { label: 'discord', href: 'https://discordapp.com/users/847373992787705876' },
  { label: 'email', href: 'mailto:taruncodesfr@gmail.com' },
]

function App() {
  return (
    <div className="page">
      <header className="site-head">
        <a className="mark" href="#top" aria-label="TarunCodes, back to top">
          taruncodes<span aria-hidden="true">.</span>
        </a>
        <nav className="head-nav" aria-label="Primary">
          <a className="head-link" href="/journey/">
            journey
          </a>
          <a className="head-link" href="mailto:taruncodesfr@gmail.com">
            say hello <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="identity">
            <RotatingAvatar />
            <div className="identity-text">
              <h1 id="hero-title">Tarun Srivastava</h1>
              <p className="aka">
                aka <strong>TarunCodes</strong>
              </p>
              <p className="role">software engineer &amp; cybersecurity researcher</p>
            </div>
          </div>

          <div className="bio-block">
            <p className="bio">
              I&apos;m a 15-year-old software engineer and cybersecurity researcher from
              Varanasi, India. I&apos;m in high school, which mostly means I spend my days
              moving between classes, code, and whatever problem has my attention.
            </p>
            <p className="bio">
              I like building things for the web and finding out how they break. Backend
              systems, small tools, and security research are where I end up most often.
              Most of what I make lives on{' '}
              <a href="https://github.com/taruncodesfr" target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </p>
            <p className="bio">
              Off the clock you&apos;ll find me gaming, playing chess, writing code, or
              hanging out with my homies. A little academics too, when it&apos;s due.
            </p>
            <p className="bio">
              I&apos;m always up for a good conversation, a collaboration, or a CTF team.
              The fastest way to reach me is{' '}
              <a href="mailto:taruncodesfr@gmail.com">taruncodesfr@gmail.com</a>.
            </p>
            <p className="bio">
              Want to know about my journey?{' '}
              <a href="/journey/">Read the full story</a>.
            </p>
          </div>

          <nav className="hero-links" aria-label="Social links">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {label}
              </a>
            ))}
          </nav>
        </section>
      </main>

      <footer className="site-foot">
        <span className="foot-place">
          Varanasi, India <span className="dot" aria-hidden="true" /> <Clock />
        </span>
        <span className="foot-credit">tarun.is-a.dev</span>
      </footer>
    </div>
  )
}

export default App
