import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-light mb-5 rounded-pill" style={{backgroundColor: "#e3f2fd"}}>
    <Link to="/" className="navbar-brand m-5">Inicio</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <Link to="/futbol" className="nav-link">Futbol</Link>
        </li>
        <li className="nav-item">
          <Link to="/tenis" className="nav-link">Tenis</Link>
        </li>
        <li className="nav-item">
          <Link to="/voley" className="nav-link">Voley</Link>
        </li>
      </ul>
      <button className="d-flex justify-content-right m-1 btn btn-light rounded-pill">
        <BsFillPersonFill className='mt-3'/><h4 className="m-2">Mi cuenta</h4>
      </button>
    </div>
  </nav> );
}
 
export default Navbar;