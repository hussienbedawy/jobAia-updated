const express = require("express");
const router = express.Router();
const {ViewJobs , CreateJob,ViewPaginatedJobs } = require("../JobPost/Controller/JobPost.controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.get('/JobPosting', ViewJobs);

router.post('/JobPosting', upload.single("Document") , CreateJob);

// router.get('')
router.get('/JobPosting/paginated', ViewPaginatedJobs);

module.exports = router;
