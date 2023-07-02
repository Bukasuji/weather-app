"use client";
import {BsSearch} from "react-icons/bs";
import Image from "next/image";
import axios from 'axios';
import {useState} from 'react';
import Weather from "./components/Weather"
import Spinner from './components/Spinner'

export default function Home() {
  const[city, setCity] = useState('')
  const[weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
 
  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    
    axios.get(url).then((response)=>{
      setWeather(response.data)
    })
    .catch((error)=> {
      console.error(error)
    })
    .finally(() =>{
      setCity('')
      setLoading(false)
    })
    
  }
 
  const handleInputChange=(e) => {
    setCity(e.target.value)
  }

 
    return (
      <div>
        {loading ? ( 
           <Spinner/>
        ):(
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]">
                <Image 
                  src='https://images.unsplash.com/photo-1528645046579-596f02cf16eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
                  fill='fill'
                  alt="background image"
                  className="object-cover"
                />
                <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
                  <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-grey-300 text-white rounded-2xl">
                    <div>
                          <input 
                          value={city}
                          onChange={handleInputChange}
                          className= "bg-transparent border-none text-white focus:outline-none placeholder-white text-2xl"
                          placeholder="Search city" 
                          type='text'
                          />
                    </div>
                    <button type="submit">
                      <BsSearch size={20}/>
                    </button>
                  </form>

                  
                </div>
                {weather.main && <Weather data={weather} />}
            </div>
        )}
          
      </div>
    )
  
}
