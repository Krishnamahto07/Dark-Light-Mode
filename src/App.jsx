import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contextAndComponenets/theme'
import ThemeBtn from './contextAndComponenets/ThemeBtn';
import Card from './contextAndComponenets/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () =>{
    setThemeMode("dark")
  }
  const lightMode = () =>{
    setThemeMode("light")
  }
  //actual change in theme
  useEffect(() =>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)  
  }, [themeMode]);


  return (
    <ThemeProvider value={{themeMode , darkMode , lightMode}}>
      <div className='dark:bg-gray-800 dark:border-gray-700 mt-[-2rem]'>
      <div className="flex flex-wrap min-h-screen items-center w-full ">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* {theme btn} */}
                <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
              {/* Card btn */}
              <Card />
              </div>
          </div>
      </div>

      </div>
    </ThemeProvider>
  )
}

export default App
