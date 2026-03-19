import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['Frontend', 'Backend', 'Languages', 'Tools'], required: true },
    icon: { type: String }
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
