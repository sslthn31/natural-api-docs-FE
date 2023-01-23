import React from 'react'
import { InputForm } from '../../style/StyledComponent'


const JaroWinklerForm = (props) => {
    const {firstWord, secondWord, handleJaroWinkler} = props;    
  return (
    <>
    <InputForm firstRef={firstWord} secondRef={secondWord} handle={handleJaroWinkler} /> 
    </>
  )
}

export default JaroWinklerForm