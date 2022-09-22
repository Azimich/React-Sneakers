import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft"></div>
        <img width={40} height={40} src="/img/logo.svg" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин кросовок</p>
        </div>
        <ul className="headerRight">
          <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9117 7.99735 16.5454 7.54548 16.5454C7.09361 16.5454 6.72729 16.9117 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9117 16.9973 16.5454 16.5455 16.5454C16.0936 16.5454 15.7273 16.9117 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <span>1205 руб</span>
          </li>
          <li>
          <svg width="25" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3432 26.0996C28.6985 24.5724 27.7628 23.1851 26.5883 22.0151C25.4175 20.8418 24.0304 19.9063 22.5039 19.2603C22.4902 19.2534 22.4765 19.25 22.4629 19.2432C24.5922 17.7051 25.9765 15.1997 25.9765 12.373C25.9765 7.69043 22.1826 3.89648 17.5 3.89648C12.8173 3.89648 9.0234 7.69043 9.0234 12.373C9.0234 15.1997 10.4077 17.7051 12.5371 19.2466C12.5234 19.2534 12.5097 19.2568 12.4961 19.2637C10.9648 19.9097 9.59078 20.8359 8.41158 22.0186C7.23823 23.1894 6.30271 24.5765 5.6567 26.103C5.02206 27.5975 4.67978 29.1999 4.6484 30.8232C4.64749 30.8597 4.65389 30.896 4.66722 30.93C4.68055 30.964 4.70055 30.9949 4.72603 31.021C4.75151 31.0471 4.78197 31.0679 4.81559 31.0821C4.84922 31.0962 4.88535 31.1035 4.92184 31.1035H6.97262C7.12301 31.1035 7.24264 30.9839 7.24606 30.8369C7.31442 28.1982 8.37399 25.7271 10.247 23.854C12.185 21.916 14.7588 20.8496 17.5 20.8496C20.2412 20.8496 22.8149 21.916 24.7529 23.854C26.6259 25.7271 27.6855 28.1982 27.7539 30.8369C27.7573 30.9873 27.8769 31.1035 28.0273 31.1035H30.0781C30.1146 31.1035 30.1507 31.0962 30.1843 31.0821C30.218 31.0679 30.2484 31.0471 30.2739 31.021C30.2994 30.9949 30.3194 30.964 30.3327 30.93C30.346 30.896 30.3524 30.8597 30.3515 30.8232C30.3173 29.1895 29.979 27.6001 29.3432 26.0996ZM17.5 18.252C15.9311 18.252 14.4546 17.6401 13.3437 16.5293C12.2329 15.4185 11.6211 13.9419 11.6211 12.373C11.6211 10.8042 12.2329 9.32764 13.3437 8.2168C14.4546 7.10596 15.9311 6.49414 17.5 6.49414C19.0688 6.49414 20.5454 7.10596 21.6562 8.2168C22.7671 9.32764 23.3789 10.8042 23.3789 12.373C23.3789 13.9419 22.7671 15.4185 21.6562 16.5293C20.5454 17.6401 19.0688 18.252 17.5 18.252Z" fill="#9B9B9B"/>
          </svg>
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
