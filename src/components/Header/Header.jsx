import { Link } from 'react-router-dom';
import st from '../Header/Header.module.scss';

function Header() {
    return (
        <header>
            <div className='container'>
            <div className={st.header}>
                <div className={st.logo}><p><Link to='/'>LINGO</Link></p></div>
                <div className={st.menu}><ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/learn'>Learn</Link></li>
                    <li><Link to='/vocabulary'>Vocabulary</Link></li>
                    </ul></div>
            </div>
            </div>
        </header>
    );
}

export default Header;