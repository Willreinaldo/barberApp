import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectTimeProps } from './../../AgendarCortePage.types';  
// Gerador dos próximos 8 dias
const generateNextDays = (count: number) => {
  const today = new Date();
  const days = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push(date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' }));
  }
  return days;
};

const availableTimes = ['13:00', '14:00', '15:00', '16:00', '17:00'];

const Step3SelectTime: React.FC<SelectTimeProps> = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {

  const nextDays = generateNextDays(8); // Gera os próximos 8 dias

  const handleDateSelect = (day: string) => {
    setSelectedDate(day);
    setSelectedTime(null);  
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <Container>
      <h3>Selecione uma data:</h3>
      <DaysContainer>
        {nextDays.map((day, index) => (
          <DayButton
            key={index}
            isSelected={selectedDate === day}
            onClick={() => handleDateSelect(day)}
          >
            {day}
          </DayButton>
        ))}
      </DaysContainer>
      <h3>Selecione um horário:</h3>
      <TimesContainer>
        {availableTimes.map((time, index) => (
          <TimeButton
            key={index}
            isSelected={selectedTime === time}
            onClick={() => handleTimeSelect(time)}
            disabled={!selectedDate } // Desabilita horários se o dia não estiver selecionado
          >
            {time}
          </TimeButton>
        ))}
      </TimesContainer>

      {selectedDate && selectedTime && (
        <p>
          Data e Horário Selecionados: {selectedDate}, às {selectedTime}
        </p>
      )}
    </Container>
  );
};

export default Step3SelectTime;

// Estilização usando styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const DaysContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TimesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const DayButton = styled.button<{ isSelected: boolean }>`
  padding: 10px;
  border: 1px solid #0051b1;
  background-color: ${({ isSelected }) => (isSelected ? '#0051b1' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#0051b1')};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0041a1;
    color: #fff;
  }
`;

const TimeButton = styled.button<{ isSelected: boolean }>`
  padding: 10px;
  border: 1px solid #0051b1;
  background-color: ${({ isSelected }) => (isSelected ? '#0051b1' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#0051b1')};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0041a1;
    color: #fff;
  }
  &:disabled {
    background-color: #ddd;
    color: #aaa;
    cursor: not-allowed;
  }
`;