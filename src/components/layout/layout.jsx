import { Outlet } from 'react-router-dom';
import Header from '../parts/Header';
import Footer from '../parts/Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Шапка */}
      <Header />

      {/* Контент страниц */}
      <main className="flex-1">
        <Outlet /> 
      </main>

      {/* Подвал */}
      <Footer />
    </div>
  );
};

export default Layout;