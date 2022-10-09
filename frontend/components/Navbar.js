import { KurvaButon, PriButton } from "./buttons/Button";

export default function Navbar() {
    return (
        <>
            <header>
            <nav data-aos="fade-down" className="navbar navbar-expand-lg navbar-light bg-transparent aos-init aos-animate">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ramhard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="#hero">Начало</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why">Защо нас?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#process">Процес</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">За нас</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">ЧЗВ</a>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Език
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">E.C.C.C</a></li>
                <li><a class="dropdown-item" href="#">shanadjii</a></li>
                <li><hr  class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Kasata</a></li>
              </ul>
            </li>

              <li className="nav-item">
                <a href="#cta-down">
                  <PriButton />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            </header>
        </>
    )
}