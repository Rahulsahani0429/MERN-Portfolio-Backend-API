import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Education from '../models/Education.js';
import connectDB from '../config/db.js';

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Profile.deleteMany();
        await Project.deleteMany();
        await Skill.deleteMany();
        await Experience.deleteMany();
        await Education.deleteMany();

        // Seed Profile
        await Profile.create({
            name: 'Rahul Kumar Sahani',
            title: 'MERN Stack Developer | Prompt Engineer',
            bio: 'Focused on building scalable MERN stack applications, designing efficient backend APIs, and leveraging AI with prompt engineering to develop intelligent digital solutions.',
            aboutMe: 'I am a passionate MERN Stack Developer and Prompt Engineer with experience building responsive and scalable web applications. I specialize in developing full-stack solutions using MongoDB, Express.js, React.js, and Node.js, along with working knowledge of MySQL for relational database management.\n\nDuring my Full Stack Web Development Internship at CodeSoft, I worked on building responsive frontend modules and developing backend APIs using modern JavaScript technologies. This experience helped me strengthen my skills in creating efficient and user-friendly applications.\n\nI have also completed coursework from MongoDB University, gaining hands-on experience in database management, data modeling, and backend optimization.\n\nI enjoy solving real-world problems, learning new technologies, and building modern applications that deliver scalable and meaningful user experiences.',
            email: 'rahulcse3212@gmail.com',
            location: 'India',
            socials: {
                github: 'https://github.com/Rahulsahani0429',
                linkedin: 'https://www.linkedin.com/in/rahul-kumar-sahani-4729b274',
                twitter: ''
            }
        });

        // Seed Skills matching the reference categories
        const skills = [
            // Frontend
            { name: 'HTML', category: 'Frontend', icon: 'fab fa-html5' },
            { name: 'CSS', category: 'Frontend', icon: 'fab fa-css3-alt' },
            { name: 'SASS', category: 'Frontend', icon: 'fab fa-sass' },
            { name: 'JavaScript', category: 'Frontend', icon: 'fab fa-js' },
            { name: 'React JS', category: 'Frontend', icon: 'fab fa-react' },
            { name: 'Angular', category: 'Frontend', icon: 'fab fa-angular' },
            { name: 'Redux', category: 'Frontend', icon: 'fas fa-layer-group' },
            { name: 'Next JS', category: 'Frontend', icon: 'fas fa-chevron-right' },
            { name: 'Tailwind CSS', category: 'Frontend', icon: 'fas fa-wind' },
            { name: 'GSAP', category: 'Frontend', icon: 'fas fa-magic' },
            { name: 'Material UI', category: 'Frontend', icon: 'fas fa-cubes' },
            { name: 'Bootstrap', category: 'Frontend', icon: 'fab fa-bootstrap' },

            // Backend
            { name: 'Springboot', category: 'Backend', icon: 'fas fa-leaf' },
            { name: 'Node JS', category: 'Backend', icon: 'fab fa-node-js' },
            { name: 'Express JS', category: 'Backend', icon: 'fas fa-server' },
            { name: 'MySQL', category: 'Backend', icon: 'fas fa-database' },
            { name: 'MongoDB', category: 'Backend', icon: 'fas fa-database' },
            { name: 'Firebase', category: 'Backend', icon: 'fas fa-fire' },
            { name: 'PostgreSQL', category: 'Backend', icon: 'fas fa-database' },

            // Languages
            { name: 'JavaScript', category: 'Languages', icon: 'javascript' },

            // Tools
            { name: 'Git', category: 'Tools', icon: 'fab fa-git-alt' },
            { name: 'GitHub', category: 'Tools', icon: 'fab fa-github' },
            { name: 'VS Code', category: 'Tools', icon: 'fas fa-file-code' },
            { name: 'Postman', category: 'Tools', icon: 'fas fa-envelope-open-text' },
            { name: 'Compass', category: 'Tools', icon: 'fas fa-compass' },
            { name: 'Vercel', category: 'Tools', icon: 'fas fa-caret-up' },
            { name: 'Netlify', category: 'Tools', icon: 'fas fa-globe' },
            { name: 'Figma', category: 'Tools', icon: 'fab fa-figma' }
        ];
        await Skill.insertMany(skills);

        // Seed Experience
        await Experience.create({
            role: 'MERN Stack Intern',
            company: 'Tech Solutions',
            duration: 'Apr 2024 - Oct 2024',
            description: 'Assisted in developing responsive frontend modules and optimized backend APIs using Node.js.',
            isInternship: true
        });

        // Seed Education
        await Education.create({
            degree: 'B.Tech CSE',
            institution: 'Institute of Technology',
            duration: '2021 - 2025',
            score: '7.5 CGPA'
        });

        // Seed Projects
        const projects = [
            {
                title: 'Portfolio Website',
                description: 'Modern and responsive personal portfolio built with the MERN stack.',
                technologies: ['React', 'Node.js', 'MongoDB'],
                githubLink: '#',
                liveDemo: '#',
                featured: true
            },
            {
                title: 'E-Commerce Platform',
                description: 'Full-featured e-commerce platform with payment integration and admin panel.',
                technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                githubLink: '#',
                liveDemo: '#',
                featured: true
            },
            {
                title: 'Blog Application',
                description: 'MERN stack blog app with rich text editor and user authentication.',
                technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                githubLink: '#',
                liveDemo: '#',
                featured: true
            }
        ];
        await Project.insertMany(projects);

        console.log('Data Seeded Successfully');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();
