const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(7777, () => {
    console.log('Express running on port 7777')
})