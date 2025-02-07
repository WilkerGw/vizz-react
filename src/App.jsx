import './App.css'
import './header/header.css'
import Header from './header/header'
import Home from './home/home'
import FormularioUpload from './orcamento/orcamento'
import ProdutoDestaque from './destaque/destaque'
import QuemSomos from './quem/quem'
import Endereco from './endereco/endereco'
import Parceiros from './parceiros/parceiros'
import Contato from './contato/contato'

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Parceiros/>
    <FormularioUpload/>
    <ProdutoDestaque/>
    <QuemSomos/>
    <Endereco/>
    <Contato/>
    </>
  )
}

export default App
