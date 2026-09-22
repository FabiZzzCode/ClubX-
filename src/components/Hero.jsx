import { Link } from "react-router-dom";
import { Arrow } from "./Icons";

// Decorative club identities that softly drift in and out around the headline.
const TAGS = [
  { label: "IEEE", hue: 222, x: "6%", y: "24%", d: "0s" },
  { label: "Photography", hue: 322, x: "78%", y: "20%", d: "1.6s" },
  { label: "Debate", hue: 8, x: "84%", y: "58%", d: "3.2s" },
  { label: "Computer Club", hue: 262, x: "4%", y: "62%", d: "4.8s" },
  { label: "Cultural", hue: 292, x: "68%", y: "78%", d: "6.4s" },
  { label: "Robotics", hue: 165, x: "22%", y: "84%", d: "8s" },
];

const STEPS = ["Connect", "Discover", "Belong", "Participate"];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        {TAGS.map((t) => (
          <span key={t.label} className="hero__tag" style={{ "--hue": t.hue, left: t.x, top: t.y, animationDelay: t.d }}>
            {t.label}
          </span>
        ))}
      </div>

      <div className="wrap hero__inner">
        <p className="hero__eyebrow">
          <span className="live-dot" /> University clubs, in one place
        </p>
        <h1 className="hero__title">
          <span>Your campus.</span>
          <span>Your people.</span>
          <span className="grad-text">Your next thing.</span>
        </h1>
        <p className="hero__lead">Discover communities, join experiences, and find where you belong.</p>
        <div className="hero__cta">
          <Link to={{ pathname: "/", hash: "#clubs" }} className="btn btn--primary">
            Explore Clubs <Arrow />
          </Link>
          <Link to={{ pathname: "/", hash: "#events" }} className="btn btn--ghost">
            Discover Events
          </Link>
        </div>
      </div>

      <ol className="wrap hero__steps" aria-label="How ClubX works">
        {STEPS.map((s, i) => (
          <li key={s}>
            <span>{String(i + 1).padStart(2, "0")}</span> {s}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Hero;
