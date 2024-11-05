import React from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactForm />
    </div>
  );
}

export default App;