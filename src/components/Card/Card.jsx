import { useState } from 'react';
import st from '../Card/Card.module.scss';
import arrowleft from './../../assets/images/arrowleft.svg';
import arrowright from './../../assets/images/arrowright.svg';

function Card(props) {
    const { word, transcription, translation } = props;
    const [ showed, setShowed ] = useState(false);
    const handleChange = () => {
        setShowed(!showed);
    }
    return (
        <div className={st.container}>
            <button className={st.button_back}><img src={arrowleft} alt="Arrow left" /></button>
            <div className={st.card}>
            <p className={st.word}>{word}Word</p>
            <p className={st.transcription}>{transcription}[ transcription ]</p>
            {showed ? <p className={st.translation} onClick={handleChange}>{translation}перевод</p> : 
            <button className={st.button} onClick={handleChange}>Show translation</button>}
        </div>
        <button className={st.button_forward}><img src={arrowright} alt="Arrow right" /></button>
        </div>

    );
}

export default Card;