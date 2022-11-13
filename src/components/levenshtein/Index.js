import React from 'react'
import axios from 'axios'
import LevenshteinDescription from './Description'
import LevenshteinForm from './Form'
import LevenshteinResult from './Result'


function Levenshtein() {
const url = 'https://natural-language-api.herokuapp.com/naturalApi/levenshtein'
const firstWordRef = React.useRef()
const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handleLevenshtein(e) {
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
    <LevenshteinDescription />
    <LevenshteinForm 
    firstWord={firstWordRef} 
    secondWord={secondWordRef} 
    handleLevenshtein={handleLevenshtein} 
    />
    <LevenshteinResult result={result} />
    </>
  )
}

export default Levenshtein