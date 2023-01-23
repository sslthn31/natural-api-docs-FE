import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent';

const HammingDescription = () => {
  return (
    <>
      <Title>Hamming</Title>
    <Description>
    Is the between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed one string into the other. <a href="https://en.wikipedia.org/wiki/Hamming_distance" target="_blank" rel="noopener noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/hamming/<b>firstword</b>&<b>secondword</b></Url>
    </>
  )
}

export default HammingDescription;