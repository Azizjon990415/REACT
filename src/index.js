import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import MyComponent from "./MyComponent";
import AsadbekComponent from "./AsadbekComponent";
import Counter from "./Counter";
import FindBigger from "./FindBigger";
import MathematicalPow from "./MathematicalPow";
import App from "./App";
import AxiosExample from "./AxiosExample";
import BookComponent from "./BookComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  <AsadbekComponent/>*/}
    {/*<MyComponent/>*/}
    {/*  <App/>*/}
    {/*  <Counter/>*/}
    {/*  <MathematicalPow/>*/}
    <BookComponent/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
