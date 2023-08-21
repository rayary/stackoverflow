var express = require('express');
var router = express.Router();
const DB = require('./db')

const db = new DB();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ "questions": db.getQuestions() });
});

router.post('/', function(req, res, next) {
  const { body } = req

  const hasTitle = validateText('Title', body)
  const hasContent = validateText('Content', body)
  // let id = 0

  if (hasTitle && hasContent) {
    id = db.addQuestion(body);
    res.send({id});
  }
  else {
    res.sendStatus(400);
    // should include the validation error
  }
  end

  // ensure all fields exist
  // Title (Text) {}
  // Content (Text)
  // Creator (User)
  // match user Id against hardcoded value


  // res.send({ "questions": db.getQuestions() });
  // need to catch db exceptions

});

const validateText = (fieldName, body) => {
  return fieldName in body && typeof body[fieldName] === "string"
};

module.exports = router;
