const express = require('express');
const app = express();
app.use(express.static('./dist/takehome'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/takehome/' }),
);

app.listen(process.env.PORT || 8080);