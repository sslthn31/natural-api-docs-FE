import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent'

const SingularDescription = () => {
  return (
    <>
      <Title>Singular</Title>
    <Description>
    A singular noun is a noun that refers to only one person, place, thing, or idea. Its contrasted with plural nouns, which refer to more than one person, place, thing, or idea. An example of a singular noun is cat, which represents one cat; an example of a plural noun is cats, which represents two or more cats. <a href="https://www.grammarly.com/blog/singular-nouns/#:~:text=A%20singular%20noun%20is%20a,place%2C%20thing%2C%20or%20idea" target="_blank" rel="noopener noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/singular/<b>firstword</b></Url>
    </>
  )
}

export default SingularDescription