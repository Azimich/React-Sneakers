import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';


function App() {
  return (
    <div className="wrapper">
      <Drawer />
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
