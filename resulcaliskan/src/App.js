import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './style.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="body">
      <Head />
      {isLoading ? <Preloader /> : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;