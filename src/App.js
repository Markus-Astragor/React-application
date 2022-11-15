
import './App.css';
import Navigation from './components/sidebar/index';
import Main_page from './components/cards/index2';
import About from './components/about';
import Contact from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 const App = function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Navigation/>
   
   <Routes>
   <Route element={<Main_page/>} path='/'/>
   <Route element={<About/>} path='/about'/>
   <Route element={<Contact/>} path='/contact'/>
   </Routes>
    
    </div>
     </BrowserRouter>
  );
}


export default App;
