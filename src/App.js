import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './Pages/home/Home';
import About from './Pages/About/About';
import Mywork from './Pages/myWork/Mywork';
import Contact from './Pages/contact/Contact';
import Footer from './Pages/footer/Footer';
import { DataContextProvider } from './context/datacotext'



const App= ()=>{
  return (
    <DataContextProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        <Mywork />
        <Contact />
        <Footer />
      </div>
    </DataContextProvider>
  );
}

export default App;
