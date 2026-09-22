import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import directory, { CATEGORIES } from "../data/directory";
import ClubPreview from "./ClubPreview";
import SectionHeader from "./SectionHeader";
import { Arrow, SearchIcon } from "./Icons";

function Featured({ club }) {
  return (
    <Link to={`/clubs/${club.slug}`} className="featured" style={{ "--hue": club.hue }}>
      {club.image && <img src={club.image} alt="" loading="lazy" />}
      <span className="featured__mono" aria-hidden="true">{club.short}</span>
      <span className="featured__body">
        <span className="featured__tag">Featured · {club.category}</span>
        <span className="featured__name">{club.short}</span>
        <span className="featured__tagline">{club.tagline}</span>
        <span className="featured__cta">Explore Club <Arrow /></span>
      </span>
    </Link>
  );
}

function ClubDiscovery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return directory.filter(
      (c) =>
        (category === "All" || c.category === category) &&
        (!q || `${c.name} ${c.short} ${c.tagline} ${c.category}`.toLowerCase().includes(q))
    );
  }, [query, category]);

  const [featured, ...rest] = results;
  const reset = () => { setQuery(""); setCategory("All"); };

  return (
    <section id="clubs" className="section wrap">
      <SectionHeader
        eyebrow="Discover"
        title="Find the community that fits you."
        lead="Every club is a living community. Browse by interest or search by name."
      />

      <div className="finder" data-reveal>
        <label className="finder__search">
          <SearchIcon />
          <span className="sr-only">Search clubs</span>
          <input
            id="search"
            type="search"
            placeholder="Search clubs…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </label>
        <div className="chips" role="group" aria-label="Filter by category">
          {["All", ...CATEGORIES].map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={category === c} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">{results.length} clubs shown</p>

      {featured ? (
        <div className="discover" data-reveal>
          <Featured club={featured} />
          {rest.length > 0 && (
            <ul className="previews">
              {rest.map((c) => <ClubPreview key={c.slug} club={c} />)}
            </ul>
          )}
        </div>
      ) : (
        <div className="empty" data-reveal>
          <h3>No clubs match that search.</h3>
          <p>Try a different name or clear the filters.</p>
          <button type="button" className="btn btn--ghost" onClick={reset}>Clear filters</button>
        </div>
      )}
    </section>
  );
}

export default ClubDiscovery;
