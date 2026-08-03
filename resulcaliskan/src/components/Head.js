// components/Head.js
import React from 'react';

const Head = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#f5f0eb" />
      <meta
        name="description"
        content="Resul Çalışkan — Software developer. Notes on software, tech, and building things."
      />
      <meta
        name="keywords"
        content="Resul Çalışkan, software developer, blog, React, frontend, backend, AI"
      />
      <meta name="author" content="Resul Çalışkan" />

      <meta property="og:title" content="Resul Çalışkan" />
      <meta property="og:description"
        content="Software developer. Notes on software, tech, and building things."
      />
      <meta property="og:url" content="https://resul-caliskan.github.io/" />
      <meta property="og:site_name" content="Resul Çalışkan" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Resul Çalışkan" />
      <meta name="twitter:description"
        content="Software developer. Notes on software, tech, and building things."
      />
      <title>Resul Çalışkan</title>
      <link rel="icon" type="image/x-icon" href="src/png/main-favicon.png" />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap"
      />
    </>
  );
};

export default Head;