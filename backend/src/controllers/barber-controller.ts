import * as barberService from '../services/barber-service';
import { createBarberSchema } from '../schemas/admin-schemas';
import { validateSchema } from '../middlewares/validate-schema';

export const listBarbers = async (req, res) => {
  try {
    const barbers = await barberService.listBarbers();
    res.json(barbers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to list barbers' });
  }
};

export const addBarber = [validateSchema(createBarberSchema), async (req, res) => {
  try {
    const barber = await barberService.addBarber(req.body);
    res.status(201).json(barber);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create barber' });
  }
}];

export const editBarber = async (req, res) => {
  try {
    const barber = await barberService.editBarber(parseInt(req.params.id), req.body);
    res.json(barber);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update barber' });
  }
};

export const removeBarber = async (req, res) => {
  try {
    await barberService.removeBarber(parseInt(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete barber' });
  }
};