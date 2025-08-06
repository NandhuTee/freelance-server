import Gig from '../models/Gig.js';



export const createGig = async (req, res) => {
  try {
    const gig = new Gig({
      ...req.body,
      userId: req.userId  
    });

    const savedGig = await gig.save();
    res.status(201).json(savedGig);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create gig', error: error.message });
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
    const gig = await Gig.findById(req.params.id);

    if (!gig) return res.status(404).json({ message: 'Gig not found' });

    if (gig.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Access denied. Not owner of this gig.' });
    }

    const updatedGig = await Gig.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGig);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update gig', error: error.message });
  }
};

export const deleteGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) return res.status(404).json({ message: 'Gig not found' });

    if (gig.userId.toString() !== req.userId) {
      return res.status(403).json({ message: 'Access denied. Not owner of this gig.' });
    }

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Gig deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete gig', error: error.message });
  }
};
