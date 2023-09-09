import { useState } from "react";
import Card from "../Card/Card";
import st from "../Slider/Slider.module.scss";
import arrowleft from "./../../assets/images/arrowleft.svg";
import arrowright from "./../../assets/images/arrowright.svg";

function Slider(props) {
  const { wordsArr } = props;
  const [index, setIndex] = useState(0);
  const [wordNumber, setWordNumber] = useState(1);
  const [learnScore, setLearnScore] = useState(0);
  const [wordsArrForScore, setWordsArrForScore] = useState([]);

  // устанавливает число выученных слов
  const increaseScore = () => {
    const scoreArr = [...wordsArrForScore];
    if (!scoreArr.includes(wordsArr[index].english)) {
      scoreArr.push(wordsArr[index].english);
    }
    setWordsArrForScore(scoreArr);
    setLearnScore(scoreArr.length);
  };
  // возвращает предыдущую карточку
  const handleBack = () => {
    setIndex(index - 1);
    setWordNumber(wordNumber - 1);
  };
  // переход к следующей карточке
  const handleForward = () => {
    setIndex(index + 1);
    setWordNumber(wordNumber + 1);
  };
  // обнуляет значения
  const handleDefault = () => {
    setIndex(0);
    setWordNumber(1);
  };

  // если массив слов не передан, то выводим, что слов нет
  if (wordsArr !== undefined) {
    return (
      <>
        {index < wordsArr.length ? (
          <>
            <div className={st.container}>
              <button
                className={st.button_back}
                onClick={handleBack}
                disabled={index === 0}
              >
                <img src={arrowleft} alt="Arrow left" />
              </button>
              <Card
                word={wordsArr[index].english}
                transcription={wordsArr[index].transcription}
                translation={wordsArr[index].russian}
                score={increaseScore}
              ></Card>
              <button className={st.button_forward} onClick={handleForward}>
                <img src={arrowright} alt="Arrow right" />
              </button>
            </div>
            <div className={st.counter}>
              <p>
                {" "}
                Words learnt:
                <span> {learnScore}</span> / <span>{wordsArr.length}</span>
              </p>
            </div>
          </>
        ) : (
          <div className={st.container}>
            <div className={st.continue}>
              <h2>There are no more words</h2>
              <button onClick={handleDefault}>Continue learning</button>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className={st.container}>
          <div className={st.continue}>
            <h2>Sorry, there are no words</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
