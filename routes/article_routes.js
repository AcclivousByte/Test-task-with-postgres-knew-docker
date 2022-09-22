var express = require("express");
var router = express.Router();
var article_controller = require("../controller/article_controller");
router.post("/create_article", article_controller.store);
router.get("/articles", article_controller.getArticle);
router.delete("/delete/:id", article_controller.deleteArticle);
router.get("/detail/:id", article_controller.detailArticle);
router.put("/update/:id", article_controller.update);

module.exports = router;
