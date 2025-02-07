import React from 'react';
import '../home/home.css';

function Home() {
    return (
        <div className="home" id='home'>
            {/* Logo */}
            <div className='logo__container'>
                <img src="/logo-dourado.png" alt="Logo da Empresa" />
                <h1>
                    O <span>MELHOR PREÇO</span> E <span>QUALIDADE</span> DA REGIÃO
                </h1>
            </div>

            {/* Orçamento */}
            <div className='orcamento__container'>
                <h1>NÃO JOGUE <span>DINHEIRO</span> FORA!</h1>
                <a href="#orcamento">
                    <button className='btn-home'>
                        <img src="./images/icons/compre-icon.png" alt="Ícone de Compra" className='btn-icon-amarelo' />
                        <img src="./images/icons/compre-icon2.png" alt="Ícone de Compra Branco" className='btn-icon-bco' />
                        <p>FAÇA UM ORÇAMENTO</p>
                    </button>
                </a>
                <p>Preencha o nosso formulário e receba um orçamento em <span>até 24 horas</span></p>

                {/* Loja Virtual */}
                <a href="https://oticasvizz.lojavirtualnuvem.com.br/produtos/?mpage=2" target='_blank' rel="noopener noreferrer">
                    <button className='btn-home'>
                        <img src="./images/icons/carrinho-icon.png" alt="Ícone de Carrinho" className='btn-icon-amarelo' />
                        <img src="./images/icons/carrinho-icon2.png" alt="Ícone de Carrinho Branco" className='btn-icon-bco' />
                        <p>COMPRE AGORA</p>
                    </button>
                </a>
                <p>Visite nossa Loja Virtual e <span>compre sem sair de casa</span></p>
            </div>
        </div>
    );
}

export default Home;