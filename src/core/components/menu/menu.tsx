import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="main-nav__item">
                    <Link to={'robots'}>Collection</Link>
                </li>
                <li className="main-nav__item">
                    <Link to={'favorites'}>Favorites</Link>
                </li>
            </ul>
        </nav>
    );
}
