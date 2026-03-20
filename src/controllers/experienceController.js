import Experience from '../models/Experience.js';

export const getExperience = async (req, res, next) => {
    try {
        const experience = await Experience.find().sort({ createdAt: -1 });
        res.json(experience);
    } catch (error) {
        console.error("API Error [Experience]:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
