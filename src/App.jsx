import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        Welcome to WavePortal 👋
        </div>

        <div className="bio">
        <p>This is a decentralized guestbook which lives on the Ethereum blockchain.</p>
        <p>Connect with MetaMask and wave at me.</p>
        </div>

        <button className="waveButton" onClick={wave}>
        Wave!
        </button>
      </div>
    </div>
  );
}
