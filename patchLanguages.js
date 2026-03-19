// One-time patch script: remove Java, C (and any other Languages entries)
// from the live DB and replace with only JavaScript.
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Skill from './src/models/Skill.js';
import connectDB from './src/config/db.js';

dotenv.config();

const patch = async () => {
    try {
        await connectDB();

        // Delete ALL existing Languages entries
        const deleted = await Skill.deleteMany({ category: 'Languages' });
        console.log(`Deleted ${deleted.deletedCount} Language skill(s)`);

        // Insert only JavaScript
        await Skill.create({
            name: 'JavaScript',
            category: 'Languages',
            icon: 'javascript'
        });
        console.log('Added JavaScript to Languages');

        console.log('Patch complete ✓');
        process.exit(0);
    } catch (error) {
        console.error('Patch failed:', error.message);
        process.exit(1);
    }
};

patch();
