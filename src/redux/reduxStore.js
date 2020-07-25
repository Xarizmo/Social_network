import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer';

// склеиваем reducers в одно целое
let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

// создаём store при помощи встроенной в Redux функции, в которую передаем объект с редьюсерами
let store = createStore(rootReducer);
window.store = store;

export default store;