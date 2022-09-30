import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt='img'/>
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин кросовок</p>
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
        <div className=''>
          <h1 className='mb-40'>Все кроссовки</h1>
        </div>  
        <div className='search__block'>
          <img src='/img/search.svg' alt='Search'/>
          
        </div>
        
        <div className='d-flex'>
          <div className='card'>
            <img width={133} height={133} src='/img/1.jpg' alt='sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='plus'/>
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={133} src='/img/2.jpg' alt='sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='plus'/>
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={133} src='/img/3.jpg' alt='sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='plus'/>
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={133} src='/img/4.jpg' alt='sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='plus'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
