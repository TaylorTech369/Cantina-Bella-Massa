import axios from 'axios';
import { useState, useEffect } from 'react';


function CartaoPrato({ prato, formatarPreco }) {
    const [favorito, setFavorito] = useState(false);

    return (
        <article className="cartao-prato">
            <div className="imagem-container">
                <img
                    src={prato.imagem}
                    alt={prato.nome}
                    className="imagem-prato"
                />
            </div>

            <div className="conteudo-prato">
                <span className="categoria-prato">{prato.categoria}</span>
                <h3 className="nome-prato">{prato.nome}</h3>
                <p className="descricao-prato">{prato.descricao}</p>

                <div className="footer-prato">
                    <span className="preco-prato">
                        {formatarPreco(prato.preco)}
                    </span>

                    <span className={`badge-status ${prato.disponivel ? 'disponivel' : 'indisponivel'}`}>
                        {prato.disponivel ? 'Disponível' : 'Indisponível'}
                    </span>

                    <button 
                        onClick={() => setFavorito(!favorito)}
                        className={favorito ? 'btn-favoritado' : 'btn-favoritar'}
                    >
                        {favorito ? '★ Favoritado' : '☆ Marcar Favorito'}
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function Cardapio() {
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        axios.get('https://jhonatanwll.github.io/aula_api_restaurante/pratos.json')
            .then(response => {
                setPratos(response.data);
            })
            .catch(error => console.error("Erro ao buscar pratos:", error));
    }, []);




    const formatarPreco = (preco) => {
        if (typeof preco === 'number') {
            return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
        return preco;
    };

    return (
        <div className="cardapio-container">
            <h2 className="cardapio-titulo">Nosso Cardápio</h2>

            <main className="grid-cardapio">
                {pratos.map(prato => (

                    <CartaoPrato
                    key={prato.id}
                    prato={prato}
                    formatarPreco={formatarPreco}
                    />
                ))}
            </main>
        </div>
    );
}
