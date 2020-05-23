import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

// склеиваем reducers в одно целое
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

// создаём store при помощи встроенной в Redux функции, в которую передаем объект с редьюсерами
let store = createStore(reducers);

export default store;