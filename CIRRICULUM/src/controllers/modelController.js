// controllers/modelController.js
const axios = require('axios');

// Function to get curriculum prediction from the model
const getCurriculumPrediction = async ({ jobTitle, skills, file }) => {
    try {
        // Define the data object to send to the model
        const data = {
            jobTitle: jobTitle || null,
            skills: skills ? skills.split(',').map(skill => skill.trim()) : [],
            file: file || null,
        };

        // Make a POST request to the model's API (mocking it for now)
        const response = await axios.post(process.env.MODEL_API_URL, data);

        // Return the prediction data
        return response.data;

    } catch (error) {
        console.error('Error interacting with model API:', error);
        throw new Error('Failed to get prediction from model');
    }
};

module.exports = {
    getCurriculumPrediction,
};
