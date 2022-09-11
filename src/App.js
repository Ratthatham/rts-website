import './App.css';
import AboutSection from './component/about-section/about-section';
import ContactNav from './component/contact-section/contact-nav';
import HomeSection from './component/home-section/home-section';

function App() {
  return (
    <div className="app">
      <HomeSection/>
      <AboutSection/>
      <ContactNav/>
    </div>
  );
}

export default App;
