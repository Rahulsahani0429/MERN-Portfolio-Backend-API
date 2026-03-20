import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import { errorHandler } from './src/middlewares/errorMiddleware.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
        "methods": "GET,POST",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }
));
app.use(express.json());

// Routes (to be added)
import profileRoutes from './src/routes/profileRoutes.js';
import projectRoutes from './src/routes/projectRoutes.js';
import skillRoutes from './src/routes/skillRoutes.js';
import experienceRoutes from './src/routes/experienceRoutes.js';
import educationRoutes from './src/routes/educationRoutes.js';
import contactRoutes from './src/routes/contactRoutes.js';

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
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
}

export default app;
