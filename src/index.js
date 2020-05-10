import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           dispatch={store.dispatch.bind(store)}
           store={store}
      />
    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
