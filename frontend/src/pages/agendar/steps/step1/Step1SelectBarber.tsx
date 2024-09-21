import React from 'react';
import {BarberOption} from './Step1SelectBarber.styles';

import { Barber } from './../../AgendarCortePage.types';

interface Step1SelectBarberProps {
  barbers: Barber[];
  selectedBarber: Barber | null;
  setSelectedBarber: (barber: Barber) => void;
}

const Step1SelectBarber: React.FC<Step1SelectBarberProps> = ({ barbers, selectedBarber, setSelectedBarber }) => {
  return (
    <div>
      {barbers.map((barber) => (
        <BarberOption
          key={barber.id}
          selected={selectedBarber === barber}
          onClick={() => setSelectedBarber(barber)}
        >
          <img src={barber.photo} alt={barber.name} />
          {barber.name}
        </BarberOption>
      ))}
    </div>
  );
};

export default Step1SelectBarber;