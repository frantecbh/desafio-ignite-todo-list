import styled from "styled-components";

export const Container = styled.form`
 display: flex;
    gap: 0.5rem;

    margin-top: -2rem;

    margin-bottom: 4rem;

input{
    width: 100%;
    background: var(--gray-500);

    border: 0;

    height: 3.5rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-100); 
}
button{
    width: 6rem;
    border-radius: 8px;
    border: 0;
    background: var(--bluedark);
    color: var(--white);
    font-weight: bold;
    cursor: pointer;   
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    transition: background-color 0.1s;
   
}

button:hover{

background: var(--blue);


}

`