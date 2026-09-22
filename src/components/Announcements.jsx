import clubs from "../data/clubs";
import AnnouncementRow from "./AnnouncementRow";
import SectionHeader from "./SectionHeader";

// Every announcement across all clubs with profile data, newest first.
const all = Object.entries(clubs)
  .flatMap(([slug, c]) => c.announcements.map((a) => ({ ...a, club: c.short, slug })))
  .sort((a, b) => b.date.localeCompare(a.date));

function Announcements() {
  const [latest, ...rest] = all;
  return (
    <section id="announcements" className="section wrap">
      <SectionHeader eyebrow="Announcements" title="Straight from the clubs." />
      <div className="ann-layout" data-reveal>
        <AnnouncementRow item={latest} lead />
        <div className="ann-list">
          {rest.map((a) => <AnnouncementRow key={a.title} item={a} />)}
        </div>
      </div>
    </section>
  );
}

export default Announcements;
