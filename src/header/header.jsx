import React, { useState, useEffect } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fecha o menu ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            const nav = document.querySelector('nav');
            if (nav && !nav.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Função para alternar o menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para fechar o menu ao clicar em um item
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className='header__container'>
                {/* Botão de menu hamburguer */}
                <div
                    className={`menu-icon ${isMenuOpen ? 'hidden' : ''}`}
                    onClick={toggleMenu}
                >
                    ☰
                </div>

                {/* Botão de fechar */}
                <div
                    className={`close-icon ${isMenuOpen ? '' : 'hidden'}`}
                    onClick={toggleMenu}
                >
                    X
                </div>

                <nav>
                    <ul className={isMenuOpen ? 'active' : ''}>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#orcamento" onClick={closeMenu}>Orçamento</a></li>
                        <li><a href="#destaque" onClick={closeMenu}>Destaques</a></li>
                        <li><a href="#quem-somos" onClick={closeMenu}>Quem Somos</a></li>
                        <li><a href="#endereco" onClick={closeMenu}>Endereço</a></li>
                        <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;