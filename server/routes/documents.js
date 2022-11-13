const router = require('express').Router()
const User = require("../models/User");
const Document = require("../models/Document");

// All Documents Route
router.get('/', async (req, res) => {
    let query = Document.find()
    if(req.query.title != null && req.query.title != '') {
        query = query.regex('title', new RegExp(req.query.title, 'i'))
    }
    
    try {
        const documents = await query.limit(10).exec();
        res.status(200).json({
            documents: documents,
            searchOptions: req.query
        });
    } catch(err) {
        res.status(500).json(err);
    }
})

// New Document Route
router.get('/new', async (req, res) => {
    // render new doc page after creation -> not sure about its use case
    // console.log("new document route");
})

// Create New Document Route
router.post('/', async (req, res)=>{
    try {
        const title = req.body.title
        const description = req.body.description
        const keywords = req.body.keywords

        if(title == null && title === '') res.send(400).json("Enter Title")
        if(description == null && description === '') res.send(400).json("Enter Title")
        if(keywords.length == 0) res.send(400).json("Enter atleast one keyword")
        // console.log(1);
        const doc = new Document({
            title: req.body.title,
            // user: req.body.user,
            keywords: req.body.keywords,
            description: req.body.description
        })
        // console.log(2);
        // save cover function
        newDoc = await doc.save()
        console.log(newDoc)
        res.status(200).json(newDoc);
    } catch(err) {
        console.log("Cannot create new document!");
        res.status(500).json(err);
    }
})

// View Document Route
router.get("/:id", async (req, res)=>{
    try {
        const doc = await Document.findById(req.params.id).populate('user').exec()
        res.status(200).json({
            document: doc
        })
    } catch(err) {
        // console.log("error getting the document");
        res.status(500).json(err)
    }
})


// Edit Document Route
router.get("/:id/edit", async (req, res)=>{
    try {
        const doc = await Document.findById(req.params.id)
        res.status(200).json({
            document: doc
        })
    } catch(err) {
        // console.log("error getting the document for editing");
        res.status(500).json(err)
    }
})

// Update Document Route
router.put('/:id', async (req, res)=>{
    let updatedDoc
    try {
        const title = req.body.title
        const description = req.body.description
        const keywords = req.body.keywords

        if(title == null && title === '') res.send(400).json("Enter Title")
        if(description == null && description === '') res.send(400).json("Enter Title")
        if(keywords.length == 0) res.send(400).json("Enter atleast one keyword")

        // console.log(1);
        updatedDoc = await Document.findById(req.params.id)
        updatedDoc.title = req.body.title
        updatedDoc.keywords = req.body.keywords
        updatedDoc.description = req.body.description

        // update coverImage function
        
        // console.log(updatedDoc)
        await updatedDoc.save();
        res.status(200).json(updatedDoc);
    } catch(err) {
        if(updatedDoc == null) {
            console.log("Error retrieving doc")
        }else{
            console.log("Cannot update document!");
        }
        res.status(500).json(err);
    }
})

// Delete Document Route
router.delete("/:id", async (req, res) => {
    let document
    try{
        document = await Document.findById(req.params.id)
        await document.remove()
        res.status(200);
        console.log("Document deleted successfully");
    } catch (err) {
        if(document == null){
            console.log("Error retrieving doc")
        }else{
            console.log("Error deleting doc")
        }
        // console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router