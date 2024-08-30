import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">MedScanner</div>
      <div className="navlinks">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
