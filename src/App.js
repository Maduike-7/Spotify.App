import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './Components/sidebar'
import Login from './Components/login';
import Main from './Components/main';
import SpotifyMusicBox from './Components/SpotifyMusicBox'
// import SignUp from './Components/signin';

function App() {
  return (
    
      <div className="App">
         <Sidebar />
         <Main />
         <Login />
         <SpotifyMusicBox />
      </div>
  );


  }

export default App;