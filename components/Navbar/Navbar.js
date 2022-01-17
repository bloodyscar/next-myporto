
import styles from './Navbar.module.css';

export default function Navbar() {
    function goToAbout(url) {
        var elmnt = document.getElementById(url);
        elmnt.scrollIntoView();
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
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
                                aria-current="page" onClick={goToAbout.bind(this, "navbar")}
                                style={{ color: 'white', cursor: "pointer" }}
                            >Home</a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" onClick={goToAbout.bind(this, "about")}
                                style={{ color: 'white', cursor: "pointer" }}
                            >About</a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" onClick={goToAbout.bind(this, "portfolio")}
                                style={{ color: 'white', cursor: "pointer" }}
                            >Portfolio</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
