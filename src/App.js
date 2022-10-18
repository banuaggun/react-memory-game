import {useState} from 'react'
import MainArea from './components/MainArea'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }
  return (
    <>
      <Navbar theme={theme} switchTheme={handleThemeChange} />
      <MainArea difficulty="4" theme={theme} />
    </>
  )
}

export default App