import React from 'react'
import axios from 'axios'
import SingularDescription from './Description'
import SingularForm from './Form'
import SingularResult from './Result'

function Singular() {
const url = 'https://natural-language-api.vercel.app/naturalApi/singular'
const firstWordRef = React.useRef()
// const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handleSingular(e) {
  e.preventDefault()

  const firstWord = firstWordRef.current.value;
//   const secondWord = secondWordRef.current.value;
  axios.get(`${url}/${firstWord}`)
  .then((res) => {
  // console.log(res)
  setResult(res.data)
  // console.log(firstWord)
//   console.log(secondWord)
  // console.log(res)
  // setResult(res)
}
)
.catch((err) => { 
console.log(firstWord.length)
  console.log(err)})
}
return (
    <>
    <SingularDescription />
    <SingularForm 
    firstWord={firstWordRef} 
    // secondWord={secondWordRef}   
    handleSingular={handleSingular} 
    />
    <SingularResult result={result} />
    </>
  )
}

export default Singular