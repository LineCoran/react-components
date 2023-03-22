import { Route, Routes, HashRouter } from 'react-router-dom';
import About from './pages/About/About';
import Main from './pages/Main/Main';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Form from './pages/Forms/Form';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/form" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
