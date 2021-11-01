// load up our shiny new route for users
const accountRoutes = require('./userAccounts');
const heroesRoutes = require('./heroes.js');


const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
    app.get('/', (req, res) => {
    res.send('GG ServerApi Acess OK');
    });

  // run our user route module here to complete the wire up
  accountRoutes(app, fs);
  heroesRoutes(app, fs);

};

// this line is unchanged
module.exports = appRouter;