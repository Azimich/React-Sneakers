import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft"></div>
        <img />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин кросовок</p>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>1205 руб</span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
    </div>
  );
}

export default App;
