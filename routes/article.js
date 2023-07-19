const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/article");

//Test Router
router.get("/test-router", ArticleController.test)

router.get("/all-articles/:last?",ArticleController.allArticles)

router.get("/article/:id",ArticleController.oneArticle)

router.post("/save", ArticleController.saveArticle)


module.exports= router