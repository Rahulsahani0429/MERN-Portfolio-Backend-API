import Profile from '../models/Profile.js';

export const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne();
        // console.log("dsjlsad", profile);
        res.json(profile);
    } catch (error) {
        console.error("API Error [Profile]:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
