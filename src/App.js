import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./Pages/Home";
import Navbar from './Components/Navbar';
// import About from './Pages/About';
import Footer from './Components/Footer';
// import Blog from './Pages/Blog';
// import BlogPost from './Pages/BlogPost';
// import Store from './Pages/Store';
// import Contact from './Pages/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blog/:id' element={<BlogPost/>}/>
          <Route path='/products/' element={<Store/>} />
          <Route path='/contact/' element={<Contact/>} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
