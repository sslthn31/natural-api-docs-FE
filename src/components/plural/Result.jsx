import React from 'react'
import { Result } from '../../style/StyledComponent'

const PluralResult = (props) => {
  const {result} = props;
  const resultJson = JSON.stringify(result, null, 5)
  return <Result result={resultJson}/>
}

export default PluralResult