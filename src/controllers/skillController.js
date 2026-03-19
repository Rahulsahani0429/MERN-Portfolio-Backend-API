import Skill from '../models/Skill.js';

export const getSkills = async (req, res, next) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        next(error);
    }
};
