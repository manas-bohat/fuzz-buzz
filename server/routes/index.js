const router = require("express").Router();
const Document = require("../models/Document");

// home page after login
router.get('/', async (req, res) => {
    let Documents
    // try {
    //     Documents = await Document.find().sort({ createdAt: 'desc' }).limit(10).exec()
    // } catch {
    //     Documents = []
    // }
    // res.status(200).json({documents : Documents})
    
    try {
        Documents = await Document.find().sort({ createdAt: 'desc' }).limit(10).exec()
        res.status(200).json({documents : Documents})
    } catch(err) {
        // Documents = []
        res.status(500).json(err)
    }
    
})

module.exports = router