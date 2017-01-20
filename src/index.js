import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import CartFrame from './components/CartFrame';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {goodsListModel} from './models/model';
ReactDOM.render(
  <CartFrame goodsList={goodsListModel}/>,
  document.getElementById('root')
);
