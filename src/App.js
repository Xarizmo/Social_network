import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  debugger;
  return (
    <div className="app_wrapper">
      <Header/>
      <Nav/>
      <div className="app_wrapper_content">
        <Route path='/profile'
               render={() => <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}/>}/>
               
        <Route path='/dialogs'
               render={() => <Dialogs store={props.store}/>}/>
               
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  )
};

export default App;
