import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft"></div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="40" height="40" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_1_218" transform="scale(0.00195312)"/>
        </pattern>
        </defs>
        </svg>
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
