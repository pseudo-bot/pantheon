import Navbar from '../components/Navbar';

import '../styles/navbar.css';
import '../styles/globals.css';
import 'animate.css'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <style>
          @import
          url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
          @import url(https://fonts.googleapis.com/css?family=Staatliches:regular);
        </style>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
