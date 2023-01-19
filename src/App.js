import React from 'react';

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

import './App.css';

export default function App() {
  return (
    <section className="main">
      <Header />
      <Main />
    </section>
  );
}
