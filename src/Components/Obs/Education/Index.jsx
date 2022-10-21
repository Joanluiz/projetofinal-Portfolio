import React from 'react'
import * as S from './Style'
import Ufrn from '../../../Assets/Obs/ufrn.jpg'

export default function Education({Close}){
    return(
        <section>  
            <S.Content>
                <S.Close onClick={Close}/>
                <S.Img src={Ufrn} alt='ufrn'/>
                <S.H1>Educação de qualidade</S.H1>
                <div>
                    <S.P>1 - Projetos Sociocultural nas Escolas</S.P>
                    <S.P>2 - Incentivo a prática de esportes</S.P>
                    <S.P>3 - Melhorar a gestão e controle de presença e participação de pais e alunos</S.P>
                </div>
            </S.Content>
        </section>
    )
}