import { Link } from "react-router-dom";
import st from "../Home/Home.module.scss";

function Home() {
  return (
    <div className="container">
      <h1>Учи английские слова и увеличивай свой словарный запас</h1>
      <button className={st.start}>
        <Link to="/learn">Начать</Link>
      </button>
    </div>
  );
}

export default Home;
