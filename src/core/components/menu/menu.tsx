import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <Link to={'/'}>
                    <li className="main-nav__item">Inicio </li>
                </Link>

                <Link to={'robots'}>
                    <li className="main-nav__item">Collección </li>
                </Link>

                <Link to={'favorites'}>
                    <li className="main-nav__item">Favoritos</li>
                </Link>
            </ul>
        </nav>
    );
}
