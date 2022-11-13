import React from 'react'
import axios from 'axios'
import JaroWinklerDescription from './Description'
import JaroWinklerForm from './Form'
import JaroWinklerResult from './Result'


function JaroWinkler() {
const url = 'https://natural-language-api.herokuapp.com/naturalApi/jarowinkler'
const firstWordRef = React.useRef()
const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handleJaroWinkler(e) {
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
    <JaroWinklerDescription />
    <JaroWinklerForm 
    firstWord={firstWordRef} 
    secondWord={secondWordRef} 
    handleJaroWinkler={handleJaroWinkler} 
    />
    <JaroWinklerResult result={result} />
    </>
  )
}

export default JaroWinkler