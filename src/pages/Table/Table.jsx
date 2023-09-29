import { useEffect, useState } from "react";
import { observer, inject } from "mobx-react";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Row from "../../components/Row/Row";
import st from "../Table/Table.module.scss";

const Table = inject(["WordsStore"])(
  observer(({ WordsStore }) => {
    const [state, setState] = useState({
      english: "",
      transcription: "",
      russian: "",
      tags: "",
    });

    useEffect(() => {
      WordsStore.getWords();
    }, []);
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "english" && /[\dА-Яа-я]/g.test(value)) {
        alert("В английском слове можно использовать только латинский алфавит");
      } else if (name === "russian" && /[\da-zA-Z]/g.test(value)) {
        alert("В переводе слова можно использовать только кириллицу");
      }
      setState({ ...state, [name]: value });
    };
    const handleCancel = () => {
      setState({
        english: "",
        transcription: "",
        russian: "",
        tags: "",
      });
    };

    const handleSave = async () => {
      if (
        state.english !== "" &&
        state.transcription !== "" &&
        state.russian !== "" &&
        state.tags !== ""
      ) {
        console.log(state);
        await WordsStore.addNewWord(state);
        setState({
          english: "",
          transcription: "",
          russian: "",
          tags: "",
        });
      } else {
        alert("Пожалуйста, заполните все поля");
      }
    };

    if (WordsStore.error !== null) {
      return <Error error={WordsStore.error} />;
    }

    if (WordsStore.loading === true) {
      return (
        <div className={st.table}>
          <div className="container">
            <Loader />
          </div>
        </div>
      );
    }
    return (
      <div className={st.table}>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>СЛОВО</th>
                <th>ТРАНСКРИПЦИЯ</th>
                <th>ПЕРЕВОД</th>
                <th>ТЕГИ</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input
                    type="text"
                    value={state.english}
                    name="english"
                    onChange={handleChange}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    value={state.transcription}
                    name="transcription"
                    onChange={handleChange}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    value={state.russian}
                    name="russian"
                    onChange={handleChange}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    value={state.tags}
                    name="tags"
                    onChange={handleChange}
                  />
                </th>
                <th>
                  <button onClick={handleSave}>Сохранить</button>
                </th>
                <th>
                  <button onClick={handleCancel}>Отмена</button>
                </th>
              </tr>
              {WordsStore.words.map((word) => (
                <Row
                  id={word.id}
                  key={word.id}
                  english={word.english}
                  transcription={word.transcription}
                  russian={word.russian}
                  tags={word.tags}
                ></Row>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  })
);

export default Table;
