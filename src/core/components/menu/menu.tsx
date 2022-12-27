import { Link } from "react-router-dom";

export function Menu() {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <a href="/" className="main-nav__link">
                        Home
                    </a>
                </li>
                <li className="main-nav__item">
                    <Link to={"robots"}>
                        Collection
                    </Link>
                    
                </li>
            </ul>
        </nav>
    );
}
