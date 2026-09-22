import { Link } from "react-router-dom";
import { Arrow } from "./Icons";

// Compact club row used in the discovery list. Expands on hover/focus to reveal the tagline.
function ClubPreview({ club }) {
  const body = (
    <>
      <span className="preview__mark" aria-hidden="true">{club.short.slice(0, 2)}</span>
      <span className="preview__text">
        <span className="preview__name">{club.short}</span>
        <span className="preview__meta">
          {club.category}
          {!club.hasPage && " · Profile coming soon"}
        </span>
        <span className="preview__more"><span>{club.tagline}</span></span>
      </span>
      <Arrow />
    </>
  );
  const style = { "--hue": club.hue };
  return (
    <li>
      <Link to={`/clubs/${club.slug}`} className="preview" style={style}>
        {body}
      </Link>
    </li>
  );
}

export default ClubPreview;
