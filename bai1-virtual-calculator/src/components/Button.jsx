function Button({ label, color = "gray", wide, onClick }) {
  let className = "btn " + color;
  if (wide) className += " wide";

  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
