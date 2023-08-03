import { useEffect, useState } from 'react';
import st from '../Card/Card.module.scss';


function Card(props) {
    const { word, transcription, translation } = props;
    const [ showed, setShowed ] = useState(false);
    // следит изменяется ли слово
    useEffect(() => {
        setShowed(false);
    }, [word]);
    const handleChange = () => {
        setShowed(!showed);
    }
    return (
            <div className={st.card}>
            <p className={st.word}>{word}</p>
            <p className={st.transcription}>{transcription}</p>
            {showed ? <p className={st.translation} onClick={handleChange}>{translation}</p> : 
            <button className={st.button} onClick={handleChange}>Show translation</button>}
        </div>
    );
}

export default Card;