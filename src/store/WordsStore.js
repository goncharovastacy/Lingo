import { makeAutoObservable, runInAction } from "mobx";

export default class WordsStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.getWords();
    this.addNewWord();
    this.editWord();
    this.deleteWord();
  }

  apiRequest = async (requestCallback) => {
    this.loading = true;
    try {
      const result = await requestCallback();
      runInAction(() => {
        this.loading = false;
      });
      return result;
    } catch (err) {
      runInAction(() => {
        this.error = err.message || "Произошла ошибка";
        this.loading = false;
      });
      throw err;
    }
  };

  getWords = () => {
    this.apiRequest(async () => {
      const res = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const data = await res.json();
      runInAction(() => {
        this.words = data;
      });
    });
  };

  addNewWord = async (newWord) => {
    this.apiRequest(async () => {
      await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      await this.getWords();
    });
  };

  editWord = async (wordToChange) => {
    this.apiRequest(async () => {
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
      await this.getWords();
    });
  };

  deleteWord = async (id) => {
    this.apiRequest(async () => {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: "POST",
      });
      await this.getWords();
    });
  };
}
