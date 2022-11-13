import React from 'react'
import axios from 'axios'
import PhoneticsDescription from './Description'
import PhoneticsForm from './Form'
import PhoneticsResult from './Result'


function Phonetics() {
const url = 'https://natural-language-api.herokuapp.com/naturalApi/phonetics'
const firstWordRef = React.useRef()
const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handlePhonetics(e) {
  e.preventDefault()

  const firstWord = firstWordRef.current.value;
  const secondWord = secondWordRef.current.value;
  axios.get(`${url}/${firstWord}&${secondWord}`)
  .then((res) => {
  // console.log(res)
  setResult(res.data)
  console.log(firstWord)
  console.log(secondWord)
  // console.log(res)
  // setResult(res)
}
)
.catch((err) => { 
// console.log(firstWord.length)
  console.error(err)})
}
return (
    <>
    <PhoneticsDescription />
    <PhoneticsForm 
    firstWord={firstWordRef} 
    secondWord={secondWordRef} 
    handlePhonetics={handlePhonetics} 
    />
    <PhoneticsResult result={result} />
    </>
  )
}

export default Phonetics