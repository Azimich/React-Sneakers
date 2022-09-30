import React from 'react'

function Header() {
  return (
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
  )
}

export default Header;