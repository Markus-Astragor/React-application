// https://preview.colorlib.com/#expert
import React from 'react';
import './App.css';
import Approach from './components/Approach/Approach';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Plan from './components/Plan/Plan';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Video from './components/Video/Video';
import Works from './components/Works/Works';



const App = function App() {
  return (

    <div className="App">
      <Header />
      <Intro />
      <Works />
      <Projects />
      <Approach />
      <Testimonials/>
      <Services />
      <Plan />
      <Video />
      <Contact />
      <Footer />
    </div>

  );
}


export default App;
