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

  const apiRequest = async (requestCallback) => {
    setLoading(true);
    try {
      const result = await requestCallback();
      setLoading(false);
      return result;
    } catch (err) {
      setError(err.message || "Произошла ошибка");
      setLoading(false);
      throw err;
    }
  };

  const getWords = () => {
    apiRequest(async () => {
      const res = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const data = await res.json();
      setWords(data);
    });
  };

  const addNewWord = async (newWord) => {
    apiRequest(async () => {
      await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      await getWords();
    });
  };

  const editWord = async (wordToChange) => {
    apiRequest(async () => {
      await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${wordToChange.id}/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(wordToChange),
        }
      );
      await getWords();
    });
  };

  const deleteWord = async (id) => {
    apiRequest(async () => {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: "POST",
      });
      await getWords();
    });
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
