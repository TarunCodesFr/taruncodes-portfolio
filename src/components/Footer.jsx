import Clock from "./Clock";

export default function Footer() {
  return (
    <footer className="site-foot">
      <span className="foot-place">
        Varanasi, India <span className="dot" aria-hidden="true" /> <Clock />
      </span>
      <span className="foot-credit">
        taruncodes © 2026 All rights reserved.
      </span>
    </footer>
  );
}
