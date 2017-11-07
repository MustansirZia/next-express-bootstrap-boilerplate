const app = require('express')();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const next = require('./next');

// Put in place textbook middlewares for express.
if (process.env.NODE_ENV !== 'production') {
    // app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const start = async (port) => {
    // Couple Next.js with our express server.
    // app and handle from "next" will now be available as res.app and res.handle.
    await next(app);

    // Normal routing, if you need it.
    // Use your SSR logic here.
    // Even if you don't do explicit routing the pages inside app/pages
    // will still get rendered as per their normal route.
    app.get('/main', (req, res) => res.app.render(req, res, '/', {
        routeParam: req.params.routeParam
    }));

    app.listen(port);
};

// Start the express server.
start(9001);
