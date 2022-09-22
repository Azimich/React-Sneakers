import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt='img'/>
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин кросовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className='mr-30 d-flex align-center'>
            <img width={18} height={18} src="/img/cart.svg" alt='img'/>  
            <span>1205 руб</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt='img'/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>

        <div className='card'>
          <img width={133} height={133} src='/img/1.jpg' alt='sneakers'/>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className='d-flex justufy-between'>
            <div className='d-flex align-center'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
              <button>
                <img src='/img/plus.svg' width={22} height={22} alt='plus'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
