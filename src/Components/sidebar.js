import React from 'react';
// import { faArrowLeft } from "react-icons/fa";

// importing logos
// import logo from "../logo.png";

export default function Sidebar(){
    return(

        <div class="sidebar">
            <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black-768x230.png" width="150"  alt="logo" />
            <a class="active" href="/"><i class="fa fa-fw fa-home"></i>Home</a>
            <a href="#news"><i class="fa fa-fw fa-search"></i>Search</a>
            <a href="#contact">Your Library</a>
            <p>branch</p>
            <br />
            <a href="#about"><i class="fa fa-fw fa-plus-square-o" aria-hidden="true"></i>Create Playlist</a>
            <a href="#"><i class="fa fa-fw fa-gratipay" aria-hidden="true"></i>
Liked Songs</a>
<a href="#news"><i class="fa fa-fw fa-search"></i>Search</a>
            <a href="#contact">Your Library</a>
            <a href="#news"><i class="fa fa-fw fa-search"></i>Search</a>
            <a href="#contact">Your Library</a>
            <hr />
            <a href="#">My Playlist #1</a>
            <div class="auto">
                <a href="#"><i class="fa fa-fw fa-download" aria-hidden="true"></i>Install App</a>
            </div>
        </div>
    )
} 