import express from 'express';
import * as clientController from '../controllers/client.controller';

const router = express.Router();
// Define the routes for the client resource
router.get('/', clientController.getClients);
router.post('/', clientController.addClient);
router.put('/', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

export default router;