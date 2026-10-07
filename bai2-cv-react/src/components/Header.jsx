function Header({ profile }) {
  return (
    <header className="header">
      <div className="avatar">{profile.name.split(" ").pop()[0]}</div>
      <div>
        <h1>{profile.name}</h1>
        <p className="subtitle">{profile.title}</p>
        <ul className="contact">
          <li>✉ <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li>☎ {profile.phone}</li>
          <li>⌂ <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
