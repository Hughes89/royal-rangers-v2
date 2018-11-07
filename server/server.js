const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 1337;

// =============================================================================
// MIDDLEARE
// =============================================================================

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

// =============================================================================
// LOGGINS
// =============================================================================

if (!process.env.production) {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// =============================================================================
// ROUTES
// =============================================================================

const routes = require('./config/routes.js');
app.use('/api/', routes);

// =============================================================================
// START SERVER (Listen)
// =============================================================================

app.listen(port, () =>  console.log(`Listening on port ${port}`));