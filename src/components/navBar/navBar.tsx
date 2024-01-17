import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomeCompo from '../home/home';
import '../txt2img/txt2img.css';

interface NavBarProps {
  text: string;
}

const NavBar: React.FC<NavBarProps> = ({ text }) => {
  return (
    <div className="BarraSup">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Adicione outros links conforme necessário */}
        </ul>
      </nav>

      <Routes>
        <Route path="/txt2img" element={<HomeCompo text={text} />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>

      <p>navbar</p>
    </div>
  );
};

export default NavBar;
