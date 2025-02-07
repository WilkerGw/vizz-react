import React, { useState } from "react";
import axios from "axios";
import '../orcamento/orcamento.css';

const FormularioUpload = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [imagem, setImagem] = useState(null);
    const [preview, setPreview] = useState("");

    // Validação do nome e sobrenome (apenas letras)
    const handleNomeChange = (e) => {
        const value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
        setNome(value);
    };

    const handleSobrenomeChange = (e) => {
        const value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
        setSobrenome(value);
    };

    // Formatação automática do telefone
    const handleTelefoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
        const formattedValue = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1)$2-$3");
        setTelefone(formattedValue);
    };

    // Upload da imagem e pré-visualização
    const handleImagemChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImagem(file);
            setPreview(URL.createObjectURL(file));
        } else {
            alert("Por favor, selecione um arquivo de imagem válido.");
        }
    };

    // Limpar campos após o envio
    const limparCampos = () => {
        setNome("");
        setSobrenome("");
        setTelefone("");
        setImagem(null);
        setPreview("");
    };

    // Enviar dados para o Cloudinary
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nome || !sobrenome || !telefone || !imagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const formData = new FormData();
        formData.append("file", imagem);
        formData.append("upload_preset", "ml_default"); // Substitua pelo seu upload preset do Cloudinary
        formData.append("folder", "receitas_medicas"); // Pasta no Cloudinary
        formData.append("context", `nome=${nome}|sobrenome=${sobrenome}|telefone=${telefone}`); // Metadados

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dlqjfujss/image/upload`, // Substitua pelo seu cloud name
                formData
            );
            console.log("Resposta do Cloudinary:", response.data);
            alert("Upload realizado com sucesso!");
            limparCampos();
        } catch (error) {
            console.error("Erro ao enviar para o Cloudinary:", error);
            alert("Erro ao enviar o formulário. Tente novamente.");
        }
    };

    return (
        <div className="formulario-container" id="orcamento">
            <form onSubmit={handleSubmit}>
            <h1>ORÇAMENTO <span>ONLINE</span></h1>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={handleNomeChange}
                        required
                    />
                </div>
                <div>
                    <label>Sobrenome:</label>
                    <input
                        type="text"
                        value={sobrenome}
                        onChange={handleSobrenomeChange}
                        required
                    />
                </div>
                <div>
                    <label>WhatsApp/Telefone:</label>
                    <input
                        type="text"
                        value={telefone}
                        onChange={handleTelefoneChange}
                        placeholder="(xx)xxxxx-xxxx"
                        required
                    />
                </div>
                <div>
                    <label>Upload da Receita Médica:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImagemChange}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {preview && (
                    <div className="imagem__receita">
                        <label>Pré-visualização:</label>
                        <img src={preview} alt="Pré-visualização" />
                    </div>
                )}
        </div>
    );
};

export default FormularioUpload;