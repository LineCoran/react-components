import './App.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
import About from './pages/About/About';
import Main from './pages/Main/Main';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
