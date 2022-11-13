import React from 'react'
import { InputForm } from '../../style/StyledComponent'

const TokenizerForm = (props) => {
  const {firstWord, handleTokenizer} = props;
  return (
    <>
    <InputForm firstRef={firstWord} handle={handleTokenizer} single="true"/>
    </>
  )
}

export default TokenizerForm