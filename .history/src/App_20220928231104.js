import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <div className='overlay'>
        <div className='drawer'>
          <h2 className='mb-30'>Корзина</h2>
          <div className='items'>
            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImg'
                style={{backgroundImage: 'url(/img/2.jpg)'}}></div> 
              <div className='mr-20'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'/>
            </div>
            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImg'
                style={{backgroundImage: 'url(/img/3.jpg)'}}></div> 
              <div className='mr-20'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'/>
            </div>
          </div>
          <div className='cartTotalBlock'>
            <ul>
              <li className='d-flex align-center mb-20'>
                <span>Итого</span>
                <div></div>
                <b>21 455 руб</b>
              </li>
              <li className='d-flex align-center'>
                <span>Налог 5%</span>
                <div></div>
                <b>1055 руб</b>
              </li>
            </ul>
            <button>
              Оформить заказ
              <img src='/img/' alt='arrow'/>
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt='logo'/>
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
        <div className='d-flex align-center justify-between mb-40'>
          <h1 className=''>Все кроссовки</h1>
          <div className='search__block'>
            <img src='/img/search.svg' alt='search'/>
            <input placeholder='Поиск...'/>
          </div>
        </div>  
        
        <div className='d-flex'>
          <div className='card'>
            <div className='favorite'>
              <img src='/img/heart-unliked.svg' alt='unliked'/>
            </div>
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
