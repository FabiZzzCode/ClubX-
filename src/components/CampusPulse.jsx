import pulse from "../data/pulse";
import SectionHeader from "./SectionHeader";

function CampusPulse() {
  return (
    <section className="section wrap pulse" aria-labelledby="pulse-title">
      <SectionHeader eyebrow="Campus pulse" title={<span id="pulse-title">What's happening around campus.</span>} />
      <ul className="pulse__feed" data-reveal>
        {pulse.map((p) => (
          <li key={p.club} style={{ "--hue": p.hue }}>
            <span className="pulse__dot" aria-hidden="true" />
            <p>
              <strong>{p.club}</strong> {p.text}
            </p>
            <span className="pulse__kind">{p.kind}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CampusPulse;
