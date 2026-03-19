import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    aboutMe: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    socials: {
        github: String,
        linkedin: String,
        twitter: String
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
