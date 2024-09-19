import * as barberRepository from '../repositories/barber';

export const listBarbers = async () => {
  return barberRepository.getAllBarbers();
};

export const addBarber = async (data) => {
  return barberRepository.createBarber(data);
};

export const editBarber = async (id, data) => {
  return barberRepository.updateBarber(id, data);
};

export const removeBarber = async (id) => {
  return barberRepository.deleteBarber(id);
};