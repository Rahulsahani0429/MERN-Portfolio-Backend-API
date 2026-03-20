import Skill from '../models/Skill.js';

export const getSkills = async (req, res, next) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        console.error("API Error [Skills]:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
