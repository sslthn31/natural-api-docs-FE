import React from 'react';
import axios from 'axios';
function Home() {
const [welcome, setWelcome] = React.useState("")
React.useEffect(() => {
        axios.get('https://natural-language-api.herokuapp.com/')
        .then(res => {
          console.log(res.data)
          setWelcome(res.data)
        }).catch(err => {
          console.error(err)
        })
    
      })
  return (
    <div>{welcome}</div>
  )
}

export default Home