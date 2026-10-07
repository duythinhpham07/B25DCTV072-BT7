function SkillItem({ name, level }) {
  return (
    <li className="skill">
      <div className="skill-head">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="bar">
        <div className="bar-fill" style={{ width: `${level}%` }} />
      </div>
    </li>
  );
}

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((s) => (
        <SkillItem key={s.id} name={s.name} level={s.level} />
      ))}
    </ul>
  );
}

export default SkillList;
