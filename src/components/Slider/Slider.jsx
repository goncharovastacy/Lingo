import { useState } from "react";
import { observer, inject } from "mobx-react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import st from "../Slider/Slider.module.scss";
import arrowleft from "./../../assets/images/arrowleft.svg";
import arrowright from "./../../assets/images/arrowright.svg";

const Slider = inject(["WordsStore"])(
  observer(({ WordsStore }) => {
    const [index, setIndex] = useState(0);
    const [wordNumber, setWordNumber] = useState(1);
    const [learnScore, setLearnScore] = useState(0);
    const [wordsArrForScore, setWordsArrForScore] = useState([]);

    // устанавливает число выученных слов
    const increaseScore = () => {
      const scoreArr = [...wordsArrForScore];
      if (!scoreArr.includes(WordsStore.words[index].english)) {
        scoreArr.push(WordsStore.words[index].english);
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

    if (WordsStore.error !== null) {
      return <Error error={WordsStore.error} />;
    }

    if (WordsStore.loading === true) {
      return (
        <div className={st.container}>
          <Loader />
        </div>
      );
    }

    if (WordsStore.words.length !== 0) {
      return (
        <>
          {index < WordsStore.words.length ? (
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
                  word={WordsStore.words[index].english}
                  transcription={WordsStore.words[index].transcription}
                  translation={WordsStore.words[index].russian}
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
                  <span> {learnScore}</span> /{" "}
                  <span>{WordsStore.words.length}</span>
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
  })
);

export default Slider;
