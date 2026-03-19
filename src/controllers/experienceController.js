import Experience from '../models/Experience.js';

export const getExperience = async (req, res, next) => {
    try {
        const experience = await Experience.find().sort({ createdAt: -1 });
        res.json(experience);
    } catch (error) {
        next(error);
    }
};
