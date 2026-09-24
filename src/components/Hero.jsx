

import { Link } from "react-router-dom";
import { Arrow } from "./Icons";

const STEPS = ["Connect", "Discover", "Belong", "Participate"];

function Hero() {
  return (
    <section className="hero">
  
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

     
      <div className="wrap hero__inner">
        <p className="hero__eyebrow">
          <span className="live-dot" /> University clubs, all in one place
        </p>
        <h1 className="hero__title">
          <span>Your campus</span>
          <span>Your people</span>
          <span className="grad-text">Your next thing.</span>
        </h1>

        <p className="hero__lead">
          From coding to culture, from debates to design — discover the clubs
          that shape your university years.
        </p>

        <div className="hero__cta">
          <Link to={{ pathname: "/", hash: "#clubs" }} className="btn btn--primary">
            Explore Clubs <Arrow />
          </Link>
          <Link to="/events" className="btn btn--ghost">
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
