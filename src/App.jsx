import './App.css'
import { Routes, Route } from 'react-router-dom'
import InputField from './components/InputField'
import WeatherReport from './components/WeatherReport'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<InputField />} />
        <Route path='/weather' element={<WeatherReport />} />
      </Routes>
    </>
  )
}

export default App
