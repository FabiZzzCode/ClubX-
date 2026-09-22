import { useEffect, useState } from "react";
import "./IntroScreen.css";

const SEEN_KEY = "clubx-intro-seen";
const FADE_MS = 700;

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

// Full-screen brand intro. Plays once per browser session, is skippable, and never blocks afterwards.
function IntroScreen() {
  const [phase, setPhase] = useState(() => (alreadySeen() ? "done" : "show")); // show -> fade -> done

  useEffect(() => {
    if (phase !== "show") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setPhase("fade"), reduce ? 900 : 2300);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "fade") return;
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch { /* storage unavailable */ }
    const t = setTimeout(() => setPhase("done"), FADE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`intro ${phase === "fade" ? "intro--fade" : ""}`}
      style={{ "--fade": `${FADE_MS}ms` }}
      onClick={() => setPhase("fade")}
      role="presentation"
      aria-hidden="true"
    >
      <div className="intro__glow" />
      <div className="intro__content">
        <h1 className="intro__title">
          {"CLUBX".split("").map((ch, i) => (
            <span key={i} style={{ animationDelay: `${0.15 + i * 0.08}s` }}>{ch}</span>
          ))}
        </h1>
        <div className="intro__line" />
        <p className="intro__subtitle">Where campus communities connect.</p>
      </div>
    </div>
  );
}

export default IntroScreen;
