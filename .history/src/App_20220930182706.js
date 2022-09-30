import React from 'react';
import Card from './components/Card';
import Header from './components/Header';


function App() {
  return (
    <div className="wrapper">
      <div style={{display: 'none'}} className='overlay'>
        <div className='drawer'>
          <h2 className='mb-30 d-flex justify-between'>
            Корзина
            <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'/>  
          </h2>
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
            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImg'
                style={{backgroundImage: 'url(/img/2.jpg)'}}></div> 
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
            <button className='greenButton'>
              Оформить заказ
              <img src='/img/arrow.svg' alt='arrow'/>
            </button>
          </div>
        </div>
      </div>
      <Header/>
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1 className=''>Все кроссовки</h1>
          <div className='search__block'>
            <img src='/img/search.svg' alt='search'/>
            <input placeholder='Поиск...'/>
          </div>
        </div>  
        <div className='d-flex'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
