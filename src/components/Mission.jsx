import missionImg from "../assets/mission.jpg";

const STEPS = [
  ["Connect", "One central place for every club on campus."],
  ["Discover", "Find communities, events and announcements that match you."],
  ["Belong", "Join in seconds instead of chasing forms and group chats."],
  ["Participate", "Register, show up, and keep track of what you've done."],
];

function Mission() {
  return (
    <section className="section wrap mission" data-reveal>
      <figure className="mission__image">
        <img src={missionImg} alt="Students together on campus" loading="lazy" />
      </figure>
      <div className="mission__body">
        <span className="eyebrow">Why ClubX</span>
        <h2>Clubs are communities, not spreadsheets.</h2>
        <p>
          ClubX turns scattered forms, spreadsheets and group chats into one clear digital home for
          campus life — so joining a club or registering for an event takes seconds, not days.
        </p>
        <ol className="mission__steps">
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div><strong>{t}</strong><p>{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Mission;
