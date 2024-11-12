export default function Header() {
  return (
    <header className="header">
      <a href="#landing_page" className="logo" style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",  fontSize: "30px", }}>Agro Manager</a>
      <nav className="nav-links">
        <a href="#features" style={{fontSize: '20px', textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>Features</a>
        <a href="#pricing" style={{fontSize: '20px', textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>Pricing</a>
        <a href="#about" style={{fontSize: '20px', textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>About Us</a>
        <a href="#contact" style={{fontSize: '20px',  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>Contact</a>
      </nav>
      <a href="#signup" className="cta-button">Sign Up</a>
      
    </header>
  );
}
