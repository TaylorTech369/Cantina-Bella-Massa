import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

export default function Inicio() {

    const navigate = useNavigate();

    // function AbrirTelaInicio() {
    //     navigate('/Inicio')
    // }

    function AbrirTelaCardapio() {
        navigate('/Cardapio')
    }

    function AbrirTelaContato() {
        navigate('/Contato')
    }

    return(

        <div>

            {/* <button className='botaoDeNavegacao' onClick={AbrirTelaInicio}>Inicio</button> */}
            <button className='botaoDeNavegacao' onClick={AbrirTelaCardapio}>Cardapio</button>
            <button className='botaoDeNavegacao' onClick={AbrirTelaContato}>Contato</button>

        </div>

    )
}






