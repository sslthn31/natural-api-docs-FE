import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h2`
font-weight: 600;
font-size: 32px;
text-transform: uppercase;
`
export const Description = styled.p`
font-weight: 400;
text-align: justify;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export const Label = styled.label`
font-size: 14px;
font-weight: 400;
text-transform: capitalize;
`
export const Input = styled.input`
max-width: 250px;
height: auto;
border-radius: 4px;
margin: 10px 0px;
border: 1px solid #000;
`
export const Button = styled.button`
width: 250px;
height: auto;
font-size: 14px;
border-radius: 10px;
background-color: #146363;
font-weight: 600;
border: 1px solid black;
transition: all 0.3s ease-out;
&:hover{
    color: #86F0F0;
    background-color: #24ABAB;
}
`
export const ResultContainer = styled.div`
width: 100%;
height: auto;
background-color: black;
border-radius: 4px;
overflow: hidden;
`
export const ResultInput = styled.p`
color: yellow;
padding: 1rem;  
`
export const HomeContainer = styled.div`

`
export const HomeTitle = styled.h2`
font-size: 28px;
color: gray;
text-align: start;
font-weight: 600;
`
export const HomeSubTitle = styled.h4`
font-size: 16px;
text-align: start;
text-transform: capitalize;
font-weight: 600;
`
export const DescriptionHome = styled.p`
font-size: 14px;
text-align: justify;
`
export const UlList = styled.ul`
width: 100%;
display: inline-grid;
grid-template-columns: 100px 100px;
gap: 1rem;
display: none !important;
`
const List = styled.li``

export const Url = styled.h3`
font-weight: 500;
`
export const HomeComponent = ({title, subtitle, description, url, ApiUrl}) => {
    return(
        <HomeContainer>
        <HomeTitle>{title}</HomeTitle>
        <HomeSubTitle>{subtitle}</HomeSubTitle>
        <DescriptionHome>{description} <a href={url} target="_blank" rel="noopener noreferrer">Node Natural Language Library</a></DescriptionHome>
        <Url>BASEURL : <b>{ApiUrl}</b></Url>
        </HomeContainer>
    )
}
export const MenuList = ({list, key, path}) => {
    return(
            <List><Link to={path} key={key}>{list}</Link></List>       
    )
}
export const InputForm = ({handle, firstRef, secondRef, single}) => {
    return(
        <Form action="" onSubmit={handle} style={{marginBottom: '1rem'}} single="false">
        <Label>first word</Label>
        <Input type="text" ref={firstRef} required/>
        {
            single ? null : 
            <>
            <Label>second word</Label>
            <Input type="text" ref={secondRef} required/>        
            </>
            }
        <Button type='submit'>Run</Button>
    </Form>
    )
}

export const Result = ({result}) => {
    return(
        <ResultContainer>
    <ResultInput>
      {result}
    </ResultInput>
    </ResultContainer>
    )
}