import Clock from "./components/Clock";

export default function Journey() {
  return (
    <div className="page">
      <header className="site-head">
        <a className="mark" href="/" aria-label="TarunCodes, back home">
          taruncodes<span aria-hidden="true">.</span>
        </a>
        <a className="head-link" href="/">
          <span aria-hidden="true">←</span> home
        </a>
      </header>

      <main className="journey">
        <header className="journey-head">
          <p className="eyebrow">the journey</p>
          <h1>How I got here</h1>
          <p className="lede">
            Minecraft servers, a three dollar payout, a community that died, and
            a press photo that pointed me toward security.
          </p>
        </header>

        <div className="prose">
          <p>
            I was 10 when Minecraft took over most of my free time. I played on
            minigame servers constantly, jumping between lobbies and paying
            attention to how everything was put together. Somewhere in there I
            noticed a bad habit that has not really left me since. When I saw
            something cool, I did not want to just be part of it. I wanted to
            build a better version myself.
          </p>

          <section>
            <h2>the server problem</h2>
            <p>
              So I decided to make my own Minecraft server. I had no idea how.
              The public plugins were ass, developers charged more than I could
              afford, and there was nobody around to explain things to me. I
              decided to stop waiting for help and learn it myself.
            </p>
            <p>
              I started with PHP because that is what the server software used
              for plugins. It was slow. I did not understand the plugin
              architecture, the server software confused me, and there were
              plenty of moments when giving up felt like the sensible option. I
              kept going anyway. It took a while, but I eventually understood
              enough to build what I wanted.
            </p>
          </section>

          <section>
            <h2>what the server taught me</h2>
            <p>
              At some point I had a working server with custom plugins and a
              medium-sized community that showed up every day. That project
              taught me more than coding. I had to deal with design, marketing,
              management, and communication. I am still trying to get good at
              that last one lol :&gt;
            </p>
          </section>

          <section>
            <h2>three dollars</h2>
            <p>
              Then I found freelancing and gave it a try. My first payout was
              $3. Yes, three dollars. It was tiny, but it proved that people
              would pay for something I made. The amounts kept getting bigger
              after that, and for a while it felt like I had found my lane.
            </p>
          </section>

          <section>
            <h2>the reset</h2>
            <p>
              Then the Bedrock community died. I had to shut the server down,
              and the freelancing work went with it. I still did not want to
              quit coding, so I moved to web development and focused on the
              backend. That is where I learned JavaScript and TypeScript and
              started freelancing again. I still do that now.
            </p>
          </section>

          <section>
            <h2>security</h2>
            <p>
              Last year I heard about the CBSE OSM portal being hacked by a
              teenager named{" "}
              <a href="https://ni5arga.com" target="_blank" rel="noreferrer">
                Nisarga Adhikary
              </a>
              . He showed up in the press with his anime profile picture, and he
              had the same weebiness personality like i did and it reminded me
              of the kind of people I grew up around on the internet. That was
              the first time I saw someone like me doing security work in
              public.
            </p>
            <p>
              I decided to step into cybersecurity after that. Nisarga is the
              reason I started. I am still not very good at it, but I am trying,
              and I hope it goes the same way it did when I first tried to make
              my own server at 10.
            </p>
          </section>
        </div>

        <div className="journey-end">
          <p>
            That is how I ended up as a software engineer, and then as a
            cybersecurity researcher. Thanks for reading all this yap. I hope it
            did not bore you.
          </p>
          <a className="back-link" href="/">
            <span aria-hidden="true">←</span> back home
          </a>
        </div>
      </main>

      <footer className="site-foot">
        <span className="foot-place">
          Varanasi, India <span className="dot" aria-hidden="true" /> <Clock />
        </span>
        <span className="foot-credit">tarun.is-a.dev</span>
      </footer>
    </div>
  );
}
