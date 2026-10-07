function ProjectCard({ name, time, description, tech }) {
  return (
    <article className="project">
      <div className="item-head">
        <h3>{name}</h3>
        <span className="time">{time}</span>
      </div>
      <p>{description}</p>
      <div className="tags">
        {tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
