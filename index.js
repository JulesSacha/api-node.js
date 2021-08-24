const express = require('express');
const app = express();

require("./models/dbConfig.js");
const postsRoutes = require('./routes/postsController.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');



mongoose.set('useFindAndModify', false)
;
app.use(bodyParser.json());
app.use(cors());

app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started : 5500'));

