import React, { useState } from 'react';
import {PageContainer,StepIndicatorContainer, Step, StepLabel, ContentContainer, Button } from './Agendar.styles';

const StepContent = ({ step }: { step: number }) => {
  switch (step) {
    case 1:
      return <div>Escolha o Profissional</div>;
    case 2:
      return <div>Escolha o Serviço</div>;
    case 3:
      return <div>Selecione o Horário</div>;
    case 4:
      return <div>Confirme o Pedido</div>;
    default:
      return null;
  }
};

const Agendar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <PageContainer>
      <StepIndicatorContainer>
        {['Profissional', 'Serviços', 'Horário', 'Confirmar'].map((label, index) => (
          <div key={index}>
            <Step active={currentStep === index + 1}>{index + 1}</Step>
            <StepLabel>{label}</StepLabel>
          </div>
        ))}
      </StepIndicatorContainer>
      <ContentContainer>
        <StepContent step={currentStep} />
        <div>
          {currentStep > 1 && <Button onClick={handlePreviousStep}>Voltar</Button>}
          {currentStep < 4 && <Button onClick={handleNextStep}>Próximo</Button>}
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default Agendar;