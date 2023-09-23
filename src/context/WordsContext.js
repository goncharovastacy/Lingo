import React from "react";
import { useEffect, useState } from "react";

const WordsContext = React.createContext();

function WordsContextProvider({ children }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const data = await res.json();
      setWords(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const addNewWord = async (newWord) => {
    setLoading(true);
    try {
      await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        body: JSON.stringify(newWord),
      });
      await getWords();
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const editWord = async (wordToChange) => {
    setLoading(true);
    try {
      await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${wordToChange.id}/update`,
        {
          method: "POST",
          body: JSON.stringify(wordToChange),
        }
      );
      await getWords();
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const deleteWord = async (id) => {
    setLoading(true);
    try {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: "POST",
      });
      await getWords();
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <WordsContext.Provider
      value={{ words, loading, error, addNewWord, editWord, deleteWord }}
    >
      {children}
    </WordsContext.Provider>
  );
}

export { WordsContextProvider, WordsContext };
