import React from 'react'
import * as S from './Style'
import EqualityImg from '../../../Assets/Obs/equality1.png'

export default function Equality({Close}){
    return(
        <S.Content>
            <S.Close onClick={Close}/>
            <S.Img src={EqualityImg} alt='Igualdade'/>
            <S.H1>Igualdade de Gênero</S.H1>
            <div>
                <S.P>1 - Erradicar toda as formas de violêcia contra as mulheres</S.P>
                <S.P>2 - Assegurar os valores de igualdade</S.P>
                <S.P>3 - Garantir os direitos da mulher</S.P>
            </div>
        </S.Content>  
    )
}