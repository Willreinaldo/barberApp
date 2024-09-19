import * as serviceRepository from '../repositories/services'

export const listServices = async () => {
  return serviceRepository.getAllServices();
};

export const addService = async (data) => {
  return serviceRepository.createService(data);
};

export const editService = async (id, data) => {
  return serviceRepository.updateService(id, data);
};

export const removeService = async (id) => {
  return serviceRepository.deleteService(id);
};