import React from 'react'
import * as S from './Style'
import Header from '../../Services/Header/Index'
import Footer from '../../Services/Footer/Index'
import Html from '../../Assets/Skills/html.png'
import Css from '../../Assets/Skills/css.png'
import ReactLanguage from '../../Assets/Skills/react.png'


export default function Aboutme(){
    return(
        <S.ContainerAboutMe>
            <Header />
            <S.All>
                <S.Content>
                    <S.H2>Sobre mim</S.H2>
                    <S.P>Olá, meu nome é Joan, tenho 24 anos, sou Desenvolvedor Front-End Jr formado pelo curso do Vai na Web. Apaixonado por soluções simples para problemas difíceis e entusiasta de métodos ágeis e ambientes flexíveis.</S.P>
                    <S.Skills>
                        <S.ContainerLanguage>
                            <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target='_blank' rel="noreferrer"><S.LanguageImg src={Html} alt='HTML'/></a>
                            <S.H6>HTML</S.H6>
                        </S.ContainerLanguage>
                        <S.ContainerLanguage>
                            <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' rel="noreferrer"><S.LanguageImg src={Css} alt='CSS'/></a>
                            <S.H6>CSS</S.H6>
                        </S.ContainerLanguage>

                        <S.ContainerLanguage>
                            <a href='https://reactnative.dev/docs/getting-started' target='_blank' rel="noreferrer"><S.LanguageImg src={ReactLanguage} alt='CSReactS'/></a>
                            <S.H6>React</S.H6>
                        </S.ContainerLanguage>
                    </S.Skills>
                </S.Content>
            </S.All>
            <Footer />
        </S.ContainerAboutMe>
    )
}