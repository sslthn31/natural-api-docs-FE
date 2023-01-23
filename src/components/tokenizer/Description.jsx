import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent'

const TokenizerDescription = () => {
  return (
    <>
      <Title>Tokenizer</Title>
    <Description>
    processing to split paragraphs and sentences into smaller units that can be more easily assigned meaning. The first step of the NLP process is gathering the data (a sentence) and breaking it into understandable parts (words) <a href="https://www.tokenex.com/blog/ab-what-is-nlp-natural-language-processing-tokenization/" target="_blank" rel="noopener noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/tokenizer/<b>firstword</b></Url>
    </>
  )
}

export default TokenizerDescription