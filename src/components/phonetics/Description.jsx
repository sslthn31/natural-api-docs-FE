import React from 'react'
import { Description, Title, Url } from '../../style/StyledComponent';

const PhoneticsDescription = () => {
  return (
    <>
      <Title>Phonetics</Title>
    <Description>
    Is representing the sounds and other phenomena of speech: such as. : constituting an alteration of ordinary spelling that better represents the spoken language, that employs only characters of the regular alphabet, and that is used in a context of conventional spelling <a href='https://www.merriam-webster.com/dictionary/phonetic#:~:text=adjective,a%20context%20of%20conventional%20spelling' target='_blank' rel="noreferrer">(Source)</a>
    </Description>
    <Url>Endpoint :  https://natural-language-api.vercel.app/naturalApi/phonetics/<b>firstword</b>&<b>secondword</b></Url>
    </>
  )
}

export default PhoneticsDescription;