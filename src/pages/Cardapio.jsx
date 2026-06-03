import axios from 'axios'
import { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';

useEffect(() => {
    axios.get('github.com/jhonatanwll/aula_api_restaurante')
        .then(response => {
            setPratos(response.data())
        })
})

export default function Cardapio() {

    return (

        <div>
            <main className="form-container">
                <div className="card">
                    {
                        setPratos.map(pratos =>
                            <div key={pratos.id} className='cartoes'>
                                <strong>Nome:</strong> {pratos.nome}
                                <br /> <strong>Nome:</strong> {pratos.nome}
                                <br /> <strong>Email:</strong> {pratos.email}
                            </div>)
                    }

                </div>
            </main>
        </div>

    )
}