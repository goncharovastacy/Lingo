import { Link } from 'react-router-dom';
import st from '../Home/Home.module.scss';

function Home() {
    return (
        <div className='container'>
            <h1>Learn English words and increase your vocabulary</h1>
            <button className={st.start}><Link to='/learn'>Start</Link></button>
        </div>
    );
}

export default Home;