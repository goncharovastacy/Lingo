import { useState } from "react";
import { useContext } from "react";
import { WordsContext } from "../../context/WordsContext";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import st from "../Slider/Slider.module.scss";
import arrowleft from "./../../assets/images/arrowleft.svg";
import arrowright from "./../../assets/images/arrowright.svg";

function Slider() {
  const [index, setIndex] = useState(0);
  const [wordNumber, setWordNumber] = useState(1);
  const [learnScore, setLearnScore] = useState(0);
  const [wordsArrForScore, setWordsArrForScore] = useState([]);
  const { words, loading } = useContext(WordsContext);

  // устанавливает число выученных слов
  const increaseScore = () => {
    const scoreArr = [...wordsArrForScore];
    if (!scoreArr.includes(words[index].english)) {
      scoreArr.push(words[index].english);
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
    setWordsArrForScore([]);
    setLearnScore(0);
  };

  if (loading === true) {
    return (
      <div className={st.container}>
        <Loader />
      </div>
    );
  }

  if (words !== undefined) {
    return (
      <>
        {index < words.length ? (
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
                word={words[index].english}
                transcription={words[index].transcription}
                translation={words[index].russian}
                score={increaseScore}
              ></Card>
              <button className={st.button_forward} onClick={handleForward}>
                <img src={arrowright} alt="Arrow right" />
              </button>
            </div>
            <div className={st.counter}>
              <p>
                {" "}
                Выученных слов:
                <span> {learnScore}</span> / <span>{words.length}</span>
              </p>
            </div>
          </>
        ) : (
          <div className={st.container}>
            <div className={st.continue}>
              <h2>Больше нет слов</h2>
              <button onClick={handleDefault}>Продолжить изучение</button>
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
            <h2>Упс, слова не найдены</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
