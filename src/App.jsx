import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout'; // <-- Добавили импорт!
import About from './components/parts/About';
import Home from './pages/Home';
import CATALOG_ITEMS from './components/parts/Сatalog';
import Dispatch from './components/parts/Dispatch';
import Projects from './components/parts/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="catalog" element={<CATALOG_ITEMS />} />
        <Route path="dispatch" element={<Dispatch />} />
        <Route path="projects" element={<Projects />} />

      </Route>
    </Routes>
  );
}

export default App;  