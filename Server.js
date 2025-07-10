const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Simulated database of doctors
const doctors = [
    { name: 'Dr. John Smith', specialty: 'Cardiologist', city: 'New York', description: 'Experienced in treating heart conditions with over 15 years of expertise.' },
    { name: 'Dr. Sarah Johnson', specialty: 'Pediatrician', city: 'Los Angeles', description: 'Specializes in child healthcare with a compassionate approach.' },
    { name: 'Dr. Michael Lee', specialty: 'Neurologist', city: 'Chicago', description: 'Expert in neurological disorders with advanced treatment methods.' }
];

// Search endpoint
app.post('/search', (req, res) => {
    const { doctor, city } = req.body;
    let results = doctors;
    if (doctor) results = results.filter(d => d.name.toLowerCase().includes(doctor.toLowerCase()));
    if (city) results = results.filter(d => d.city.toLowerCase().includes(city.toLowerCase()));
    res.json({ success: true, results });
});

// Contact endpoint
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you would typically save to a database or send an email
    console.log('Contact Form Submission:', { name, email, message });
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
