import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Herosection from './Herosection';
import Aboutsection from './Aboutsection';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Footer from './Footer';
import RegisterPage from './RegisterPage';

function App() {
  return (
   <>
   <Herosection />
   <Aboutsection />
   <Section3 />
   <Section4 />
   <Section5 />
   <Section6 />
   <Section7 />
   <Section8 />
   <Footer />
   </>
  );
}

export default App;
