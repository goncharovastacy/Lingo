import { useEffect, useRef, useState } from "react";
import st from "../Card/Card.module.scss";

function Card(props) {
  const { word, transcription, translation, score } = props;
  const [showed, setShowed] = useState(false);
  const buttonRef = useRef(null);

  // следит изменяется ли слово
  useEffect(() => {
    setShowed(false);
  }, [word]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  });

  const handleChange = () => {
    setShowed(!showed);
    score();
  };
  return (
    <div className={st.card}>
      <p className={st.word}>{word}</p>
      <p className={st.transcription}>{transcription}</p>
      {showed ? (
        <p className={st.translation}>{translation}</p>
      ) : (
        <button className={st.button} onClick={handleChange} ref={buttonRef}>
          Show translation
        </button>
      )}
    </div>
  );
}

export default Card;
