module.exports = function (express) {
  let router = express.Router();
  let Category = require('../../model/category.model').model;
  let categories = require('../../shared/config/category/category');
  let Util = require('../../shared/util/util');
  let MSG = require('../../shared/messages/messages');

  router.get('/', async (req, res) => {

    try {
      let categories = await Category.find({}).exec();
      if (categories) {
        res.status(200).json({categories: categories})
      }
    } catch (error) {
      return Util.sendHttpResponseMessage(res, MSG.serverError.internalServerError, error);
    }
  });

  router.post('/', async (req, res) => {
    await generateCategoryDb();

    async function generateCategoryDb() {
      let categoryObjectArray = [];

      for (let i=0; i<categories.length; i++) {
        categoryObjectArray.push(await createCategoryObject(categories[i], null));
      }

      res.status(200).json({categories: categoryObjectArray});
    }

    async function createCategoryObject(category, parent) {
      let categoryObject = new Category();
      categoryObject.categoryName = {
        en: category.category_name,
        ge: category.category_name
      };
      categoryObject.friendlyId = {
        en: category.category_name,
        ge: category.category_name
      };
      categoryObject.parentCategory = parent;

      if (category.child_category && category.child_category.length) {
        for (let i=0; i<category.child_category.length; i++) {
          if (category.child_category[i]) {
            console.log('Waiting for ... ', category.child_category[i].category_name);
            await createCategoryObject(category.child_category[i], categoryObject);
          }
        }
      }
      console.log('Saving... ', category.category_name);
      let savedCategory = await categoryObject.save();

      if (parent) {
        parent.childCategories.push(categoryObject);
      }

      return savedCategory;
    }
  });

  return router;
};