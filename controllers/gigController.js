import Gig from '../models/Gig.js';

export const createGig = async (req, res) => {
  try {
    const gig = new Gig({ ...req.body, userId: req.user.id });
    const saved = await gig.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create gig', error: err.message });
  }
};

export const getAllGigs = async (req, res) => {
  try {
    const gigs = await Gig.find().populate("userId", "name role");
    res.status(200).json(gigs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch gigs", error: err.message });
  }
}



export const getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id).populate("userId", "name role");
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }
    res.status(200).json(gig);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch gig", error: err.message });
  }
};


export const updateGig = async (req, res) => {
  try {
    const updated = await Gig.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update gig', error: err.message });
  }
};

export const deleteGig = async (req, res) => {
  try {
    await Gig.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gig deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete gig', error: err.message });
  }
};
