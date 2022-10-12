import { PriButton } from "../Buttons/buttons/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { PriButton_tr } from "../Buttons/buttons/Primarytr";

export default function Navbar_tr() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent aos-init aos-animate">
          <div className="container-fluid">
            <Link href="/tr">
              <a className="navbar-brand">ramhard</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " href="#hero">
                    Başlangıç
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#why">
                    Neden biz?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#process">
                    İşlem
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Hakkımızda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dil
                  </a>
                  <ul class="dropdown-menu">
                    {/*бг*/}
                    <li>
                      <Link
                        class="dropdown-item d-flex justify-content-center"
                        href="/"
                      >
                        <img
                          width={50}
                          height={50}
                          src="https://cdn-icons-png.flaticon.com/512/555/555544.png"
                        />
                      </Link>
                    </li>
                    {/*ен*/}

                    <li>
                      <Link
                        class="dropdown-item d-flex justify-content-center"
                        href="/en"
                      >
                        <img
                          width={50}
                          height={50}
                          src="https://cdn-icons-png.flaticon.com/512/206/206626.png"
                        />
                      </Link>
                    </li>
                    {/*тр*/}
                  </ul>
                </li>

                <li className="nav-item">
                    <PriButton_tr />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
