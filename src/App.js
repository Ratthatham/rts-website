import './App.css';
import AboutSection from './component/about-section/about-section';
import ContactNav from './component/contact-nav/contact-nav';
import ContactSection from './component/contact-section/contact-section';
import HomeSection from './component/home-section/home-section';

function App() {
  return (
    <div className="app">
      <HomeSection/>
      <AboutSection/>
      {/* <ContactNav/> */}
      <ContactSection/>
    </div>
  );
}

export default App;
