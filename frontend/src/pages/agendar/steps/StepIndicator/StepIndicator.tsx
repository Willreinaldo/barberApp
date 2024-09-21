import React from 'react';
 import {StepIndicatorContainer, Step, StepLabel} from './StepIndicator.styles';


const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = ['Profissional', 'Serviços', 'Horário', 'Confirmar'];

  return (
    <StepIndicatorContainer>
      {steps.map((label, index) => (
        <div key={index}>
          <Step active={currentStep === index + 1}>{index + 1}</Step>
          <StepLabel>{label}</StepLabel>
        </div>
      ))}
    </StepIndicatorContainer>
  );
};

export default StepIndicator;