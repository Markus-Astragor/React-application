

import './App.css';
import NewHeadline from './components/New_Headline';
import Footer from './components/Footer/Footer';
import MyHeadline from './index2';
import Header from './components/Header/Header';
import Mycarousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mycarousel/>
      <MyHeadline/>
      <NewHeadline/>
      <Footer/>
    </div>
  );
}


export default App;
