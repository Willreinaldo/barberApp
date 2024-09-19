import React from 'react';
import { Service } from './../../AgendarCortePage.types';
import { ServiceOption } from './Step2SelectServices.styles';
interface Step2SelectServicesProps {
  services: Service[];
  selectedServices: Service[];
  toggleServiceSelection: (service: Service) => void;
}

 
const Step2SelectServices: React.FC<Step2SelectServicesProps> = ({ services, selectedServices, toggleServiceSelection }) => {
  return (
    <div>
      {services.map((service) => (
        <ServiceOption
          key={service.id}
          selected={selectedServices.includes(service)}
          onClick={() => toggleServiceSelection(service)}
        >
          <span>{service.name}</span>
          <span>R$: {service.price},00</span>
        </ServiceOption>
      ))}
    </div>
  );
};

export default Step2SelectServices;