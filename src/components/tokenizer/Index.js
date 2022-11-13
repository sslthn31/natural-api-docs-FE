import React from 'react'
import axios from 'axios'
import TokenizerDescription from './Description'
import TokenizerForm from './Form'
import TokenizerResult from './Result'


function Tokenizer() {
const url = 'https://natural-language-api.herokuapp.com/naturalApi/tokenizer'
const firstWordRef = React.useRef()
// const secondWordRef = React.useRef()
const [result, setResult] = React.useState("");

function handleTokenizer(e) {
  e.preventDefault()

  const firstWord = firstWordRef.current.value;
//   const secondWord = secondWordRef.current.value;
  axios.get(`${url}/${firstWord}`)
  .then((res) => {
  // console.log(res)
  setResult(res.data)
  console.log(firstWord)
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
    <TokenizerDescription />
    <TokenizerForm 
    firstWord={firstWordRef} 
    // secondWord={secondWordRef}   
    handleTokenizer={handleTokenizer} 
    />
    <TokenizerResult result={result} />
    </>
  )
}

export default Tokenizer