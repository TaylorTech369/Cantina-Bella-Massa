import axios from 'axios'
import { useState, useEffect, use } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function Cardapio() {

    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        axios.get('https://jhonatanwll.github.io/aula_api_restaurante/pratos.json')
            .then(response => {
                setPratos(response.data)
            })
            .catch(error => console.error("Erro ao buscar pratos:", error))
    }, [])

    return (

        <div>
            <main className="form-container">
                <div className="card">
                    {
                        pratos.map(pratos =>
                            <div key={pratos.id} className='cartoes'>
                                <br />
                                <img src={pratos.imagem} width={200} /> <br />
                                <br /><strong>Nome:</strong> {pratos.nome}
                                <br /> <strong>ID:</strong> {pratos.id}
                                <br /> <strong>Descrição:</strong> {pratos.descricao}
                                <br /> <strong>Preço:</strong> {pratos.preco} 
                                <hr /> <hr />
                            </div>)
                    }

                </div>
            </main>
        </div>

    )
}