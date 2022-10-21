import React from 'react'
import * as S from './Style'
import GrowthImg from '../../../Assets/Obs/growth1.jpg'

export default function Growth({Close}){
    return(
        <S.Content>
            <S.Close onClick={Close}/>
            <S.Img src={GrowthImg} alt='Crescimento'/>
            <S.H1>Trabalho e crescimento econômico</S.H1>
            <div>
                <S.P>1 - Investir e incentivar pequenos comércios</S.P>
                <S.P>2 - Aumentar o número de vagas de emprego</S.P>
                <S.P>3 - Aplicar e proteger os direitos trabalhistas</S.P>
            </div>
        </S.Content>
    )
}