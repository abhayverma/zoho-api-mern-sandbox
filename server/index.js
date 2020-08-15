const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const globalConfig = require('./global-config.json');

const zohoRouter = require('./routes/zoho-router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/zoho', zohoRouter);

app.listen(globalConfig.api.port, () => console.log(`Server running on port ${globalConfig.api.port}`));
