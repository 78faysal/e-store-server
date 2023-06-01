const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('This is server of e-store site');
})

app.listen(port, () => {
    console.log('listening on port', port);
});