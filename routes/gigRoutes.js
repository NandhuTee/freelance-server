import express from 'express';
import {
  createGig,
  updateGig,
  deleteGig,
 getGigById,
  getAllGigs
} from '../controllers/gigController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createGig);
router.put('/:id', authMiddleware, updateGig);
router.delete('/:id', authMiddleware, deleteGig);
router.get('/:id', getGigById,);
router.get('/', getAllGigs);

export default router;
