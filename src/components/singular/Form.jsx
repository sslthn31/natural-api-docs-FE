import React from 'react'
import { InputForm } from '../../style/StyledComponent'

const SingularForm = (props) => {
  const {firstWord, handleSingular} = props;
  return (
    <>
    <InputForm firstRef={firstWord} handle={handleSingular} single="true"/>
    </>
  )
}

export default SingularForm