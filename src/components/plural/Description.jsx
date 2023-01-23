import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent'

const PluralDescription = () => {
  return (
    <>
      <Title>Plural</Title>
    <Description>
    A plural noun is a noun that refers to more than one person, place, thing, or idea. Most singular nouns are made plural by adding a suffix, usually s or es. For example, the singular noun dog takes the plural form dogs, as in three dogs. However, there are irregular plural nouns that take unique forms. <a href="https://www.grammarly.com/blog/plural-nouns/" target="_blank" rel="noopener noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/plural/<b>firstword</b></Url>
    </>
  )
}

export default PluralDescription