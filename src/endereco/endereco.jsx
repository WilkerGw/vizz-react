import React from "react";
import "../endereco/endereco.css"; // Importação do arquivo CSS

const Endereco = () => {
    return (
        <section id="endereco" className="endereco-section">
            <div className="container">

                <div className="endereco-info">
                    <h1 className="section-title">Onde <span>Estamos</span></h1>
                    <div className="end__paragrafo">
                        <img src="./images/icons/end-cinza.png" alt="" className="end__icon" />
                        <a href="https://g.co/kgs/6yK9tZx" target="_blank">
                            <p>
                                Av Do Oratório, 4869 - Vila Industrial, São Paulo - SP
                            </p>
                        </a>
                    </div>
                    <div className="end__paragrafo">
                        <img src="./images/icons/insta-cinza.png" alt="" className="end__icon" />
                        <a href="https://www.instagram.com/oticasvizz/" target="_blank">
                            <p>
                                @oticasvizz
                            </p>
                        </a>
                    </div>
                    <div className="end__paragrafo">
                        <img src="./images/icons/whats-cinza.png" alt="" className="end__icon" />
                        <a href="https://wa.me/551123628799" target="_blank">
                            <p>
                                (11) 2362-8799
                            </p>
                        </a>
                    </div>
                    <div className="end__paragrafo">
                        <img src="./images/icons/email-cinza.png" alt="" className="end__icon" />
                        <a href="mailto:oticasvizz@gmail.com" target="_blank">
                            <p>
                                oticasvizz@gmail.com
                            </p>
                        </a>
                    </div>
                </div>

                <div className="mapa-container">
                <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0425983890514!2d-46.53036442548592!3d-23.602805163114574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d68dd6f6c1b%3A0x10545cdeace5b796!2sAv.%20do%20Orat%C3%B3rio%2C%204869%20-%20Jardim%20Guairaca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003221-200!5e0!3m2!1spt-BR!2sbr!4v1738883802296!5m2!1spt-BR!2sbr"
                            title="Google Maps"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Endereco;