import './App.css';

import Preloader from './components/Preloader';
import HeaderComponent from './components/HeaderComponent';
import ResponsiveMenu from './components/ResponsiveMenu';
import Hero from './components/Hero';
import Team from './components/Team';
import Story from './components/Story';
import Mission from './components/Mission';
import Roadmap from './components/Roadmap';
import FooterComponent from './components/FooterComponent';
import Mint from './components/Mint';

import { GlobalProvider } from "./context/GlobalContext"
import { useState } from 'react';

function App() {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  return (
    <GlobalProvider>
      <div className="App">
        <Preloader />
        <div className='main'>
          <HeaderComponent error={error} errorMsg={errorMsg} setError={setError} setErrorMsg={setErrorMsg} />
          <Hero />
          <Story />
          {/* <Mission /> */}
          {/* <Team /> */}
          {/* <Roadmap /> */}
          {/* <Mint /> */}
          {/* <FooterComponent /> */}
        </div>
        <ResponsiveMenu />
      </div>
    </GlobalProvider>
  );
}

export default App;
