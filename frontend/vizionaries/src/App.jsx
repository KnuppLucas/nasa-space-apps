import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchInput from './components/InputSearchFied'
import InteractiveGlobe from './components/PrincipalContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-field'> 
        {/* <SearchInput /> */}
        <InteractiveGlobe />
      </div>
    </>
  )
}

export default App
