// routes/celebrities.js

const router = require('express').Router();

const Celebrity = require('../models/celebrity.js');

// GET route to retrieve and display all the books
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);

      res.render('celebrities/index', {celebrities: allTheCelebritiesFromDB});
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);

      // Call the error-middleware 
      next(error);
    });
});

router.get("/celebrities/newCelebrity", (req, res) => 
    res.render("celebrities/newCelebrity")
    );

router.get('/celebrities/:celebrityId', (req, res, next) => {
    const { celebrityId } = req.params;
   
    Celebrity.findById(celebrityId)
      .then(theCelebrity => res.render('celebrities/show', { celebrities: theCelebrity }))
      .catch(error => {
        console.log('Error while retrieving celebrity details: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

  
router.post("/celebrities/newCelebrity", (req, res) => {
    //console.log(req.body);
    const {celName, occupation, catchPhrase}= req.body;
    Celebrity.create({celName, occupation, catchPhrase})
    .then(newCelebrity => res.render('celebrities/newCelebrity', {celebrities: newCelebrity}))
    .catch(error => next(error));
});

router.post("/celebrities/:celebrityId/delete", (req, res) => {
    const celebrityId = req.params._id;
    Celebrity.findByIdAndDelete(celebrityId)
    .then(() => res.redirect('celebrities/index'))
    .catch(error => {
        console.log(`Error deleting the celebrity`)
        next(error)
    })
})

router.get("/celebrities/:celebrityId/edit", (req, res)=> {
  const celebrityId = req.params._id;
  const {celName, occupation, catchPhrase} = req.body;

  Celebrity.findByIdAndUpdate(celebrityId)
  .then(celebrityToEdit=>{
    res.render('celebrities/celebritiesUpdate.hbs', {celebrity: celebrityToEdit});
  })
  .catch(error => next(error)); 
})



module.exports = router;

