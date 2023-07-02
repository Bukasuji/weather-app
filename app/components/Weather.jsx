import React from 'react'
import Image from 'next/image'

const weather =({data}) => {
    console.log(data)
    return (
        <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white z-10'>
            <div className='relative flex justify-between pt-12'>
                <div className='flex flex-col items-center'>
                    <Image 
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        width ='100'
                        height ='100'
                        alt='/'
                    />
                    <p className='text-2x1'>{data.weather[0].main}</p>
                </div>
                <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
            </div>

            <div className='bg-black/50 relative px-8 pb-8 rounded-md'>
                <p className='text-9x1 text-center mt-3'>Weather for {data.name} </p>
                <div className= 'flex justify-between text-center mt-5'>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Feels like</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                        <p className='text-xl'>Wind</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default weather