const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // middleware to parse JSON

app.get('/api/hello', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'api working'
    });
});

app.get('/api/users', (req, res) => {
    const name = req.query.name || 'guest';
    res.json({
        message: `welcome ${name}`,
    });
});

app.post('/api/login', (req, res) => {
    const {email, password} = req.body;
    res.json({
        email: email,
    }); 
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
