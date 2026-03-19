import Profile from '../models/Profile.js';

export const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne();
        // console.log("dsjlsad", profile);
        res.json(profile);
    } catch (error) {
        next(error);
    }
};
