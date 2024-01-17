import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Txt2imgComp from '../components/txt2img/txt2img';
import Home from '../components/home/home';


function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <Home text={''} />
      <div className="Hello">
        <Link to="/txt2img">
          <button type="button">
            text2img
          </button>
        </Link>
        <Link to="/img2img">
          <button type="button">
            img2img
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="CaixaIntro">
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/txt2img/*" element={<Txt2imgComp text={'txt2img'} />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
    </div>
  );
}
