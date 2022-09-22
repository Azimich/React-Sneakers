import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between">
        <div className="headerLeft">

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
