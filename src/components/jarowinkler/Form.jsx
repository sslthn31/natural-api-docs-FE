import React from 'react'
import { useLocation } from 'react-router-dom';
import { InputForm } from '../../style/StyledComponent'


const JaroWinklerForm = (props) => {
    const {firstWord, secondWord, handleJaroWinkler} = props;
    const location = useLocation()
    console.log('location :', location)
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handleJaroWinkler} /> 
    </>
  )
}

export default JaroWinklerForm