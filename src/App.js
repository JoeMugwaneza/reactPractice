import React from 'react';
import './App.css';
// import {Main, Count} from './components/Main';
import Navbar from './components/Navbar'
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      {/* FOR MY EXISTING REACT PRACTICE */}
      <Navbar />
      {/* <Count /> */}
      <main className='container'>
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
