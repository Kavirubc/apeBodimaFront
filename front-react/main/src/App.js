import React from 'react';
import ResponsiveAppBar from './navBar';
import ColorInversionFooter from './footBar';
import FreeSoloCreateOption from './searchMain';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='appBar'>
        <ResponsiveAppBar />
      </div>
      <body>
        <div className='body'>
          <img className='backImg' src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A beautiful "></img>
          <div className='searchBar'>
            <FreeSoloCreateOption />
          </div>
        </div>
      </body>
      <div className='footBar'>
        <ColorInversionFooter />
      </div>
    </div>
  );
}

export default App;
