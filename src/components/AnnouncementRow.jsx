import { useState } from "react";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

// One announcement with expandable detail. `lead` gives it the larger, "latest" treatment.
function AnnouncementRow({ item, lead = false }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`ann ${lead ? "ann--lead" : ""}`}>
      <div className="ann__top">
        {lead && <span className="ann__badge">Latest</span>}
        <span className="ann__club">{item.club}</span>
        <time dateTime={item.date}>{formatDate(item.date)}</time>
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      {open && item.more && <p className="ann__more">{item.more}</p>}
      {item.more && (
        <button type="button" className="link-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Show less" : "Read more"} <span aria-hidden="true">{open ? "−" : "→"}</span>
        </button>
      )}
    </article>
  );
}

export default AnnouncementRow;
