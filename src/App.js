import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Popular products</h1>
      </header>
      <main className="content" id="content">
        <ul className="product-list">

          <li className="product">
            <img className="product-photo" src={logo} alt="Product"/>
            <div className="product-details">
              <div className="vote-container">
                <img src={logo} alt="Arrow" className="up-vote"/>
                <span className="votes">55</span>
              </div>
              <div className="product-info">
                <h2 className="product-name">Haught or Naught</h2>
                <p className="product-desc">
                  High-minded or absent-minded? You decide.
                </p>
              </div>
              <div className="submiter-container">
                <small>Submitted by: </small>
                <img src={logo} alt="Avatar" className="avatar"/>
              </div>
            </div>
          </li>

          <li className="product">
            <img className="product-photo" src={logo} alt="Product"/>
            <div className="product-details">
              <div className="vote-container">
                <img src={logo} alt="Arrow" className="up-vote"/>
                <span className="votes">55</span>
              </div>
              <div className="product-info">
                <h2 className="product-name">Haught or Naught</h2>
                <p className="product-desc">
                  High-minded or absent-minded? You decide.
                </p>
              </div>
              <div className="submiter-container">
                <small>Submitted by: </small>
                <img src={logo} alt="Avatar" className="avatar"/>
              </div>
            </div>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
