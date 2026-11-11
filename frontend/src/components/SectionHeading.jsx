export default function SectionHeading({ 
  title, 
  subtitle, 
  label, 
  align = 'left',
  number = null,
  serifAccent = null
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading__meta">
        {number && <span className="section-heading__number">{number}</span>}
        {label && <span className="section-heading__label">{label}</span>}
      </div>

      <h2 className="section-heading__title">
        {title}
        {serifAccent && <span className="section-heading__serif-accent"> {serifAccent}</span>}
      </h2>

      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
