import React from "react";
import ReactDOM from "react-dom";
// import MainView from "./views/MainView";
import './styles/global.scss';
import { BrowserRouter, Route } from "react-router-dom";
import CartView from "./views/CartView";
import { StateProvider } from "./components/context/cart-context";
import MainView from "./views/MainView";
import App from "./App";

const Routes = () => <StateProvider></StateProvider>;

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <MainView />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
