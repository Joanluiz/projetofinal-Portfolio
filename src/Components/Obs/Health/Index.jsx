import React from 'react'
import * as S from './Style'
import Upa from '../../../Assets/Obs/upa.jpeg'

export default function Health({Close}){
    return(
            <S.Content>
                <S.Close onClick={Close}/>
                <S.Img src={Upa} alt="UPA"/>
                <S.H1>Saúde e bem-estar</S.H1>
                <div>
                    <S.P>1 - Melhor investigação nos sintomas do paciente </S.P>
                    <S.P>2 - Criação de mais leitos</S.P>
                    <S.P>3 - Melhorar a gestão hospitalar</S.P>
                </div>
            </S.Content>  
    )
}