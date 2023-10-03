import { makeAutoObservable } from "mobx";

export default class WordsStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  apiRequest = async (requestCallback) => {
    this.loading = true;
    try {
      const result = await requestCallback();
      this.loading = false;
      return result;
    } catch (err) {
      this.error = err.message || "Произошла ошибка";
      this.loading = false;
      throw err;
    }
  };

  getWords = () => {
    this.apiRequest(async () => {
      const res = await fetch("/api/words");
      const data = await res.json();
      this.words = data;
    });
  };

  addNewWord = async (newWord) => {
    this.apiRequest(async () => {
      await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      this.getWords();
    });
  };

  editWord = async (wordToChange) => {
    this.apiRequest(async () => {
      await fetch(`/api/words/${wordToChange.id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wordToChange),
      });
      this.getWords();
    });
  };

  deleteWord = async (id) => {
    this.apiRequest(async () => {
      await fetch(`/api/words/${id}/delete`, {
        method: "POST",
      });
      this.getWords();
    });
  };
}
