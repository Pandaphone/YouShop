require('dotenv').config();
const Express = require('express');
const app = Express();

app.get('/api', (req, res) => {
    res.send('Reached YouShop api');
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
