import React from 'react'
import axios from 'axios'
import PluralDescription from './Description'
import PluralForm from './Form'
import PluralResult from './Result'


function Plural() {
const url = 'https://natural-language-api.vercel.app/naturalApi/plural'
const firstWordRef = React.useRef()
// const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handlePlural(e) {
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
  console.log(err)})
}
return (
    <>
    <PluralDescription />
    <PluralForm 
    firstWord={firstWordRef} 
    // secondWord={secondWordRef}   
    handlePlural={handlePlural} 
    />
    <PluralResult result={result} />
    </>
  )
}

export default Plural