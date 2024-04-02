// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Loader from './Components/Loader.jsx';


const Home = lazy(() => import('./Pages/Home.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));
const Contack = lazy(() => import('./Pages/Contact.jsx'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<Loader></Loader>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contack />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
