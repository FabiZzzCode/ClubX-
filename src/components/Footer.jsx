import { Link } from "react-router-dom";
import { Arrow } from "./Icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__cta">
        <h2>Ready to find your people?</h2>
        <Link to={{ pathname: "/", hash: "#clubs" }} className="btn btn--primary">
          Explore Clubs <Arrow />
        </Link>
      </div>
      <div className="wrap footer__bar">
        <Link to="/" className="nav__brand">Club<span>X</span></Link>
        <nav aria-label="Footer">
          <Link to={{ pathname: "/", hash: "#clubs" }}>Clubs</Link>
          <Link to={{ pathname: "/", hash: "#events" }}>Events</Link>
          <Link to={{ pathname: "/", hash: "#announcements" }}>Announcements</Link>
          <Link to="/login">Log in</Link>
        </nav>
        <p>© {new Date().getFullYear()} ClubX · University Club Management</p>
      </div>
    </footer>
  );
}

export default Footer;
