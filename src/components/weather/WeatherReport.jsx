import React from 'react'
import './WeatherReport.css'
import WeatherImage from '../../assets/weatherimage.png'

// react icons
import { WiHumidity } from 'react-icons/wi'
import { GiSunrise } from 'react-icons/gi'
import { GiSunset } from 'react-icons/gi'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import { ImLocation } from 'react-icons/im'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsFillCloudsFill } from 'react-icons/bs'
import { WiWindy } from 'react-icons/wi'
import { useNavigate } from 'react-router-dom'



const WeatherReport = () => {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='heading'>
                <div className='goback' onClick={() => navigate(-1)}><BsArrowLeftShort size={30} /></div>
                <h1>Weather App</h1>
            </div>
            <hr />

            <div className='weather_report'>
                <img src={WeatherImage} alt="" />

                <div className='temperature'>
                    <h2 className=''>13</h2>
                    <h2>°C</h2>
                </div>

                <p className='condition'>broken cloud</p>

                <p className='location'><ImLocation />Karnatka, Nepal</p>


            </div>


            <div className='temperature_details'>
                <div className='feels_like'>
                    <ImLocation size={30} />
                    <div className='feels_like_detail'>
                        <div className='feels_like_detail_column'>
                            <h3 className=''>13</h3>
                            <h3>°C</h3>
                        </div>

                        <p>Feels like</p>
                    </div>
                </div>
                <div className='humidity'>
                    <ImLocation size={30} />
                    <div className='humidity_detail'>
                        <div className='humidity_detail_column'>
                            <h3 className=''>84</h3>
                            <h3>%</h3>
                        </div>

                        <p>Humidity</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WeatherReport