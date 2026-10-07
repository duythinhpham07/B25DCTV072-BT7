// Nội dung bên trong thẻ <Section> được truyền vào qua children
function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default Section;
