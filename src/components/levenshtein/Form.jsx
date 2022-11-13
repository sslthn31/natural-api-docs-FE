import React from 'react'
import { useLocation } from 'react-router-dom';
import { InputForm } from '../../style/StyledComponent'


const LevenshteinForm = (props) => {
    const {firstWord, secondWord, handleLevenshtein} = props;
    const location = useLocation()
    console.log('location :', location)
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handleLevenshtein} /> 
    </>
  )
}

export default LevenshteinForm