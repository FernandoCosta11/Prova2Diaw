import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Votacao from './pages/Votacao.jsx';
import Resultado from './pages/Resultado.jsx';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/votacao" element={<Votacao />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="*" element={<main className="home"><h1>Página em desenvolvimento</h1></main>} />
      </Routes>
    </BrowserRouter>
  );
}