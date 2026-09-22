const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const Arrow = ({ size = 16 }) => (
  <svg className="icon-arrow" width={size} height={size} viewBox="0 0 24 24" {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const SearchIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const Check = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="m5 12.5 4.5 4.5L19 7" /></svg>
);
export const MenuIcon = ({ open }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...base}>{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
);
