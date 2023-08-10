import React, { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import InputField from './components/input/InputField'
import WeatherReport from './components/weather/WeatherReport'
import Layout from './layout/Layout'


function App() {

  const [result, setResult] = useState({});

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<InputField setResult={setResult} />} />
          <Route path='/weather' element={<WeatherReport result={result} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
