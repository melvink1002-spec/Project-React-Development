//Navbar
function Header() {
  return (
    <header className="nav">
      <div className="container nav-content">
        <h2 className="logo">Shortly</h2>

        <nav className="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </nav>

        <div className="nav-auth">
          <a href="#">Login</a>
          <button className="btn small">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;