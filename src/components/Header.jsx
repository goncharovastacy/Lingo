import '../style/Header.scss';

function Header() {
    return (
        <header>
            <div className="container">
            <div className="header">
                <div className="logo"><p>LINGO</p></div>
                <div className="menu"><ul>
                    <li>Home</li>
                    <li>Learn</li>
                    <li>Vocabulary</li>
                    </ul></div>
            </div>
            </div>
        </header>
    );
}

export default Header;