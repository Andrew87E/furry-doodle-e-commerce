const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {

  // on successful request return product categories
  try {
    res.status(200).json(await Category.findAll({ include: Product }))
  } catch (error) {
    console.error(error) // on bad request return the error
    res.status(400).json(error)
  }

});

router.get('/:id', async (req, res) => {

  // on successful request find the id of the request in the category models and return the products 
  try {
    res.status(200).json(await Category.findOne({
      where: {
        id: req.params.id
      },
      include: Product
    }))
  } catch (error) {
    console.log(error)
    res.status(400)
  }

});

router.post('/', (req, res) => {
  // create a new category
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
