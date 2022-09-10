import './App.css';
import AboutSection from './component/about-section/about-section';
import ContactSection from './component/contact-section/contact-section';
import HomeSection from './component/home-section/home-section';

function App() {
  return (
    <div className="app">
      <HomeSection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
