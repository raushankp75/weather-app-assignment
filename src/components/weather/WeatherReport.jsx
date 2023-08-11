import React from 'react'
import './WeatherReport.css'

import { useNavigate } from 'react-router-dom'

// react icons
import { ImLocation } from 'react-icons/im'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsThermometerSun } from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'



const WeatherReport = ({ result }) => {

    // console.log(result)
    const navigate = useNavigate();

    if (Object.keys(result).length === 0) {

        return (
            <>
                <div className='goback' onClick={() => navigate(-1)}><BsArrowLeftShort size={50} color='#fff' /></div>
                <div className='error'>Please Select A Location To Get Weather Report</div>
            </>
        )
    }



    let imagePath = '';
    if (result.weather[0].main == "Clouds") {
        imagePath = "https://drive.google.com/uc?export=view&id=16uPIDWnScPXSVMUyF1REfSxPD8Al9OAs"
    } else if (result.weather[0].main == "Clear") {
        imagePath = "https://drive.google.com/uc?export=view&id=1OC25lQ8hPEm880O9Q-RTkKR2SkGLSlc1"
    } else if (result.weather[0].main == "Rain") {
        imagePath = "https://drive.google.com/uc?export=view&id=13Ha8ojfodwZW2dhooQnkJXkxnZbOusfi"
    } else if (result.weather[0].main == "Drizzle") {
        imagePath = "https://drive.google.com/uc?export=view&id=1DwhlvvfoXiZqKZLaAt7j15egJNQZdnyE"
    } else if (result.weather[0].main == "Mist") {
        imagePath = "https://drive.google.com/uc?export=view&id=1Ff1zVHvNPMublFCdjk3vjGDvpCPPK0z6"
    } else {
        imagePath = "https://drive.google.com/uc?export=view&id=16uPIDWnScPXSVMUyF1REfSxPD8Al9OAs"
    }


    return (

        <div className='container'>
            <div className='heading'>
                <div className='goback' onClick={() => navigate(-1)}><BsArrowLeftShort size={30} /></div>
                <h1>Weather App</h1>
            </div>
            <hr />

            {result && Object.keys(result).length > 0 ?
                (
                    <>
                        <div className='weather_report'>
                            {/* <img src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} alt="" /> */}
                            <img src={imagePath} alt="" />

                            <div className='temperature'>
                                <h2 className=''>{Math.round(result.main.temp)}</h2>
                                <h2>°C</h2>
                            </div>

                            <p className='condition'>{result.weather[0].main}</p>

                            <p className='location'><ImLocation />{result.name}, {result.sys.country}</p>


                        </div>


                        <div className='temperature_details'>
                            <div className='feels_like'>
                                <BsThermometerSun size={30} color='#63BCED' />
                                <div className='feels_like_detail'>
                                    <div className='feels_like_detail_column'>
                                        <h3 className=''>{result.main.feels_like}</h3>
                                        <h3>°C</h3>
                                    </div>

                                    <p>Feels like</p>
                                </div>
                            </div>
                            <div className='humidity'>
                                <WiHumidity size={40} color='#63BCED' />
                                <div className='humidity_detail'>
                                    <div className='humidity_detail_column'>
                                        <h3 className=''>{result.main.humidity}</h3>
                                        <h3>%</h3>
                                    </div>

                                    <p>Humidity</p>
                                </div>

                            </div>
                        </div>
                    </>
                )

                :
                (
                    <div className=''>
                        <p className=''>Write City name to find Weather report</p>
                    </div>
                )
            }

        </div>


    )
}

export default WeatherReport