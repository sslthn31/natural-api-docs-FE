import React from 'react'
import axios from 'axios'
import HammingResult from './Result'
import HammingDescription from './Description'
import HammingForm from './Form'


function Hamming() {
const url = 'https://natural-language-api.herokuapp.com/naturalApi/hamming'
const firstWordRef = React.useRef()
const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handleHamming(e) {
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
    <HammingDescription />
    <HammingForm 
    firstWord={firstWordRef} 
    secondWord={secondWordRef} 
    handleHamming={handleHamming} 
    />
    <HammingResult result={result} />
    </>
  )
}

export default Hamming