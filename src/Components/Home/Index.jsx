import React from 'react'
import * as S from './Style'
import Header from '../../Services/Header/Index'
import Footer from '../../Services/Footer/Index'
import Linkedin from '../../Assets/Social-Media/linkedin.png'
import GitHub from '../../Assets/Social-Media/github.png'
import Behance from '../../Assets/Social-Media/behance.png'
import Photo5 from '../../Assets/Photos/photo5.png'

export default function Home(){
    return(
        <S.ContainerHome>
            <Header />
            <S.All>
                <S.Content>
                    <S.Text>
                        <S.H1>Olá, meu nome é Joan Luiz!</S.H1>
                        <S.H3>Sou desenvolvedor Front-End e UX/UI Designer.</S.H3>
                        <S.SMBox>
                            <a href='https://www.linkedin.com/in/joanluiz/' target='_blank' rel="noreferrer"><S.SM src={Linkedin} alt='LinkedIn'/></a>
                            <a href='https://github.com/Joanluiz' target='_blank'rel="noreferrer"><S.SM src={GitHub} alt='GitHub'/></a>  
                            <a href='https://www.behance.net/joanluiz_' target='_blank'rel="noreferrer"><S.SM src={Behance} alt='Behance'/></a>  
                        </S.SMBox>
                    </S.Text>
                </S.Content>
                <S.Box>
                    <S.Photo src={Photo5} alt='Minha foto de frente'/>
                </S.Box>
            </S.All>
            <Footer />
        </S.ContainerHome>
    )
}