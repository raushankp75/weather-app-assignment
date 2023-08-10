import React, { useState } from 'react'
import './InputField.css'

import { getWeather } from '../../services/api'
import { useNavigate } from 'react-router-dom'


const InputField = ({ setResult }) => {

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [data, setData] = useState({ city: '', country: '' })

    const handleChange = (e) => {
        console.log(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const getWeatherDetails = async () => {
        let response = await getWeather(data.city, data.country)
        setResult(response);
        console.log(response)

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


    return (
        <div className='container'>
            <div className='heading'>
                <h1>Weather App</h1>
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