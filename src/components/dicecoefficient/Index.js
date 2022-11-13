import React from 'react'
import axios from 'axios'
import DiceCoefficientDescription from './Description'
import DiceCoefficientForm from './Form'
import DiceCoefficientResult from './Result'


function DiceCoefficient() {
const url = 'https://natural-language-api.herokuapp.com/naturalApi/DiceCoefficient'
const firstWordRef = React.useRef()
const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handleDiceCoefficient(e) {
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
    <DiceCoefficientDescription />
    <DiceCoefficientForm 
    firstWord={firstWordRef} 
    secondWord={secondWordRef} 
    handleDiceCoefficient={handleDiceCoefficient} 
    />
    <DiceCoefficientResult result={result} />
    </>
  )
}

export default DiceCoefficient