import './App.css'
import { Routes, Route } from 'react-router-dom'
import InputField from './components/input/InputField'
import WeatherReport from './components/weather/WeatherReport'
import Layout from './layout/Layout'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<InputField />} />
          <Route path='/weather' element={<WeatherReport />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
