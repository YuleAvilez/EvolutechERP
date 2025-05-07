import { db } from '../config/db';
import { Client } from '../models/client.model';

export const getAllClients = async (): Promise<Client[]> => {
  const pool = await db;
  const result = await pool.request().query('SELECT * FROM Clients');
  return result.recordset;
};

export const createClient = async (clientData: Omit<Client, 'id'>): Promise<void> => {
  const pool = await db;
  const newClient = {
    ...clientData,
  };
  await pool.request()
    .input('Name', newClient.name)
    .input('Email', newClient.email)
    .input('Phone', newClient.phone)
    .input('Identifier', newClient.identifier)
    .query(`
      INSERT INTO Clients (Name, Email, Phone, Identifier)
      VALUES (@Name, @Email, @Phone, @Identifier)
    `);
};

export const updateClient = async (clientData: Client): Promise<void> => {
  const pool = await db;
  const updatedClient = {
    ...clientData,
  };
  await pool.request()
    .input('Id', updatedClient.id)
    .input('Name', updatedClient.name)
    .input('Email', updatedClient.email)
    .input('Phone', updatedClient.phone)
    .input('Identifier', updatedClient.identifier)
    .query(`
      UPDATE Clients
      SET Name = @Name, Email = @Email, Phone = @Phone, Identifier = @Identifier
      WHERE Id = @Id
    `);
};

export const deleteClient = async (id: number): Promise<void> => {
  const pool = await db;
  await pool.request()
    .input('Id', id)
    .query(`
      DELETE FROM Clients
      WHERE Id = @Id
    `);
};

