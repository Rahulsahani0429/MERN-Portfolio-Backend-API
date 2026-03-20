import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import { errorHandler } from './src/middlewares/errorMiddleware.js';

// Load env vars
dotenv.config();

const app = express();

// Ensure database is connected before handling any requests in serverless environments
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error("Database Connection Failed", error);
        res.status(500).json({ message: "Server error: Database connection failed" });
    }
});

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        callback(null, true);
    },
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(express.json());

// Routes (to be added)
import profileRoutes from './src/routes/profileRoutes.js';
import projectRoutes from './src/routes/projectRoutes.js';
import skillRoutes from './src/routes/skillRoutes.js';
import experienceRoutes from './src/routes/experienceRoutes.js';
import educationRoutes from './src/routes/educationRoutes.js';
import contactRoutes from './src/routes/contactRoutes.js';
app.get("/", (req, res) => {
    res.send("Backend API is running 🚀");
});

app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/contact', contactRoutes);

// Error Middleware
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, async () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
        await connectDB();
    });
}

export default app;
