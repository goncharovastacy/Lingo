import { useContext } from "react";
import { WordsContext } from "../../context/WordsContext";

function Error() {
  const { error } = useContext(WordsContext);
  return (
    <div className="container">
      <h2>Что-то пошло не так</h2>
      <p>Ошибка: {error}</p>
    </div>
  );
}

export default Error;
