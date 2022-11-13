import React from 'react'
import { useLocation } from 'react-router-dom';
import { InputForm } from '../../style/StyledComponent'

const PhoneticsForm = (props) => {
    const {firstWord, secondWord, handlePhonetics} = props;
    const location = useLocation()
    console.log('location :', location)
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handlePhonetics} /> 
    </>
  )
}

export default PhoneticsForm