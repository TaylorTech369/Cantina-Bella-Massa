import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardPrato(prato) {


    return (
        <>
            <CardPrato
                nome={prato.nome}
                preco={prato.preco}
                imagem={prato.imagem}
                categoria={prato.categoria}
                onFavoritar={favoritarPrato}
            />
        </>
    )
}