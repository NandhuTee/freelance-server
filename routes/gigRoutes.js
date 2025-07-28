import express from 'express';
import {
  createGig,
  getAllGigs,
  getGigById,
  updateGig,
  deleteGig
} from '../controllers/gigController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createGig);         // Create gig
router.get('/', getAllGigs);                      // Get all gigs
router.get('/:id', getGigById);                   // Get single gig
router.put('/:id', verifyToken, updateGig);       // Update gig
router.delete('/:id', verifyToken, deleteGig);    // Delete gig
router.get('/', getAllGigs);


export default router;
