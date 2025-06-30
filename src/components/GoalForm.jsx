// src/components/GoalForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from './common/FormElements'; // <--- Nova importação aqui!

// Reutilizamos o FormContainer e FormTitle (eles podem ficar aqui ou também serem movidos para common)
const FormContainer = styled.div`
  background-color: #1a1a2e;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  max-width: 600px;
  margin: 40px auto;
  border: 1px solid #00ffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormTitle = styled.h2`
  color: #00ff00;
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8em;
  text-shadow: 0 0 8px #00ff00;
`;

// As definições de Input e Button foram removidas daqui!

function GoalForm({ onAddGoal }) {
  const [goalName, setGoalName] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalName.trim() && targetValue > 0) {
      onAddGoal(goalName, parseFloat(targetValue));
      setGoalName('');
      setTargetValue('');
    } else {
      alert('Por favor, insira um nome para a meta e um valor alvo válido.');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Definir Nova Meta</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ex: Correr 5km em 30 min, Economizar R$1000"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Valor alvo (ex: 5 para km, 1000 para R$)"
          value={targetValue}
          onChange={(e) => setTargetValue(e.target.value)}
          min="0.01"
          step="any"
          required
        />
        <Button type="submit">Adicionar Meta</Button>
      </form>
    </FormContainer>
  );
}

export default GoalForm;