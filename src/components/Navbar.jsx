import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid ">
    <Link to={'/'} className="navbar-brand">
      <img className="img-fluid w-25" src={'../../public/images/logo.png'}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/'} className="nav-link text-white font-weight-bold" aria-current="page">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link">Sobre nosotros</Link>
        </li>
        <li className="nav-item">
          <Link to={'/contact'} className="nav-link">Contacto</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to={"/pañales"}>Pañales para bebés</Link></li>
            <li><a className="dropdown-item" href="#">Productos para mujeres</a></li>
            <li><a className="dropdown-item" href="#">Ropita para bebés</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
