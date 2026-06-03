import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import TelaInicio from './pages/Inicio.jsx'
import TelaCardapio from './pages/Cardapio.jsx'
import TelaContato from './pages/Contato.jsx'

function App() {

  const navigate = useNavigate();

  function Retornar() {
    navigate('/')
  }

  return (

    <div>

      <header>
        <p onClick={Retornar}>Retornar</p>
      </header>

      {/* <CardPrato
        nome={prato.nome}
        preco={prato.preco}
        imagem={prato.imagem}
        categoria={prato.categoria}
        onFavoritar={favoritarPrato}
      /> */}

      <Routes>
        <Route path="/" element={<TelaInicio />} />
        <Route path="/Cardapio" element={<TelaCardapio />} />
        <Route path="/Contato" element={<TelaContato />} />
      </Routes>

      <footer>
        <p>Rodapé</p>
      </footer>

    </div>

  )
}

export default App