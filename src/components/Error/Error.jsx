import st from '../Error/Error.module.scss';
import errorimg from './../../assets/images/errorimg.svg';

function Error () {
    return ( 
        <div className="container">
            <div className={st.image}><img src={errorimg} alt="" /></div>
            <h2>Error 404</h2>
            <p>Page not found</p>
        </div>
     );
}

export default Error;