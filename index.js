const express = require('express');

const app = express();

app.use(express.static('NodeApp/html'));

const PORT = process.env.PORT || 8080;
app.listen(PORT);
