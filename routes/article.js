const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/article");

//Test Router
router.get("/test-router", ArticleController.test)

router.get("/all-articles",ArticleController.allArticles)

router.post("/save", ArticleController.saveArticle)


module.exports= router