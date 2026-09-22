import events from "../data/events";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";

function Events() {
  return (
    <section id="events" className="section wrap">
      <SectionHeader
        eyebrow="Events"
        title="Something is always on."
        lead="Workshops, contests and seminars — every one of them managed through ClubX."
      />
      <div className="ev-list">
        {events.map((e) => <EventCard key={e.id} event={e} />)}
      </div>
    </section>
  );
}

export default Events;
