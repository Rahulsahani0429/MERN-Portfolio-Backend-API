import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Models
import Profile from './src/models/Profile.js';
import Skill from './src/models/Skill.js';
import Project from './src/models/Project.js';
import Experience from './src/models/Experience.js';
import Education from './src/models/Education.js';
import ContactMessage from './src/models/ContactMessage.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for seeding...');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Profile.deleteMany();
        await Skill.deleteMany();
        await Project.deleteMany();
        await Experience.deleteMany();
        await Education.deleteMany();
        await ContactMessage.deleteMany();

        console.log('Data Cleared!');

        // Read and parse JSON data
        const filePath = path.join(__dirname, 'seedData.json');
        const rawData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(rawData);

        // Insert new data
        await Profile.insertMany(data.profiles);
        await Skill.insertMany(data.skills);
        await Project.insertMany(data.projects);
        await Experience.insertMany(data.experiences);
        await Education.insertMany(data.educations);
        await ContactMessage.insertMany(data.contactmessages);

        console.log('Data Imported Successfuly!');
        process.exit(0);
    } catch (error) {
        console.error(`Error with data import: ${error.message}`);
        process.exit(1);
    }
};

importData();
