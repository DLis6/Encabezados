const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send(req.header('User-Agent'));
});

app.listen(PORT, () => console.log('Listening on port 3000'))
    //app.listen(3000, () => console.log("Listening 3000"));