// server.js
const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv');
const { getCurriculumPrediction } = require('./controllers/modelController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Set up Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// POST route for receiving user input (job title, skills, or file)
app.post('  http://localhost:3000', upload.single('file'), async (req, res) => {
    try {
        const { jobTitle, skills } = req.body;
        let file;

        // If the user uploaded a file, handle the file input
        if (req.file) {
            file = req.file.path;
        }

        // Pass user inputs to the model (via controller function)
        const curriculum = await getCurriculumPrediction({ jobTitle, skills, file });

        // Respond with model prediction
        return res.json({ success: true, data: curriculum });

    } catch (error) {
        console.error("Error generating curriculum", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
