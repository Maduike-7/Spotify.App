import React from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar'
import Player from './player'

const date = new Date()
const currentTime = date.getHours();

let greetings;

if (currentTime < 12){
    greetings = "Good morning";
} else if (currentTime < 18){
    greetings = "Good afternoon";
} else {
    greetings = "Good evening";
}



export default function Main(){
    return(
        <div >
            <Sidebar />
            <Topbar />
            
            <div className="content">
            <h1>{greetings}</h1>
            <h5>Recently Played</h5>
            </div>
            <Player />
        </div>
    )
}