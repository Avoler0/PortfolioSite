import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import GlobalStyle from "./Commons/globaStyle";
import reportWebVitals from './reportWebVitals';

// const client = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
          
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
