import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Preloader süresi (örn: 2 saniye)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // temizlik
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
