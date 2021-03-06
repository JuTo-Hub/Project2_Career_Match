var db = require("../../models");

var router = require("express").Router();

// GET route for getting all of the JobOpenings
router.get("/all", function (req, res) {
  console.log("This is working");
  db.JobOpening.findAll({}).then(function (dbJobOpening) {
    res.json(dbJobOpening);
  });
});

router.get("/", function (req, res) {
  console.log("api/jobOpenings was hit");
  db.JobOpening.findAll({}).then(function (dbJobOpening) {
    res.json(dbJobOpening)
  });
});

router.post("/new", function (req, res) {
  console.log("New Job:");
  console.log(req.body);
  db.JobOpening.create({
    jobTitle: req.body.jobTitle,
    co_name: req.body.co_name,
    jobLocation: req.body.jobLocation,
    recruiter_email: req.body.recruiter_email,
    recruiter_phone: req.body.recruiter_phone
  });
});
// DELETE route for deleting JobOpenings
router.delete("/:id", function (req, res) {
  db.JobOpening.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbJobOpening) {
    res.json(dbJobOpening);
  });
});

// PUT route for updating JobOpenings
router.put("/", function (req, res) {
  db.JobOpening.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbJobOpening) {
      res.json(dbJobOpening);
    });
});



module.exports = router;