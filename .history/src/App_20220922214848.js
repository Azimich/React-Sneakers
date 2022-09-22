import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header className="d-flex ">
        <div className="headerLeft"></div>
        <img width={40} height={40} src="/img/logo.svg" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин кросовок</p>
        </div>
        <ul className="headerRight">
          <li>
            <img width={20} height={20} src="/img/cart.svg" />  
            <span>1205 руб</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" />
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
