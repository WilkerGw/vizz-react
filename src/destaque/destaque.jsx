import React, { useState } from "react";
import "../destaque/destaque.css"; // Arquivo de estilos

const ProdutoDestaque = () => {
    const [imagemDestaque, setImagemDestaque] = useState(
        "/01.png"
    );

    const imagensProduto = [
        "/01.png",
        "/02.png",
        "/03.png",
        "/04.png"
    ];

    const handleThumbnailClick = (imagem) => {
        setImagemDestaque(imagem);
    };

    return (
        <div className="produto-destaque-container" id="destaque">
            <div className="imagens-container">
                <div className="miniaturas">
                    {imagensProduto.map((imagem, index) => (
                        <img
                            key={index}
                            src={imagem}
                            alt={`Ângulo ${index + 1}`}
                            onClick={() => handleThumbnailClick(imagem)}
                        />
                    ))}
                </div>
                <div className="imagem-destaque">
                    <img src={imagemDestaque} alt="Óculos Solar em Destaque" />
                </div>
            </div>
            <div className="informacoes-produto">
                <h1>Óculos de Grau <span>Vizz Lunna</span>: </h1>
                <h2>Armação de Óculos Gatinho Marmorizada em Acetato com Detalhes em Dourado <span>para Mulheres Modernas</span></h2>
                <p className="modelo">Código: 93375</p>
                <p className="descricao">
                    Este óculos solar combina estilo e conforto, perfeito para dias ensolarados. Com lentes
                    polarizadas e armação leve, ele é ideal para atividades ao ar livre.
                </p>
                <div className="precos">
                    <span className="preco-antigo">R$ 199,99</span>
                    <span className="preco-promocional">R$ 99,90</span>
                </div>
                <a href="https://oticasvizz.lojavirtualnuvem.com.br/produtos/oculos-de-grau-vizz-lunna-marmorizada-em-acetato-para-mulheres-modernas/" target="_blank"><button className="btn-comprar">Comprar Agora</button></a>
            </div>
        </div>
    );
};

export default ProdutoDestaque;