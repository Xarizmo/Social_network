import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

// склеиваем reducers в одно целое
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

// создаём store при помощи встроенной в Redux функции, в которую передаем объект с редьюсерами
let store = createStore(reducers);

export default store;