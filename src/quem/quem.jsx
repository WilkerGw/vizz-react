import React from "react";
import "./quem.css"; // Caminho relativo correto

const QuemSomos = () => {
    return (
        <section id="quem-somos" className="quem-somos">
            <div className="container__quem">
                {/* Logo */}
                <div className="logo-container">
                    <img
                        src="/logo-dourado.png"
                        alt="Logo da Empresa"
                        className="logo"
                    />
                </div>

                {/* Vídeo do YouTube */}
                <div className="video-container">
                    <iframe
                        title="YouTube video player"
                        src="https://www.youtube.com/embed/41TFu_6eOzw?si=vu9z2bqFZlO5NfXs"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="descricao">
                    <p>
                        Na <span>Vizz</span>, acreditamos que enxergar bem é essencial, mas fazer isso com estilo é indispensável.
                        Nosso compromisso vai além da estética: trabalhamos com armações de alta durabilidade e lentes que garantem a proteção e o cuidado que sua visão merece. Cada cliente é único, por isso oferecemos um atendimento personalizado para ajudar você a encontrar o modelo perfeito que valorize sua personalidade.
                    </p>
                    <p>
                        <span>Vizz Ótica – Enxergue o mundo com novos olhos.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QuemSomos;