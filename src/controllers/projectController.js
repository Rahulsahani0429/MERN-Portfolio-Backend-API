import Project from '../models/Project.js';

export const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        console.error("API Error [Projects]:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
