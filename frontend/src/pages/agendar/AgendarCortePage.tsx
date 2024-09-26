import React, { useState } from 'react';
import StepIndicator from './steps/StepIndicator/StepIndicator';
import Step1SelectBarber from './steps/step1/Step1SelectBarber';
import Step2SelectServices from './steps/step2/Step2SelectServices';
import Step3SelectTime from './steps/step3/Step3SelectTime';
import Step4Review from './steps/step4/Step4Review';
import { Barber, Service } from './AgendarCortePage.types';
import { useAuthContext } from './../../contexts/AuthContext';
import { ButtonContainer, StyledButton, PageContainer, ErrorMessage } from './AgendarCortePage.styles';
import { formatDate } from '../../utils/formatDate';
import axios from 'axios';

const barbers: Barber[] = [
  { id: 1, name: 'João', photo: '../../assets/barbeiro.png' },
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
  const [errorMessage, setErrorMessage] = useState<string>(''); 

  const { authData } = useAuthContext();

    const userId = authData!.user.id; 
    console.log(userId);
  const isTimeAvailable = async (dateTime: string): Promise<boolean> => {
    try {
      const response = await axios.post(`${apiUrl}/agendar/check`, {
        params: { dateTime: dateTime },
      });
      return response.data.available;
    } catch (error) {
      console.error('Erro ao verificar disponibilidade:', error);
      return false;
    }
  };

  const handleNextStep = async () => {
    // Limpar a mensagem de erro ao mudar de passo
    setErrorMessage('');

    // Verificar a seleção do barbeiro na etapa 1
    if (currentStep === 1 && !selectedBarber) {
      setErrorMessage('Por favor, selecione um barbeiro.');
      return;
    }

    // Verificar a seleção de serviços na etapa 2
    if (currentStep === 2 && selectedServices.length === 0) {
      setErrorMessage('Por favor, selecione ao menos um serviço.');
      return;
    }

    // Verificar a disponibilidade de horário na etapa 3
    if (currentStep === 3) {
      if (!selectedDate || !selectedTime) {
        setErrorMessage('Por favor, selecione uma data e um horário.');
        return;
      }

      const formattedDate = formatDate(selectedDate);
      const appointmentDate = new Date(`${formattedDate}T${selectedTime}:00Z`).toISOString();
      
      const isAvailable = await isTimeAvailable(appointmentDate);
      if (!isAvailable) {
        setErrorMessage('O horário selecionado já está reservado. Por favor, escolha outro horário.');
        return;
      }
    }

    // Avançar para o próximo passo se todas as validações estiverem corretas
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
      setErrorMessage('Por favor, preencha todos os campos antes de confirmar.');
      return;
    }

    const formattedDate = formatDate(selectedDate);
    const appointmentDate = new Date(`${formattedDate}T${selectedTime}:00Z`).toISOString();

    const appointmentData = {
      userId: userId,
      barberId: selectedBarber.id,
      serviceIds: selectedServices.map((service) => service.id),
      date: appointmentDate,
      comments: comments || '',
    };

    try {
      await axios.post(`${apiUrl}/agendar/appointments`, appointmentData);
      window.alert('Agendamento confirmado!');
    } catch (error) {
      setErrorMessage('Erro ao confirmar o agendamento. Tente novamente.');
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
        <>
          <Step3SelectTime
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </>
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </PageContainer>
  );
};

export default AgendarCortePage;
