const fs = require('fs');


app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
});