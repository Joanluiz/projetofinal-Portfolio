import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerHeader = styled.section`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        flex-direction: column;
        align-items: center;
        height: 20vh;
        justify-content: space-evenly;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7%;
    color: #5FB8FA;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        margin-left: 0;
        width: 100%;
        justify-content: center;
    }
`

export const H1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 2rem;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 60%;

    @media only screen and (min-width: 375px) and (max-width: 815px){
        width: 100%;
        justify-content: center;
    }
`

export const SLink = styled(Link)`
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 10px;
    margin-right: 5%;
    color: #C2CED7;
    position: relative;
    text-decoration: none;
    font-weight: bold;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: #5FB8FA;
        bottom: 0;
        left: 0;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform .2s ease-in-out;
    }

    &:hover:before {
        transform-origin: left;
        transform: scaleX(1);
    }

    @media only screen and (min-width: 375px) and (max-width: 815px){
        margin-right: 0;
    }
`