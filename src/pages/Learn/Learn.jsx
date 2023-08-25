import Slider from "../../components/Slider/Slider";
import st from "../Learn/Learn.module.scss";
import words from "../../data/words.json";

function Learn() {
  return (
    <div className={st.learn}>
      <Slider wordsArr={words}></Slider>
    </div>
  );
}

export default Learn;
