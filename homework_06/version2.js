// Write routes for the following CRUD operations and use the proper                    //DEPENDENCIES
// HTTP verbs (GET one and all, POST, and DELETE).                                      //INSTANTIATIONS
// ° Test with HTTP Client extension for VSCode.                                        //CONFIGURATIONS
// * Your API accepts and returns JSON data.                                            //MIDDLEWARE -
// * Log all requests to a file access. log using morgan middleware.                    //ROUTES
// ¢ Write a custom middleware to verify if a user passes a valid JSON.                 //ERROR HANDLING-ok
// * Accept cross domain XHR requests using cors middleware.                            //BOOTUP -ok
/*

const jsonValidator = function(req, res, next) {
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
        next('Server requires valid JSON format');
    } else {
        next();
    }
};

module.exports = jsonValidator;

const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

module.exports = morgan('tiny', { stream: accessLogStream });
*/

const express = require('express');
const app = express();
const cors = require('cors');
//const logger = require('./middlewares/logger.js');
//const errorHandler = require('./middlewares/error_handler.js');
//const jsonValidator = require('./middlewares/json_validator.js');
//const gradeRoute = require('./routes/grade_route.js');

const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

//module.exports = morgan('tiny', { stream: accessLogStream });

app.use(cors());

app.use(morgan('tiny', { stream: accessLogStream }));
app.use(express.json());
app.use((req, res, next) => {
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
        next('Server requires valid JSON format');
    } else {
        next();
    }
});

//app.use('/', gradeRoute);

app.use((err, req, res, next) => {
    const statusCode = 500;

    res.status(statusCode).send({
        error: {
            code: statusCode,
            message: err
        }
    })
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening to 3000`));