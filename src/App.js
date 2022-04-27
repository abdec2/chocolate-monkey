import './App.css';

import Preloader from './components/Preloader';
import HeaderComponent from './components/HeaderComponent';
import ResponsiveMenu from './components/ResponsiveMenu';
import Hero from './components/Hero';
import FooterComponent from './components/FooterComponent';

import { GlobalProvider } from "./context/GlobalContext"
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Terms from './components/Terms';

function App() {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          <Preloader />
          <div className='main'>
            <HeaderComponent error={error} errorMsg={errorMsg} setError={setError} setErrorMsg={setErrorMsg} />
            <Hero />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/terms' element={<Terms />} />
            </Routes>
            <FooterComponent />
          </div>
          <ResponsiveMenu />
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
