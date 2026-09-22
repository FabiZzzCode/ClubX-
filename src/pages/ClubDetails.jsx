import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinClub from "../components/JoinClub";
import AnnouncementRow from "../components/AnnouncementRow";
import { Arrow } from "../components/Icons";
import clubs from "../data/clubs";
import directory from "../data/directory";
import "../styles/club.css";

const TABS = ["Overview", "Announcements", "Members", "Requirements", "Achievements", "About"];
const tabId = (t) => t.toLowerCase();

const initials = (name) => name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

function List({ title, items }) {
  return (
    <section className="cd-block">
      <h3>{title}</h3>
      <ul className="cd-list">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </section>
  );
}

function InfoList({ items }) {
  return (
    <dl className="cd-info">
      {items.map((i) => (
        <div key={i.label}>
          <dt>{i.label}</dt>
          <dd>{i.href ? <a href={i.href} target="_blank" rel="noreferrer">{i.value}</a> : i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Overview({ club, announcements, goTo }) {
  return (
    <>
      <p className="cd-lead">{club.description}</p>
      <div className="cd-cols">
        <section>
          <h3 className="cd-h">Club information</h3>
          <InfoList items={club.info} />
        </section>
        <section>
          <h3 className="cd-h">Latest announcements</h3>
          <div className="ann-list">
            {announcements.slice(0, 2).map((a, i) => <AnnouncementRow key={a.title} item={a} lead={i === 0} />)}
          </div>
          <button type="button" className="link-btn" onClick={() => goTo("Announcements")}>View all <Arrow size={14} /></button>
        </section>
      </div>
    </>
  );
}

function Members({ members }) {
  return (
    <ul className="cd-members">
      {members.map((m) => (
        <li key={m.name}>
          <span className="cd-avatar" aria-hidden="true">{initials(m.name)}</span>
          <div>
            <strong>{m.name}</strong>
            <span>{m.role} · {m.dept}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Requirements({ req }) {
  return (
    <div className="cd-cols">
      <section>
        <h3 className="cd-h">How to join</h3>
        <ol className="cd-steps">
          {req.joining.map((s, i) => (
            <li key={s}><span>{String(i + 1).padStart(2, "0")}</span>{s}</li>
          ))}
        </ol>
      </section>
      <div className="cd-stack">
        <List title="Who can join" items={req.who} />
        <List title="Eligibility" items={req.eligibility} />
        <List title="Conditions" items={req.conditions} />
      </div>
    </div>
  );
}

function Achievements({ items }) {
  return (
    <ol className="cd-timeline">
      {items.map((a) => (
        <li key={a.title}>
          <span className="cd-year">{a.year}</span>
          <div><h3>{a.title}</h3><p>{a.desc}</p></div>
        </li>
      ))}
    </ol>
  );
}

function About({ about }) {
  return (
    <>
      <p className="cd-lead">{about.history}</p>
      <div className="cd-cols">
        <section className="cd-block"><h3>Mission</h3><p>{about.mission}</p></section>
        <section className="cd-block"><h3>Vision</h3><p>{about.vision}</p></section>
      </div>
      <div className="cd-cols">
        <List title="Activities" items={about.activities} />
        <section className="cd-block"><h3>Contact</h3><InfoList items={about.contact} /></section>
      </div>
    </>
  );
}

function NotAvailable({ slug }) {
  const entry = directory.find((c) => c.slug === slug);
  return (
    <div className="club-page">
      <Navbar />
      <main className="wrap cd-missing" style={{ "--hue": entry?.hue ?? 222 }}>
        <span className="eyebrow">{entry ? entry.category : "404"}</span>
        <h1>{entry ? entry.name : "Club not found"}</h1>
        <p>
          {entry
            ? `${entry.tagline}. The official ${entry.short} page is coming soon.`
            : "This club page isn't available."}
        </p>
        <Link to={{ pathname: "/", hash: "#clubs" }} className="btn btn--ghost">← Back to all clubs</Link>
      </main>
      <Footer />
    </div>
  );
}

function ClubDetails() {
  const { slug } = useParams();
  const club = clubs[slug];
  const [tab, setTab] = useState("Overview");
  const tabRefs = useRef({});

  if (!club) return <NotAvailable slug={slug} />;

  const entry = directory.find((c) => c.slug === slug);
  const announcements = club.announcements.map((a) => ({ ...a, club: club.short }));

  const onKeyDown = (e) => {
    const i = TABS.indexOf(tab);
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: TABS.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const t = TABS[(next + TABS.length) % TABS.length];
    setTab(t);
    tabRefs.current[t]?.focus();
  };

  return (
    <div className="club-page" style={{ "--hue": entry?.hue ?? 222 }}>
      <Navbar />

      <header className="cd-hero">
        <div className="cd-hero__glow" aria-hidden="true" />
        <div className="wrap">
          <nav className="cd-crumbs" aria-label="Breadcrumb">
            <Link to={{ pathname: "/", hash: "#clubs" }}>Clubs</Link>
            <span aria-hidden="true">/</span>
            <span>{entry?.category ?? "Club"}</span>
          </nav>
          <h1 className="cd-title">{club.short}</h1>
          <p className="cd-name">{club.name}</p>
          <p className="cd-tagline">“{club.tagline}”</p>
          <div className="cd-actions">
            <JoinClub club={club} />
            <Link to={{ pathname: "/", hash: "#events" }} className="btn btn--ghost btn--lg">Explore Events</Link>
          </div>
          <dl className="cd-stats">
            {club.stats.map((s) => (
              <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
            ))}
          </dl>
        </div>
      </header>

      <div className="cd-tabbar">
        <div className="wrap">
          <div className="cd-tabs" role="tablist" aria-label="Club sections" onKeyDown={onKeyDown}>
            {TABS.map((t) => (
              <button
                key={t}
                ref={(el) => (tabRefs.current[t] = el)}
                id={`tab-${tabId(t)}`}
                role="tab"
                type="button"
                aria-selected={t === tab}
                aria-controls={`panel-${tabId(t)}`}
                tabIndex={t === tab ? 0 : -1}
                className={t === tab ? "is-active" : ""}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="wrap cd-body" role="tabpanel" id={`panel-${tabId(tab)}`} aria-labelledby={`tab-${tabId(tab)}`} key={tab}>
        {tab === "Overview" && <Overview club={club} announcements={announcements} goTo={setTab} />}
        {tab === "Announcements" && (
          <div className="ann-list ann-list--wide">
            {announcements.map((a, i) => <AnnouncementRow key={a.title} item={a} lead={i === 0} />)}
          </div>
        )}
        {tab === "Members" && <Members members={club.members} />}
        {tab === "Requirements" && <Requirements req={club.requirements} />}
        {tab === "Achievements" && <Achievements items={club.achievements} />}
        {tab === "About" && <About about={club.about} />}
      </main>

      <Footer />
    </div>
  );
}

export default ClubDetails;
