import Project from '../models/Project.js';

export const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        next(error);
    }
};
