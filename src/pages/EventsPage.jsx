
import events from "../data/events";
import EventCard from "../components/EventCard";

import Navbar from "../components/Navbar";  
import Footer from "../components/Footer";   
import "../styles/events.css";

function EventsPage() {
  return (
    <>
      <Navbar />                              
      <main className="page-events">          
        <div className="wrap">
          {/* Page Header */}
          <div className="page-header">
            <p className="page-eyebrow">What's happening</p>
            <h1 className="page-title">All Events</h1>
            <p className="page-lead">
              Workshops, contests, seminars — every campus moment, all in one place.
            </p>
          </div>

         
          <div className="ev-list">
            {events.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </main>
      <Footer />                             
    </>
  );
}

export default EventsPage;