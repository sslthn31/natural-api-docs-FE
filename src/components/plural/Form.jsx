import React from 'react'
import { InputForm } from '../../style/StyledComponent'


const PluralForm = (props) => {
  const {firstWord, handlePlural} = props;
  return (
    <>
    <InputForm firstRef={firstWord} handle={handlePlural} single="true"/>
    </>
  )
}

export default PluralForm