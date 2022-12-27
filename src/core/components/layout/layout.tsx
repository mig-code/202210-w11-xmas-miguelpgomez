import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <div className="container">
            <Header></Header>
            <Menu></Menu>

            {children}
        </div>
    );
}
