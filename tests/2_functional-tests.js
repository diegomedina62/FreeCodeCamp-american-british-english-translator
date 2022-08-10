const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");
let translator = new Translator();
suite("Functional Tests", () => {
  test("Translation with text and locale fields", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruit.'
        );
        done();
      });
  });
  test("invalid locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "invalid",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });
  test("missing text", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("missing locale", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "hola",
        locale: "",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });
  test("empty text", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });
  test("empty text", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "hi",
        locale: "american-to-british",
      })
      .end((err, res) => {
        console.log(res.body);
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});
