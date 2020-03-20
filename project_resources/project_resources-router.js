const express = require("express");

const router = express.Router({
    mergeParams: true
  });

const list = require("./project_resources-model")


// GET '/api/projects/:id/projectresources

router.get("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const presource = await list.getProjResources(id);
      res.json(presource);
    
  } catch (error) {
    next(error);
  }
});



  module.exports = router;
