import React, { useState, useRef, useEffect } from "react"; // Importa os hooks do React
import '../contato/contato.css'; // Importa os estilos
import { db, collection, addDoc } from "../firebase"; // Importa o Firestore
import IMask from 'imask'; // Importa a biblioteca IMask

const Contato = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState(""); // Armazena o valor do telefone
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);
    const [mensagemStatus, setMensagemStatus] = useState(""); // Estado para mensagens de feedback

    // Referência para o campo de telefone
    const telefoneRef = useRef(null);

    // Aplica a máscara ao campo de telefone usando IMask
    useEffect(() => {
        if (telefoneRef.current) {
            const mask = IMask(telefoneRef.current, {
                mask: "(00)00000-0000", // Define a máscara para o telefone
            });

            // Atualiza o estado do telefone quando o valor muda
            mask.on("accept", () => {
                setTelefone(mask.value);
            });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Validação dos campos obrigatórios
            if (!nome || !email || !mensagem) {
                setMensagemStatus("Por favor, preencha nome, e-mail e mensagem!");
                setLoading(false);
                return;
            }

            // Validação do e-mail
            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailValido) {
                setMensagemStatus("Por favor, insira um e-mail válido!");
                setLoading(false);
                return;
            }

            // Validação do telefone
            const telefoneValido = /^\(\d{2}\)\d{5}-\d{4}$/.test(telefone); // Verifica se o telefone está no formato correto
            if (!telefoneValido) {
                setMensagemStatus("Por favor, preencha o telefone no formato correto: (xx)xxxxx-xxxx");
                setLoading(false);
                return;
            }

            // Salva os dados no Firestore
            await addDoc(collection(db, "contatos"), {
                nome: nome,
                email: email,
                telefone: telefone, // Agora o telefone sempre estará formatado
                mensagem: mensagem,
                timestamp: new Date().toISOString() // Adiciona um timestamp
            });

            // Feedback de sucesso
            setMensagemStatus("Dados enviados com sucesso!");
            setNome("");
            setEmail("");
            setTelefone(""); // Limpa o campo de telefone
            setMensagem("");
        } catch (error) {
            console.error("Erro:", error);
            setMensagemStatus("Erro ao enviar formulário! Verifique o console para mais detalhes.");
        } finally {
            setLoading(false);
            setTimeout(() => setMensagemStatus(""), 3000); // Limpa a mensagem após 3 segundos
        }
    };

    return (
        <section id="contato" className="contato-section">
            <div className="container__contato">
                <h1>Entre em <span>Contato</span></h1>
                <div className="contato-content">
                    <form className="contato-form" onSubmit={handleSubmit}>
                        {/* Exibe mensagens de feedback */}
                        {mensagemStatus && <p className="status-message">{mensagemStatus}</p>}

                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label>
                            <input
                                ref={telefoneRef} // Referência para o campo de telefone
                                type="text"
                                id="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)} // Adiciona o manipulador onChange
                                disabled={loading}
                                placeholder="(xx)xxxxx-xxxx" // Placeholder para orientação
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea
                                id="mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                disabled={loading}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading}
                        >
                            {loading ? "Enviando..." : "Enviar Mensagem"}
                        </button>
                    </form>

                    <div className="contato-info">
                        <div className="contato_paragrafos">
                            <div className="paragrafo">
                                <img src="./images/icons/end-amarelo.png" alt="" className="contato-icon" />
                                <a href="https://maps.app.goo.gl/3BB6kUzDJvBdv7k98" target="_blank" rel="noopener noreferrer">
                                    <p>
                                        Avenida do Oratório, 4869 - Vila Industrial, São Paulo - SP
                                    </p>
                                </a>
                            </div>
                            <div className="paragrafo">
                                <img src="./images/icons/tel-amarelo.png" alt="" className="contato-icon" />
                                <a href="https://wa.me/551123628799" target="_blank" rel="noopener noreferrer">
                                    <p>
                                        (11) 2392-8799
                                    </p>
                                </a>
                            </div>
                            <div className="paragrafo">
                                <img src="./images/icons/email-amarelo.png" alt="" className="contato-icon" />
                                <a href="mailto:oticasvizz@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <p>
                                        oticasvizz@gmail.com
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;