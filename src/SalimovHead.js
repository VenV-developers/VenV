import { useEffect } from 'react';
import Head from "next/head";

const SalimovHead = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === 'l' || event.key === 'L')) {
        event.preventDefault();
        window.open('https://www.linkedin.com/in/the-cipher-vivek/', '_blank');
      }else if (event.key === 'h') {
        window.location.href = '/#home'; 
      } else if (event.key === 'c') {
        window.location.href = '/#contact'; 
      } else if (event.key === 'a') {
        window.location.href = '/#my-photo'; 
      } else if (event.key === 'p') {
        window.location.href = '/#portfolio';
      } else if (event.key === 'b') {
        window.location.href = '/#blog';
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Head>
      <title>VenV</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Template Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Template CSS Files */}
      <link rel="stylesheet" href="css/devicon.min.css" />
      <link rel="stylesheet" href="css/all.min.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="css/animate.min.css" />
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      {/* CSS Skin File */}
      {/* <link rel="stylesheet" href="css/skins/yellow.css" /> */}
      {/* Live Style Switcher - demo only */}
      <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />

    </Head>
  );
};
export default SalimovHead;
