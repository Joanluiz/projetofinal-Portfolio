import React from 'react'
import * as S from './Style'
import Harrypotter from '../../Assets/Projects/harrypotter.png'
import Todolist from '../../Assets/Projects/todolist.png'
import Header from '../../Services//Header/Index'
import Footer from '../../Services/Footer/Index'

export default function Projects(){
    return(
        <S.ContainerProjects>
            <Header />
            <S.All>
                <S.Project>
                    <S.Img src={Harrypotter} alt='Harrypotter' />
                    <S.Content>
                        <S.H2>Harry Potter</S.H2>
                        <S.P><S.A href="https://github.com/Joanluiz/Harry-Potter-API" target="_blank" rel="noreferrer">Repositório</S.A></S.P>
                    </S.Content>
                </S.Project>
                <S.Project>
                    <S.Img src={Todolist} alt='Todolist' />
                    <S.Content>
                        <S.H2>To Do List</S.H2>
                        <S.P><S.A href="https://github.com/Joanluiz/todolist-react" target="_blank" rel="noreferrer">Repositório</S.A></S.P>
                    </S.Content>
                </S.Project>
            </S.All>
            <Footer />
        </S.ContainerProjects>
    )
}