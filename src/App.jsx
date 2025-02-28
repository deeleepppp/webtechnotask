import React, { useRef } from 'react'
import Combination from './components/Combination'


const App = () => {
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const recipesRef = useRef(null);
  const contactRef = useRef(null);
  const featuresRef = useRef(null);
  return (
    <>
    <Combination menuRef={menuRef} featuresRef={featuresRef} aboutRef={aboutRef} contactRef={contactRef} recipesRef={recipesRef}/>
    </>
  )
}

export default App