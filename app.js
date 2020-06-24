const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    path = require('path');

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.listen(process.env.PORT || port);