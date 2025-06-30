// src/App.jsx
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitItem from './components/HabitItem';
import GoalForm from './components/GoalForm';
import GoalItem from './components/GoalItem';
import HabitFrequencyChart from './components/HabitFrequencyChart';

// --- Estilos Globais e Background 3D ---
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
    background: #0a0a1a; /* Fundo base muito escuro */
    color: #e0e0e0;
    min-height: 100vh; /* Garante que o body ocupe a altura total da viewport */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente o conteúdo principal */
    align-items: center; /* Centraliza horizontalmente o conteúdo principal */
    overflow-x: hidden; /* Evita rolagem horizontal indesejada */

    /* Efeito de background cyberpunk com múltiplas camadas e brilhos */
    background-image:
      radial-gradient(circle at 10% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), /* Brilho ciano sutil */
      radial-gradient(circle at 90% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), /* Brilho magenta sutil */
      linear-gradient(135deg, #0d1117 25%, transparent 25%), /* Padrão de grade 1 */
      linear-gradient(225deg, #0d1117 25%, transparent 25%), /* Padrão de grade 2 */
      linear-gradient(45deg, #0d1117 25%, transparent 25%), /* Padrão de grade 3 */
      linear-gradient(315deg, #0d1117 25%, #1a1a2e 25%); /* Padrão de grade 4 */
    background-size: 80px 80px; /* Tamanho das "células" da grade */
    background-position: 0 0, 0 0, 40px 40px, 40px 40px, 0 0, 0 0; /* Desloca as grades para formar o padrão */
  }

  /* Estilos para o scrollbar (mantém os mesmos) */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0d1117;
  }
  ::-webkit-scrollbar-thumb {
    background: #00ffff;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #00ff00;
  }
`;

// --- Novo Container Principal para Centralizar a Aplicação ---
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Ocupa a largura total para centralização */
  max-width: 900px; /* Limita a largura máxima da aplicação */
  margin: 0 auto; /* Centraliza o container na página */
  padding: 20px;
  box-sizing: border-box; /* Inclui padding e border no width/height */
  min-height: 100vh; /* Garante que o container ocupe toda a altura */
`;

// Containers reutilizáveis para listas (mantém os mesmos)
const SectionContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1a1a2e;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  border: 1px solid #00ffff;
`;

const SectionTitle = styled.h2`
  color: #00ff00;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  text-shadow: 0 0 10px #00ff00;
`;

function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('goals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addHabit = (habitName) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      completedDays: [],
      streak: 0,
    };
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const toggleHabitComplete = (id) => {
    const today = new Date().toDateString();
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === id) {
          const isCompletedToday = habit.completedDays.includes(today);
          let newCompletedDays;
          let newStreak = habit.streak;

          if (isCompletedToday) {
            newCompletedDays = habit.completedDays.filter((date) => date !== today);
            newStreak = calculateStreak(newCompletedDays);
          } else {
            newCompletedDays = [...habit.completedDays, today].sort((a, b) => new Date(a) - new Date(b));
            newStreak = calculateStreak(newCompletedDays);
          }

          return {
            ...habit,
            completedDays: newCompletedDays,
            streak: newStreak,
          };
        }
        return habit;
      })
    );
  };

  const calculateStreak = (completedDays) => {
    if (completedDays.length === 0) return 0;
    const sortedDates = completedDays.map(dateStr => new Date(dateStr)).sort((a, b) => a - b);
    let currentStreak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let lastCompletedDate = sortedDates[sortedDates.length - 1];
    lastCompletedDate.setHours(0, 0, 0, 0);
    const oneDay = 24 * 60 * 60 * 1000;

    if (lastCompletedDate.getTime() === today.getTime()) {
      currentStreak = 1;
      let checkDate = new Date(today.getTime() - oneDay);
      for (let i = sortedDates.length - 2; i >= 0; i--) {
        let prevDate = sortedDates[i];
        prevDate.setHours(0, 0, 0, 0);
        if (prevDate.getTime() === checkDate.getTime()) {
          currentStreak++;
          checkDate = new Date(checkDate.getTime() - oneDay);
        } else {
          break;
        }
      }
    } else if (lastCompletedDate.getTime() === (today.getTime() - oneDay)) {
        currentStreak = 1;
        let checkDate = new Date(today.getTime() - oneDay * 2);
        for (let i = sortedDates.length - 2; i >= 0; i--) {
          let prevDate = sortedDates[i];
          prevDate.setHours(0, 0, 0, 0);
          if (prevDate.getTime() === checkDate.getTime()) {
            currentStreak++;
            checkDate = new Date(checkDate.getTime() - oneDay);
          } else {
            break;
          }
        }
    } else {
        currentStreak = 0;
    }
    return currentStreak;
  };

  const addGoal = (name, target) => {
    const newGoal = {
      id: Date.now(),
      name: name,
      targetValue: target,
      currentProgress: 0,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const updateGoalProgress = (id, valueToAdd) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.id === id) {
          const newProgress = Math.min(
            goal.currentProgress + valueToAdd,
            goal.targetValue
          );
          return {
            ...goal,
            currentProgress: newProgress,
          };
        }
        return goal;
      })
    );
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer> {/* Envolve todo o conteúdo principal */}
        <Header />
        <main>
          <HabitForm onAddHabit={addHabit} />

          <SectionContainer>
            <SectionTitle>Seus Hábitos</SectionTitle>
            {habits.length === 0 ? (
              <p style={{ color: '#e0e0e0', textAlign: 'center' }}>
                Nenhum hábito cadastrado ainda. Adicione um para começar!
              </p>
            ) : (
              habits.map((habit) => (
                <HabitItem
                  key={habit.id}
                  habit={habit}
                  onToggleComplete={toggleHabitComplete}
                />
              ))
            )}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Análise de Hábitos</SectionTitle>
            <HabitFrequencyChart habits={habits} />
          </SectionContainer>

          <GoalForm onAddGoal={addGoal} />

          <SectionContainer>
            <SectionTitle>Suas Metas</SectionTitle>
            {goals.length === 0 ? (
              <p style={{ color: '#e0e0e0', textAlign: 'center' }}>
                Nenhuma meta definida ainda. Defina uma para acompanhar seu progresso!
              </p>
            ) : (
              goals.map((goal) => (
                <GoalItem
                  key={goal.id}
                  goal={goal}
                  onUpdateGoalProgress={updateGoalProgress}
                />
              ))
            )}
          </SectionContainer>
        </main>
      </AppContainer> {/* Fecha o AppContainer */}
    </>
  );
}

export default App;