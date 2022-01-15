
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler navbar-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="container collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link me-5 active"
                                aria-current="page"
                                href="#"
                                style={{ color: 'white' }}
                            >Home</a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="#about"
                                style={{ color: 'white' }}
                            >About</a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="#portfolio"
                                style={{ color: 'white' }}
                            >Portfolio</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
