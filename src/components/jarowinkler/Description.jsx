import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent';

const JaroWinklerDescription = () => {
  return (
    <>
      <Title>Jaro-Winkler</Title>
    <Description>
    is a string metric measuring an edit distance between two sequences. It is a variant proposed in 1990 by William E. Winkler of the Jaro distance metric (1989, Matthew A. Jaro). <a href="https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance" target="_blank" rel="noopener noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/jarowinkler/<b>firstword</b>&<b>secondword</b></Url>
    </>
  )
}

export default JaroWinklerDescription;