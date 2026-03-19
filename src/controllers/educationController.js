import Education from '../models/Education.js';

export const getEducation = async (req, res, next) => {
    try {
        const education = await Education.find().sort({ createdAt: -1 });
        res.json(education);
    } catch (error) {
        next(error);
    }
};
