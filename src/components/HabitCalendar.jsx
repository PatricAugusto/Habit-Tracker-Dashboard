// src/components/HabitCalendar.jsx
import React from 'react';
import styled from 'styled-components';

// Estilização do container do calendário
const CalendarContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #1a1a2e; /* Fundo mais escuro */
  border-radius: 8px;
  border: 1px solid #00ffff; /* Borda ciano neon */
  box-shadow: inset 0 0 8px rgba(0, 255, 255, 0.2); /* Sombra interna para profundidade */
`;

// Grade para os dias do calendário
const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 colunas para os dias da semana */
  gap: 5px; /* Espaçamento entre os dias */
`;

// Estilização de cada dia individual
const DayBox = styled.div`
  width: 30px; /* Largura fixa para cada quadrado */
  height: 30px; /* Altura fixa para cada quadrado */
  background-color: ${(props) => (props.isCompleted ? '#00ff00' : '#0d1117')}; /* Verde neon se completo, escuro se não */
  color: ${(props) => (props.isCompleted ? '#0d1117' : '#e0e0e0')}; /* Texto escuro se completo, claro se não */
  border: 1px solid ${(props) => (props.isCompleted ? '#00e600' : '#00ffff')}; /* Borda sutil neon */
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: bold;
  cursor: default; /* Sem cursor de clique */
  transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${(props) => (props.isCompleted ? '0 0 8px rgba(0, 255, 0, 0.5)' : 'none')}; /* Brilho se completo */

  &:hover {
    background-color: ${(props) => (props.isCompleted ? '#00e600' : '#1f2e4a')}; /* Leve mudança no hover */
  }
`;

// Nomes dos dias da semana
const DayName = styled(DayBox)`
  background-color: #00ffff; /* Fundo ciano para os nomes dos dias */
  color: #0d1117; /* Texto escuro para os nomes dos dias */
  font-size: 0.7em;
  cursor: default;
  box-shadow: none;
  border: 1px solid #00ffff;
`;

function HabitCalendar({ completedDays }) {
  // Cria um Set para consultas rápidas de dias completos
  const completedDaysSet = new Set(completedDays);

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Gera os últimos 30 dias para exibir no calendário
  const daysToDisplay = [];
  for (let i = 29; i >= 0; i--) { // Começa 29 dias atrás e vai até hoje
    const date = new Date(today.getTime() - (i * 24 * 60 * 60 * 1000));
    daysToDisplay.push({
      date: date.toDateString(), // Formato para comparação com completedDays
      dayOfMonth: date.getDate(), // Apenas o número do dia
    });
  }

  return (
    <CalendarContainer>
      <DaysGrid>
        {daysOfWeek.map((dayName) => (
          <DayName key={dayName}>{dayName}</DayName>
        ))}
        {daysToDisplay.map((dayInfo) => (
          <DayBox key={dayInfo.date} isCompleted={completedDaysSet.has(dayInfo.date)}>
            {dayInfo.dayOfMonth}
          </DayBox>
        ))}
      </DaysGrid>
    </CalendarContainer>
  );
}

export default HabitCalendar;