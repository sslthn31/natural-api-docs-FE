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
width: 60px;
height: auto;
font-size: 12px;
border-radius: 6px;
background-color: #0275d8;
font-weight: 600;
border: none;
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

export const InputForm = ({handle, firstRef, secondRef, single}) => {
    return(
        <Form action="" onSubmit={handle} style={{marginBottom: '1rem'}} single="false">
        <Label>firstword</Label>
        <Input type="text" ref={firstRef} required/>
        {
            single ? null : 
            <>
            <Label>secondword</Label>
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