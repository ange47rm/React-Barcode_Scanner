import React from 'react';
import BarcodeScannerContainer from './containers/BarcodeScannerContainer';
import HeaderComponent from './components/HeaderComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BarcodeScannerContainer/>
    </div>
  );
}

export default App;
