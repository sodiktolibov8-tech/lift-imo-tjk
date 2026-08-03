import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import CalculatorSection from './components/sections/CalculatorSection';
import ContactsSection from './components/sections/ContactsSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CalculatorSection />
        <ContactsSection />
      </main>
      <footer className="py-6 text-center text-xs text-slate-600 border-t border-slate-900">
        © {new Date().getFullYear()} ООО «ИМО». Все права защищены.
      </footer>
    </div>
  );
}

export default App;