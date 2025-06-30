// src/components/HabitForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

// 1. Container para o formulário
const FormContainer = styled.div`
  background-color: #1a1a2e; /* Fundo escuro */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4); /* Sombra com brilho ciano */
  max-width: 600px;
  margin: 40px auto; /* Centraliza e adiciona margem vertical */
  border: 1px solid #00ffff; /* Borda sutil ciano */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espaço entre os elementos do formulário */
`;

// 2. Título do formulário
const FormTitle = styled.h2`
  color: #00ff00; /* Verde neon */
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8em;
  text-shadow: 0 0 8px #00ff00; /* Brilho no título */
`;

// 3. Campo de input
const Input = styled.input`
  width: calc(100% - 20px); /* Ocupa quase toda a largura, considerando padding */
  padding: 12px 10px;
  border: 1px solid #00ffff; /* Borda ciano */
  border-radius: 5px;
  background-color: #0d1117; /* Fundo mais escuro para o input */
  color: #e0e0e0; /* Texto claro */
  font-size: 1em;
  outline: none; /* Remove a borda de foco padrão */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Transição suave */

  &:focus {
    border-color: #00ff00; /* Borda verde neon ao focar */
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.6); /* Brilho verde neon ao focar */
  }

  &::placeholder {
    color: #777; /* Cor do placeholder mais escura */
  }
`;

// 4. Botão
const Button = styled.button`
  background-color: #00ffff; /* Ciano neon */
  color: #0d1117; /* Texto escuro */
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  font-weight: bold;
  text-transform: uppercase; /* Texto em maiúsculas */

  &:hover {
    background-color: #00ff00; /* Verde neon ao passar o mouse */
    transform: translateY(-2px); /* Efeito de "levantar" */
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.4); /* Sombra com brilho verde */
  }

  &:active {
    transform: translateY(0); /* Retorna à posição original ao clicar */
  }
`;

function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState(''); // Estado para armazenar o nome do hábito

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    if (habitName.trim()) { // Verifica se o nome do hábito não está vazio
      onAddHabit(habitName); // Chama a função passada via props para adicionar o hábito
      setHabitName(''); // Limpa o campo de input após adicionar
    }
  };

  return (
    <FormContainer>
      <FormTitle>Adicionar Novo Hábito</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ex: Beber 2L de água, Ler 30 min..."
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)} // Atualiza o estado ao digitar
        />
        <Button type="submit">Adicionar Hábito</Button>
      </form>
    </FormContainer>
  );
}

export default HabitForm;