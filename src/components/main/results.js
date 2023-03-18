import React from 'react'
import axios from 'axios'
import './results.css'
import './main.css'
import wizkid from './wizkid.webp'



const CLIENT_ID = '3b6f5190c4d240628247ebaf818038cf'
const CLIENT_SECRET = '3c489f19ce5d4162ba30695550340ae7'
const token = window.localStorage.getItem("token")

// const {data} = await axios.get("https://api.spotify.com/v1/search", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       params: {
//         q: searchInput,
//         type: "track"
//       }
//     })



export default function Results() {

  return (
    <div>
      <div className='results-container'>

          <div className='result'>
          <div>
          <img className='pics' src={wizkid} alt='' />
        </div>
        <div className='artist-details'>
        <p className='title'>Bad To Me</p>
        <p className='artist-sel'>Wizkid</p>
        </div>
        </div>
        <div className='result'>
          <div>
          <img className='pics' src={wizkid} alt='' />
        </div>
        <div className='artist-details'>
        <p className='title'>Bad To Me</p>
        <p className='artist-sel'>Wizkid</p>
        </div>
        </div>
        <div className='result'>
          <div>
          <img className='pics' src={wizkid} alt='' />
        </div>
        <div className='artist-details'>
        <p className='title'>Bad To Me</p>
        <p className='artist-sel'>Wizkid</p>
        </div>
        </div>
         <div className='result'>
          <div>
          <img className='pics' src={wizkid} alt='' />
        </div>
        <div className='artist-details'>
        <p className='title'>Bad To Me</p>
        <p className='artist-sel'>Wizkid</p>
        </div>
        </div>
      </div>
    </div>
  )
}
