const router = require("express").Router();
const User = require("../models/User");
const Document = require("../models/Document");

// All User Route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i"); //makes searched query case insensitive
  }
  try {
    let users = await User.find(searchOptions)
      .sort({ createdAt: "desc" })
      .limit(15)
      .exec();
    //   can remove limit
    res.status(200).json({
      users: users,
      searchOptions: req.query,
    });
  } catch(err) {
    // console.log(err);
    res.status(500).json(err) 
  }
});

// Single User Route
router.get('/:id', async(req, res) => {
    try {
        const limitOfDocuments = 6;
        const user = await User.findById(req.params.id)
        const documents = await Document.find({
            user: user.id
        }).limit(limitOfDocuments).exec()

        res.status(200).json({
            user: user,
            documentsByUser: documents
        })

    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router
