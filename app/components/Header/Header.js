import "./header.css";

export default function Header() {
    return (
        <header>
            <h1 className="logo__container">Feeling CSS</h1>
            <nav className="header__navbar">
                <ul className="header__navbar__list">
                    <li className="header__navbar__list__item">
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="#layout">Layout</a>
                    </li>
                    <li>
                        <a href="#font">Font</a>
                    </li>
                    <li>
                        <a href="#color">Color</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
