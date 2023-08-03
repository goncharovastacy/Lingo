import st from '../Learn/Learn.module.scss';
import Slider from '../Slider/Slider';
import words from './../../data/words.json';
// import Card from '../Card/Card';

function Learn() {
    return (
        <div className={st.learn}>
            <Slider wordsArr={words}></Slider>
        </div>
    );
}

export default Learn;