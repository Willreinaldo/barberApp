// Step4Review.tsx
import React from 'react';
import { ScheduleConfirmation, StyledButton, ButtonContainer,
   Textarea, InfoContainer, InfoItem, InfoContent, InfoTitle } from './Step4Review.styles';
import { Step4ReviewProps } from './../../AgendarCortePage.types';


const Step4Review: React.FC<Step4ReviewProps> = ({
  selectedBarber,
  selectedServices,
  selectedDate,
  selectedTime,
  totalPrice,
  comments,
  setComments,
  handleConfirm,

}) => {
  return (
    <ScheduleConfirmation>
    <h2>Revise seu agendamento:</h2>
    <InfoContainer>
      <InfoItem>
        <InfoTitle>Profissional:</InfoTitle>
        {selectedBarber && <InfoContent>{selectedBarber.name}</InfoContent>}
      </InfoItem>
      <InfoItem>
        <InfoTitle>Serviços Selecionados:</InfoTitle>
        <InfoContent>{selectedServices.map((s) => s.name).join(' + ')}</InfoContent>
      </InfoItem>
      <InfoItem>
        <InfoTitle>Data e horário:</InfoTitle>
        <InfoContent>{selectedTime} | {selectedDate}</InfoContent>
        
      </InfoItem>
      <InfoItem>
        <InfoTitle>Preço total:</InfoTitle>
        <InfoContent>R$: {totalPrice},00</InfoContent>
      </InfoItem>
    </InfoContainer>
    <h2>Alguma observação:</h2>
    <Textarea
      rows={4}
      value={comments}
      onChange={(e) => setComments(e.target.value)}
      placeholder="Se for necessário, nos informe algum detalhe ou dúvida pertinente"
    />
    <ButtonContainer>
      <StyledButton onClick={handleConfirm}>Concluir Agendamento</StyledButton>
    </ButtonContainer>
  </ScheduleConfirmation>

  );
};

export default Step4Review;