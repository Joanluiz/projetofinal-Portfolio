import React from 'react'
import * as S from './Style'


export default function Header(){
    return(
        <S.ContainerHeader>
            <S.Title>
                <S.H1>JL</S.H1>
            </S.Title>
            <S.Menu>
                <S.SLink to='/'>Início</S.SLink>
                <S.SLink to='/sobremim'>Sobre mim</S.SLink>
                <S.SLink to='/projetos'>Meus Projetos</S.SLink>
                <S.SLink to='/obs'>ODS</S.SLink>
            </S.Menu>
        </S.ContainerHeader>
    )
}