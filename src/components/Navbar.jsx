import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon, MenuIcon } from "./Icons";

const LINKS = [
  { id: "clubs", label: "Clubs" },
  { id: "events", label: "Events" },
  { id: "announcements", label: "Announcements" },
];

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 200) setSection("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for the home page sections.
  useEffect(() => {
    if (!isHome || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSection(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [isHome]);

  const active = isHome ? section : pathname.startsWith("/clubs") ? "clubs" : "";
  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label="ClubX home" onClick={close}>
          Club<span>X</span>
        </Link>

        <nav id="primary-nav" className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.id}
              to={{ pathname: "/", hash: `#${l.id}` }}
              className={active === l.id ? "is-active" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <Link to={{ pathname: "/", hash: "#search" }} className="nav__icon" aria-label="Search clubs" onClick={close}>
            <SearchIcon />
          </Link>
          <Link to="/login" className="nav__login" onClick={close}>Log in</Link>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
