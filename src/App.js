import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from './Components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="app_wrapper">
      <HeaderContainer/>
      <Nav/>
      <div className="app_wrapper_content">
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  )
};

export default App;
