import { useState } from "react";
import { Arrow, Check } from "./Icons";

// Editorial event "poster" row: the date is the hero.
function EventCard({ event }) {
  const [going, setGoing] = useState(false); // UI state only; wire to the backend later.
  const [taken, total] = event.seats;
  const pct = Math.round((taken / total) * 100);

  return (
    <article className="ev" data-reveal>
      <time className="ev__date" dateTime={`${event.year}-${event.month}-${event.day}`}>
        <span className="ev__day">{event.day}</span>
        <span className="ev__month">{event.month}</span>
      </time>

      <div className="ev__main">
        <span className="ev__club">{event.club}</span>
        <h3>{event.title}</h3>
        <p>{event.desc}</p>
        <dl className="ev__meta">
          <div><dt>Time</dt><dd>{event.time}</dd></div>
          <div><dt>Location</dt><dd>{event.place}</dd></div>
          <div>
            <dt>Seats</dt>
            <dd>
              {taken} / {total}
              <span className="ev__bar" role="presentation"><i style={{ width: `${pct}%` }} /></span>
            </dd>
          </div>
        </dl>
        <button type="button" className={`btn btn--sm ${going ? "btn--done" : "btn--ghost"}`} aria-pressed={going} onClick={() => setGoing(!going)}>
          {going ? <><Check /> You're in</> : <>Join event <Arrow /></>}
        </button>
      </div>

      <div className="ev__thumb"><img src={event.src} alt={`${event.title} poster`} loading="lazy" /></div>
    </article>
  );
}

export default EventCard;
