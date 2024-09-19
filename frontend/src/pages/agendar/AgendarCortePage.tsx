import React, { useState } from 'react';
import StepIndicator from './steps/StepIndicator/StepIndicator';
import Step1SelectBarber from './steps/step1/Step1SelectBarber';
import Step2SelectServices from './steps/step2/Step2SelectServices';
import Step3SelectTime from './steps/step3/Step3SelectTime';
import Step4Review from './steps/step4/Step4Review';
import { Barber, Service } from './AgendarCortePage.types';
import { ButtonContainer, StyledButton, PageContainer } from './AgendarCortePage.styles';
import { formatDate } from '../../utils/formatDate'; 
import axios from 'axios';

const barbers: Barber[] = [
  { id: 1, name: 'João', photo: '/images/joao.png' },
  { id: 2, name: 'Nathan', photo: '/images/nathan.png' },
  { id: 3, name: 'Lucas', photo: '/images/lucas.png' },
];

const services: Service[] = [
  { id: 1, name: 'Barba', price: 15 },
  { id: 2, name: 'Cabelo', price: 20 },
];

const AgendarCortePage: React.FC = () => {

  const apiUrl = process.env.REACT_APP_API_URL;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [comments, setComments] = useState<string>('');

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

  const toggleServiceSelection = (service: Service) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const totalPrice = selectedServices.reduce((acc, service) => acc + service.price, 0);

    const handleConfirm = async () => {
    if (!selectedBarber || !selectedDate || !selectedTime || selectedServices.length === 0) {
      window.alert('Por favor, preencha todos os campos antes de confirmar.');
      return;
    }

    console.log(selectedDate);
    const formattedDate  = formatDate(selectedDate);
    console.log(formattedDate);

    const appointmentDate = new Date(`${formattedDate}T${selectedTime}:00Z`).toISOString();
    console.log(appointmentDate);

    const appointmentData = {
      userId: 1,
      barberId: selectedBarber.id,
      serviceIds: selectedServices.map(service => service.id),
      date: appointmentDate,
      comments: comments || '', // Se não houver comentário, envia uma string vazia
    };

    try {
      await axios.post(`${apiUrl}/agendar/appointments`, appointmentData);
      window.alert('Agendamento confirmado!');
    } catch (error) {
      window.alert('Erro ao confirmar o agendamento. Tente novamente.');
    }
  };

  return (
    <PageContainer>
      <StepIndicator currentStep={currentStep} />
      {currentStep === 1 && (
        <Step1SelectBarber
          barbers={barbers}
          selectedBarber={selectedBarber}
          setSelectedBarber={setSelectedBarber}
        />
      )}
      {currentStep === 2 && (
        <Step2SelectServices
          services={services}
          selectedServices={selectedServices}
          toggleServiceSelection={toggleServiceSelection}
        />
      )}
      {currentStep === 3 && (
        <Step3SelectTime
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
      {currentStep === 4 && (
        <Step4Review
          selectedBarber={selectedBarber}
          selectedServices={selectedServices}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          totalPrice={totalPrice}
          comments={comments}
          setComments={setComments}
          handleConfirm={handleConfirm}  
        />
      )}
      <ButtonContainer>
        {currentStep > 1 && (
          <StyledButton onClick={handlePreviousStep}>Voltar</StyledButton>
        )}
        {currentStep < 4 && (
          <StyledButton onClick={handleNextStep}>Próximo</StyledButton>
        )}
      </ButtonContainer>
    </PageContainer>
  );
};

export default AgendarCortePage;
