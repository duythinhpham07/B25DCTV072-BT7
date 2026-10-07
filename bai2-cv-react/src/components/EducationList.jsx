function EducationList({ items }) {
  return (
    <ul className="edu-list">
      {items.map((e) => (
        <li key={e.id}>
          <div className="item-head">
            <h3>{e.school}</h3>
            <span className="time">{e.time}</span>
          </div>
          <p>{e.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export default EducationList;
