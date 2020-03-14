import React from 'react';
import './App.css';

import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app_wrapper">
      <Header/>
      <Nav/>
      <div className="app_wrapper_content">
        <Dialogs/>
      </div>
      {/*<Profile/>*/}
    </div>
  )
}

export default App;
