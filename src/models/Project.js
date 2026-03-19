import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    techStack: {
        type: [String],
        required: true
    },
    githubLink: String,
    liveDemo: String,
    featured: { type: Boolean, default: false }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
