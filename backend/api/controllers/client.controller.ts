import { Request, Response } from 'express';
import * as clientService from '../services/client.service';

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await clientService.getAllClients();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener clientes' });
  }
};

export const addClient = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, identifier } = req.body;
    await clientService.createClient({ name, email, phone, identifier});
    res.status(201).json({ message: 'Cliente creado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear cliente' });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  try {
    const { id, name, email, phone, identifier } = req.body;
    await clientService.updateClient({ id, name, email, phone, identifier });
    res.status(200).json({ message: 'Cliente actualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar cliente' });
  }
}

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await clientService.deleteClient(Number(id));
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar cliente' });
  }
}
