const pg = require("knex")({ client: "pg" });
var apiResponse = require("../api-response");
const dotenv = require("dotenv");
dotenv.config();
const knex = require("../database/db");
//Register Users
exports.store = async (req, res) => {
  try {
    const { heading, content } = req.body;
    if (!heading) {
      return res
        .status(422)
        .send(apiResponse.customResponse("Heading is required", 422, {}));
    }
    if (!content) {
      return res
        .status(422)
        .send(apiResponse.customResponse("Content is required", 422, {}));
    }
    knex("articles")
      .insert({ heading: heading, content: content })
      .then(function (result) {
        return res
          .status(422)
          .send(
            apiResponse.customResponse("Record Added Successfully", 200, {})
          );
      });
  } catch (err) {
    return res
      .status(422)
      .send(
        apiResponse.customResponse("Something went wrong", 422, err.message)
      );
  }
};

exports.getArticle = async function (req, res, next) {
  try {
    knex("articles")
      .select()
      .then((articles) => {
        return res
          .status(200)
          .send(
            apiResponse.customResponse(
              "Record Fetched Successfully!",
              200,
              articles
            )
          );
      })
      .catch((err) => {
        console.error(err);
        return res.json({
          success: false,
          message: "An error occurred, please try again later.",
        });
      });
  } catch (e) {
    apiResponse.customResponse("Something went wrong", 422, e.message);
  }
};

exports.deleteArticle = async function (req, res, next) {
  try {
    let { id } = req.params;
    knex("articles")
      .where("id", id)
      .del()
      .then((articles) => {
        return res
          .status(200)
          .send(
            apiResponse.customResponse("Record Deleted Successfully!", 200, {})
          );
      })
      .catch((err) => {
        console.error(err);
        return res.json({
          success: false,
          message: "An error occurred, please try again later.",
        });
      });
  } catch (e) {
    apiResponse.customResponse("Something went wrong", 422, e.message);
  }
};
exports.detailArticle = async function (req, res, next) {
  try {
    let { id } = req.params;
    knex("articles")
      .where("id", id)
      .first()
      .then((article) => {
        return res
          .status(200)
          .send(
            apiResponse.customResponse(
              "Record Fetched Successfully!",
              200,
              article
            )
          );
      })
      .catch((err) => {
        console.error(err);
        return res.json({
          success: false,
          message: "An error occurred, please try again later.",
        });
      });
  } catch (e) {
    apiResponse.customResponse("Something went wrong", 422, e.message);
  }
};

exports.update = async (req, res) => {
  try {
    let { id } = req.params;
    const { heading, content } = req.body;
    if (!heading) {
      return res
        .status(422)
        .send(apiResponse.customResponse("Heading is required", 422, {}));
    }
    if (!content) {
      return res
        .status(422)
        .send(apiResponse.customResponse("Content is required", 422, {}));
    }
    knex("articles")
      .where("id", id)
      .update({ heading: heading, content: content })
      .then(function (result) {
        return res
          .status(422)
          .send(
            apiResponse.customResponse("Record Updated Successfully", 200, {})
          );
      });
  } catch (err) {
    return res
      .status(422)
      .send(
        apiResponse.customResponse("Something went wrong", 422, err.message)
      );
  }
};
