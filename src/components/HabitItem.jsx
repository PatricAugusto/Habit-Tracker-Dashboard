// src/components/HabitItem.jsx
import React, { useState } from 'react'; // Importa useState
import styled from 'styled-components';
import HabitCalendar from './HabitCalendar'; // Importa o novo componente de calendário

// Container para cada item de hábito
const HabitCard = styled.div`
  background-color: #0d1117;
  border: 1px solid #00ffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
  }
`;

// Nome do hábito
const HabitName = styled.h3`
  color: #00ff00;
  margin: 0;
  font-size: 1.5em;
  text-shadow: 0 0 5px #00ff00;
  cursor: pointer; /* Indica que é clicável para expandir/recolher */
`;

// Contador de sequência
const StreakCounter = styled.p`
  color: #00ffff;
  font-size: 1.1em;
  font-weight: bold;
  margin: 0;
  span {
    font-size: 1.3em;
    color: #ff00ff;
    text-shadow: 0 0 5px #ff00ff;
  }
`;

// Botão para marcar o hábito
const MarkButton = styled.button`
  background-color: ${(props) => (props.isCompleted ? '#00ff00' : '#00ffff')};
  color: #0d1117;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => (props.isCompleted ? '#00e600' : '#00e6e6')};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Botão para mostrar/esconder o calendário
const ToggleCalendarButton = styled(MarkButton)`
  background-color: #ff9900; /* Laranja neon para diferenciar */
  &:hover {
    background-color: #ffaa33;
    box-shadow: 0 5px 15px rgba(255, 153, 0, 0.4);
  }
`;

function HabitItem({ habit, onToggleComplete }) {
  const [showCalendar, setShowCalendar] = useState(false); // Estado para controlar a visibilidade do calendário

  const today = new Date().toDateString();
  const isCompletedToday = habit.completedDays.includes(today);

  return (
    <HabitCard>
      <HabitName onClick={() => setShowCalendar(!showCalendar)}>
        {habit.name} {showCalendar ? '▲' : '▼'} {/* Ícone para indicar expandir/recolher */}
      </HabitName>
      <StreakCounter>
        Sequência: <span>{habit.streak}</span> dias
      </StreakCounter>
      <MarkButton
        onClick={() => onToggleComplete(habit.id)}
        isCompleted={isCompletedToday}
      >
        {isCompletedToday ? 'Hábito Concluído Hoje!' : 'Marcar como Concluído Hoje'}
      </MarkButton>

      <ToggleCalendarButton onClick={() => setShowCalendar(!showCalendar)}>
        {showCalendar ? 'Esconder Calendário' : 'Mostrar Calendário'}
      </ToggleCalendarButton>

      {showCalendar && ( // Renderiza o calendário apenas se showCalendar for true
        <HabitCalendar completedDays={habit.completedDays} />
      )}
    </HabitCard>
  );
}

export default HabitItem;