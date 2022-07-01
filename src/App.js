import './App.css';
import React from 'react';
import Footer from './Componenets/Footer';
import NavigationBar from './Componenets/NavigationBar';
import CarouselSection from './Componenets/CarouselSection';
import About from './Componenets/About';
import Resume from './Componenets/Resume';
import Skills from './Componenets/Skills';
import Project from './Componenets/Projects';


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <CarouselSection></CarouselSection>
      <About></About>
      <Resume></Resume>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
