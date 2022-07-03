import Home from './component/Home';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <div className=''>
          <Router>
            <Home/>
            <Routes>

            </Routes>
            <Footer/>
          </Router>
        </div>

      </div>

    </>
  );
}

export default App;
