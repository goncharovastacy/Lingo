import './style/App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Learn from './components/Learn/Learn';
import Table from './components/Table/Table';
import Error from './components/Error/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router><>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/vocabulary' element={<Table/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
    </></Router>
  );
}

export default App;