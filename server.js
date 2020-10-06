// server.js
const express = require('express');
const app = express();
const PORT = 8080;

//api
app.get('/', (req, res) => {
    res.send("API LECOFQ UP!");
});

// Our DB Configuration
require('./src/database');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
const areaRouter = require('./src/api/areas/area.router');
const centroRouter = require('./src/api/centros/centro.router');
app.use('/areas', areaRouter);
app.use('/centros', centroRouter);

router = express.Router();
// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});