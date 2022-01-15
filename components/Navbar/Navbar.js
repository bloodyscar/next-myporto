
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button
                    class="navbar-toggler navbar-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="container collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link me-5 active"
                                aria-current="page"
                                href="#"
                                style={{ color: 'white' }}
                            >Home</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#about"
                                style={{ color: 'white' }}
                            >About</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#portfolio"
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
