import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Topics } from './pages/Topics/Topics'
import { Settings } from './pages/Settings/Settings'
import './App.scss'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/topics' element={<Topics/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  )
}

export default App
