import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./Pages/Home";
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
