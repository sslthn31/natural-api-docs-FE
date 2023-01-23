import React from 'react'
import { InputForm } from '../../style/StyledComponent'

const PhoneticsForm = (props) => {
    const {firstWord, secondWord, handlePhonetics} = props;
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handlePhonetics} /> 
    </>
  )
}

export default PhoneticsForm