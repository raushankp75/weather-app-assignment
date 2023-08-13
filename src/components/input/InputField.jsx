import React, { useEffect, useState } from 'react'
import './InputField.css'

import { getWeather } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const InputField = ({ setResult }) => {

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [data, setData] = useState({ city: '', country: '' })

    // changing input value
    const handleChange = (e) => {
        // console.log(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })

    }


    // here get weather details
    const getWeatherDetails = async (city) => {
        let response = await getWeather(city)
        setResult(response);
        // console.log(response)

        if (response.main) {
            navigate('/weather');
        } else {
            navigate('/')
        }

        if (response.status == 404) {
            if (response.status == 404) {
                setError("Invalid city name")
            } else {
                setError('');
            }
        } else if (response.status == 400) {
            if (response.status == 400) {
                setError("Enter city name to get weather report")
            } else {
                setError('');
            }
        }

    }



    // for getting current location 
    const API_KEY = '6f1c9ee91b22f5f1e5f8ccaecf1f8e81';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';



    const getCurrentLocationWeather = async () => {


        try {



            const savePositionToState = async (position) => {
                try {
                    const response = await axios.get(`${API_URL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`);
                    // console.log(response.data)

                    if (response.data.name !== "Globe") {
                        // setLocation(response.data)
                        setData({ ...data, city: response.data.name })
                        getWeatherDetails(response.data.name)
                    }
                } catch (error) {
                    console.log(error)
                }



            }


            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(savePositionToState, (error) => {
                    console.log("Error Getting Current Location", error)
                });
            }

        } catch (error) {
            console.log('Error while calling api', error.message);
            console.log(error.response)

        }
    }







    return (
        <div className='container'>
            <div className='heading'>
                <h1 style={{padding:'4px 0'}}>Weather App</h1>
            </div>
            <hr />

            <div className='box'>
                {error && <div className="error">
                    <p>{error}</p>
                </div>}

                <input
                    className='text_field'
                    name='city'
                    type="text"
                    placeholder='Enter city name'
                    onChange={(e) => handleChange(e)}
                    // value={location.name?.length < 20 ? location?.name : ""}
                    value={data.city}
                    onKeyUp={(e) => {
                        if (e.key == "Enter") {
                            getWeatherDetails(data.city)
                        }
                    }}
                />

                {/* <button
                    type='submit'
                    className='btn'
                    onClick={() => getWeatherDetails()}
                >
                    Get Weather
                </button> */}

                <div className='orSection'>
                    <hr />
                    <p>or</p>
                </div>

                {/* {location &&
                    <div>
                        <p>{location.name}. {location.sys.country}</p>
                    </div>
                } */}


                <button type='submit' onClick={() => { getCurrentLocationWeather() }} className='btn'>Get Device Location</button>
            </div>
        </div >
    )
}

export default InputField