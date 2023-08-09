import React from 'react'

const InputField = () => {
    return (
        <>
            <form action="">
                <input className='text_field' name='city' type="text" placeholder='City' />

                <button className='btn'>Get Weather</button>
            </form>
        </>
    )
}

export default InputField