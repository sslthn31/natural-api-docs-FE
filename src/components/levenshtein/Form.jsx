import React from 'react'
import { InputForm } from '../../style/StyledComponent'


const LevenshteinForm = (props) => {
    const {firstWord, secondWord, handleLevenshtein} = props;
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handleLevenshtein} /> 
    </>
  )
}

export default LevenshteinForm