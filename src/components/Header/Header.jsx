import st from '../Header/Header.module.scss';

function Header() {
    return (
        <header>
            <div className='container'>
            <div className={st.header}>
                <div className={st.logo}><p>LINGO</p></div>
                <div className={st.menu}><ul>
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