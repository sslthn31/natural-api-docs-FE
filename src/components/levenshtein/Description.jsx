import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent';

const LevenshteinDescription = () => {
  return (
    <>
      <Title>Levenshtein</Title>
    <Description>
    Is a measure of similarity between two strings. It is defined as the minimum number of changes required to convert string a into string b (this is done by inserting, deleting or replacing a character in string a). The smaller the Levenshtein distance, the more similar the strings are. <a href="https://www.educative.io/answers/the-levenshtein-distance-algorithm" target="_blank" rel="noopener noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/levenshtein/<b>firstword</b>&<b>secondword</b></Url>
    </>
  )
}

export default LevenshteinDescription;