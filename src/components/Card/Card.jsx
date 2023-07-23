import st from '../Card/Card.module.scss';
import arrowleft from './../../assets/images/arrowleft.svg';
import arrowright from './../../assets/images/arrowright.svg';

function Card(props) {
    const { word, transcription, translation } = props;
    return (
        <div className={st.container}>
            <button className={st.button_back}><img src={arrowleft} alt="Arrow left" /></button>
            <div className={st.card}>
            <p className={st.word}>{word}Word</p>
            <p className={st.transcription}>{transcription}transcription</p>
            <button className={st.button}>Show translation</button>
            <p className={st.translation}>{translation}</p>
        </div>
        <button className={st.button_forward}><img src={arrowright} alt="Arrow right" /></button>
        </div>

    );
}

export default Card;