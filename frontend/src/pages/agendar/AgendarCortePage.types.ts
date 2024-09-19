// types.ts
import { Dispatch, SetStateAction } from 'react';

export interface Barber {
    id: number;
    name: string;
    photo: string;
  }
  
  export interface Service {
    id: number;
    name: string;
    price: number;
  }
  
  export interface SelectTimeProps {
    selectedDate: string | null;
    setSelectedDate: React.Dispatch<React.SetStateAction<string | null>>;
    selectedTime: string | null;
    setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
  }

  export interface BookedSlot {
    date: string;
    time: string;
    service: string;
  }
  
  export interface Step4ReviewProps {
    selectedBarber: Barber | null;  
    selectedServices: Service[];
    selectedDate: string | null;
    selectedTime: string | null;
    totalPrice: number;
    comments: string;
    setComments: (comments: string) => void;
    handleConfirm: () => void;
  }