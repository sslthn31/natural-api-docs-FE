import React from 'react';
import { HomeComponent, MenuList, UlList } from '../../style/StyledComponent';
function Home() {

  const menuList = [
    {
      name: "Welcome",
      key: 0,
      link: '/'
    },
    {
      name: "Phonetics",
      key: 1,
      link: '/phonetics'
    },
    {
      name: "Tokenizer",
      key: 2,
      link: '/tokenizer'
    },
    {
      name: "Plural",
      key: 3,
      link: '/plural'
    },
    {
      name: "Singular",
      key: 4,
      link: '/singular'
    },
    {
      name: "Hamming",
      key: 5,
      link: '/hamming'
    },
    {
      name: "Jaro Winkler",
      key: 6,
      link: '/jarowinkler'
    },
    {
      name: "Levenshtein",
      key: 7,
      link: '/levenshtein'
    },
    {
      name: "Dice Coefficien",
      key: 8,
      link: '/dicecoefficien'
    },
  ]
  const filterMenu = menuList.filter((data, index) => index >= 1)
  return (
    <React.Fragment>
    <HomeComponent 
    title="Welcome To Natural Api Docs"
    subtitle="What means natural language?"
    description="Is a language that is the native speech of a people compare artificial language. The language of ordinary speaking and writing. fundamental problems of artificial intelligence teaching computers to understand natural languages. and this api using library package from"
    url="https://naturalnode.github.io/natural/string_distance.html#string-distance"
    ApiUrl="https://natural-language-api.vercel.app/"
    />
    <UlList>
    {filterMenu.map((data) => {
      return(
        <MenuList list={data.name} path={data.link} key={data.key}/>
      )
    })}
    </UlList>
    </React.Fragment>
  )
}

export default Home