// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';

// Criando um componente estilizado para o cabeçalho
// `styled.header` indica que estamos estilizando uma tag HTML <header>
const HeaderContainer = styled.header`
  background-color: #0d1117; /* Cor de fundo escura, típica do cyberpunk */
  color: #00ff00; /* Verde neon para o texto */
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #00ffff; /* Borda inferior ciano neon para destaque */
  box-shadow: 0 4px 8px rgba(0, 255, 255, 0.2); /* Sombra com brilho neon */
  font-family: 'Space Mono', monospace; /* Fonte futurista (vamos adicionar depois) */
`;

// Criando um componente estilizado para o título
const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  text-shadow: 0 0 10px #00ff00; /* Efeito de brilho no texto */
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Painel de Hábitos e Metas</Title>
    </HeaderContainer>
  );
}

export default Header;