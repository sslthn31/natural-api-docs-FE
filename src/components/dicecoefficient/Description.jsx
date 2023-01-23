import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent';

const DiceCoefficientDescription = () => {
  return (
    <>
      <Title>Dice-Coefficient</Title>
    <Description>
      Is measures how similar a set and another set are. It can be used to measure how similar two strings are in terms of the number of common bigrams (a bigram is a pair of adjacent letters in the string). Below we give implementations of Dice's coefficient of two strings in different programming languages. <a href="https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Dice%27s_coefficient" target="_blank" rel="noopener noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/dicecoeffecient/<b>firstword</b>&<b>secondword</b></Url>
    </>
  )
}

export default DiceCoefficientDescription;