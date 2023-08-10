import React, { useState } from 'react'
import './InputField.css'

import { getWeather } from '../../services/api'
import { useNavigate } from 'react-router-dom'


const InputField = ({ setResult }) => {

    const navigate = useNavigate();

    const [data, setData] = useState({ city: '', country: '' })

    const handleChange = (e) => {
        console.log(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const getWeatherDetails = async () => {
        // e.preventDefault();
        let response = await getWeather(data.city, data.country)
        setResult(response);
        console.log(response)

        if (response) {
            navigate('/weather');
        }
    }


    return (
        <div className='container'>
            <div className='heading'>
                <h1>Weather App</h1>
            </div>
            <hr />

            <div className='box'>
                <input
                    className='text_field'
                    name='city'
                    type="text"
                    placeholder='Enter city name'
                    onChange={(e) => handleChange(e)}
                />

                <button
                    type='submit'
                    className='btn'
                    onClick={() => getWeatherDetails()}
                >
                    Get Weather
                </button>

                <div className='orSection'>
                    <hr />
                    <p>or</p>
                </div>

                <button className='btn'>Get Device Location</button>
            </div>
        </div >
    )
}

export default InputField