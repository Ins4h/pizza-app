import React from "react";
import ReactDOM from "react-dom";
import './styles/global.scss';
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/context/cart-context";
import MainView from "./views/MainView";

// const Routes = () => <StateProvider></StateProvider>;

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainView />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
