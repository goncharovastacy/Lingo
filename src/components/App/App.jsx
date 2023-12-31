import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error, Home, Learn, Table } from "../../pages/index";
import Header from "../Header/Header";
import "../../style/App.scss";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/vocabulary" element={<Table />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}
export default App;
