// Step4Review.tsx
import React from 'react';
 import {ScheduleConfirmation} from './Step4Review.styles';
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
      <h3>Revise seu agendamento:</h3>
      {selectedBarber && <p>Profissional: {selectedBarber.name}</p>}
      <p>Serviços Selecionados: {selectedServices.map((s) => s.name).join(' + ')}</p>
      <p>
        Data e horário: {selectedTime}
      </p>
      <p>Preço total: R$: {totalPrice},00</p>
      <p>Alguma observação:</p>
      <textarea
        rows={4}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Se for necessário, nos informe algum detalhe ou dúvida pertinente"
      />
      <button onClick={handleConfirm}>Concluir Agendamento</button>
    </ScheduleConfirmation>
  );
};

export default Step4Review;