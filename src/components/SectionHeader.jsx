function SectionHeader({ eyebrow, title, lead, children }) {
  return (
    <header className="section-head" data-reveal>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {(lead || children) && (
        <div className="section-head__side">
          {lead && <p>{lead}</p>}
          {children}
        </div>
      )}
    </header>
  );
}

export default SectionHeader;
