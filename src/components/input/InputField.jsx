import React from 'react'
import './InputField.css'

const InputField = () => {
    return (
        <div className='container'>
            <div className='box'>
                <h1>Weather App</h1>

                <form>
                    <input className='text_field' name='city' type="text" placeholder='Enter city name' />

                    <button className='btn'>Get Weather</button>

                    <div className='orSection'>
                        <hr />
                        <p>or</p>
                    </div>

                    <button className='btn'>Get Device Location</button>
                </form>
            </div>
        </div>
    )
}

export default InputField