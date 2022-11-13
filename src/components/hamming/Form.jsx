import React from 'react'
import { useLocation } from 'react-router-dom';
import { InputForm } from '../../style/StyledComponent'


const HammingForm = (props) => {
    const {firstWord, secondWord, handleHamming} = props;
    const location = useLocation()
    console.log('location :', location)
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handleHamming} /> 
    </>
  )
}

export default HammingForm