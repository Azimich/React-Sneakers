import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин кросовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className='mr-30 d-flex align-center'>
            <img width={18} height={18} src="/img/cart.svg" />  
            <span>1205 руб</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
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
