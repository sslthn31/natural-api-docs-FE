import React from 'react'
import { useLocation } from 'react-router-dom';
import { InputForm } from '../../style/StyledComponent'


const DiceCoefficientForm = (props) => {
    const {firstWord, secondWord, handleDiceCoefficient} = props;
    const location = useLocation()
    console.log('location :', location)
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handleDiceCoefficient} /> 
    </>
  )
}

export default DiceCoefficientForm