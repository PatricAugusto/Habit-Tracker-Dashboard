// src/components/HabitFrequencyChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

// Registra os componentes necessários do Chart.js
// Isso é importante para que o Chart.js saiba quais tipos de escala e elementos usar.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  background-color: #0d1117; /* Fundo escuro do card */
  border: 1px solid #00ffff; /* Borda ciano neon */
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  color: #e0e0e0;
`;

const NoDataMessage = styled.p`
  color: #777;
  text-align: center;
  font-style: italic;
`;

function HabitFrequencyChart({ habits }) {
  if (!habits || habits.length === 0) {
    return (
      <ChartContainer>
        <NoDataMessage>Adicione hábitos para ver o gráfico de frequência.</NoDataMessage>
      </ChartContainer>
    );
  }

  // Prepara os dados para o gráfico
  const labels = habits.map(habit => habit.name); // Nomes dos hábitos para o eixo X

  // Mapeia os dados de frequência: contando quantos dias cada hábito foi marcado
  // Por enquanto, vamos contar o total de vezes que foi marcado.
  // Poderíamos expandir para frequência semanal/mensal futuramente.
  const dataCounts = habits.map(habit => habit.completedDays.length);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dias Concluídos',
        data: dataCounts,
        backgroundColor: [
          'rgba(0, 255, 255, 0.6)', // Ciano neon
          'rgba(0, 255, 0, 0.6)',   // Verde neon
          'rgba(255, 0, 255, 0.6)', // Magenta neon
          'rgba(255, 255, 0, 0.6)', // Amarelo neon
          'rgba(0, 191, 255, 0.6)', // Azul celeste neon
        ],
        borderColor: [
          'rgba(0, 255, 255, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 255, 0, 1)',
          'rgba(0, 191, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opções para estilizar o gráfico e o tema cyberpunk
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite controlar o tamanho do gráfico
    plugins: {
      title: {
        display: true,
        text: 'Frequência dos Hábitos',
        color: '#00ff00', // Título verde neon
        font: {
          size: 20,
          family: 'Space Mono, monospace',
        },
      },
      legend: {
        display: false, // Não mostra a legenda padrão se houver apenas um dataset
      },
      tooltip: {
        backgroundColor: '#0d1117', // Fundo escuro do tooltip
        titleColor: '#00ff00', // Título do tooltip verde neon
        bodyColor: '#00ffff', // Corpo do tooltip ciano neon
        borderColor: '#00ffff',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 255, 255, 0.1)', // Linhas de grade ciano tênues
          borderColor: '#00ffff', // Cor da borda do eixo X
        },
        ticks: {
          color: '#e0e0e0', // Cor do texto do eixo X
          font: {
            family: 'Space Mono, monospace',
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 255, 255, 0.1)', // Linhas de grade ciano tênues
          borderColor: '#00ffff', // Cor da borda do eixo Y
        },
        ticks: {
          color: '#e0e0e0', // Cor do texto do eixo Y
          font: {
            family: 'Space Mono, monospace',
          },
        },
      },
    },
  };

  return (
    <ChartContainer style={{ height: '400px' }}> {/* Define uma altura para o gráfico */}
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}

export default HabitFrequencyChart;