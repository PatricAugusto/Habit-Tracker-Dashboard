// src/components/GoalItem.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from './common/FormElements'; // <--- Nova importação aqui!

const GoalCard = styled.div`
  background-color: #0d1117;
  border: 1px solid #00ffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
  }
`;

const GoalName = styled.h3`
  color: #00ff00;
  margin: 0 0 10px 0;
  font-size: 1.5em;
  text-shadow: 0 0 5px #00ff00;
`;

const GoalProgressText = styled.p`
  color: #e0e0e0;
  font-size: 1.1em;
  margin-bottom: 15px;
  span {
    color: #ff00ff;
    font-weight: bold;
    text-shadow: 0 0 3px #ff00ff;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #333;
  border-radius: 5px;
  height: 15px;
  overflow: hidden;
  border: 1px solid #00ffff;
  margin-bottom: 15px;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background: linear-gradient(90deg, #00ffff, #00ff00);
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${(props) => props.percentage > 0 && 'padding-right: 5px;'}
`;

const ProgressPercentage = styled.span`
  color: #0d1117;
  font-size: 0.8em;
  font-weight: bold;
  text-shadow: 0 0 2px rgba(0,0,0,0.5);
`;

const UpdateProgressContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  align-items: center;
`;

const UpdateInput = styled(Input)` // <--- Usando o Input importado
  flex-grow: 1;
  width: auto;
  margin: 0;
`;

const UpdateButton = styled(Button)` // <--- Usando o Button importado
  padding: 8px 15px;
  font-size: 0.9em;
  margin: 0;
  text-transform: none;
`;

function GoalItem({ goal, onUpdateGoalProgress }) {
  const [newProgressValue, setNewProgressValue] = useState('');

  const percentage = goal.targetValue > 0
    ? Math.min((goal.currentProgress / goal.targetValue) * 100, 100).toFixed(0)
    : 0;

  const handleUpdateClick = () => {
    if (newProgressValue.trim() !== '' && !isNaN(newProgressValue)) {
      onUpdateGoalProgress(goal.id, parseFloat(newProgressValue));
      setNewProgressValue('');
    } else {
      alert('Por favor, insira um valor numérico válido para o progresso.');
    }
  };

  return (
    <GoalCard>
      <GoalName>{goal.name}</GoalName>
      <GoalProgressText>
        Progresso: <span>{goal.currentProgress}</span> / <span>{goal.targetValue}</span>
      </GoalProgressText>

      <ProgressBarContainer>
        <ProgressBar percentage={percentage}>
          {percentage > 0 && <ProgressPercentage>{percentage}%</ProgressPercentage>}
        </ProgressBar>
      </ProgressBarContainer>

      <UpdateProgressContainer>
        <UpdateInput
          type="number"
          placeholder="Adicionar progresso"
          value={newProgressValue}
          onChange={(e) => setNewProgressValue(e.target.value)}
          min="0"
          step="any"
        />
        <UpdateButton onClick={handleUpdateClick}>Atualizar</UpdateButton>
      </UpdateProgressContainer>
    </GoalCard>
  );
}

export default GoalItem;