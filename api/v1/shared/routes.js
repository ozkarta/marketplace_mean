module.exports = function (express) {
  var router = express.Router();
  var passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  let userController = require('../controller/user.controller')(express);
  // Shared
  let categoryController = require('../controller/shared/category.controller')(express);
  //__________________________________
  router.use('/users', userController);


  router.use('/shared/categories', categoryController);

  return router;
};
