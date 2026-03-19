import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    role: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String },
    isInternship: { type: Boolean, default: false }
}, { timestamps: true });

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
