const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();
suite("Unit Tests", () => {
  suite("To British English", () => {
    test("Mangoes are my favorite fruit.", (done) => {
      assert.equal(
        translator.AmToBri("Mangoes are my favorite fruit.")[1],
        "Mangoes are my favourite fruit."
      );
      done();
    });
    test("I ate yogurt for breakfast.", (done) => {
      assert.equal(
        translator.AmToBri("I ate yogurt for breakfast.")[1],
        "I ate yoghurt for breakfast."
      );
      done();
    });
    test("We had a party at my friend's condo.", (done) => {
      assert.equal(
        translator.AmToBri("We had a party at my friend's condo.")[1],
        "We had a party at my friend's flat."
      );
      done();
    });
    test("Can you toss this in the trashcan for me?", (done) => {
      assert.equal(
        translator.AmToBri("Can you toss this in the trashcan for me?")[1],
        "Can you toss this in the bin for me?"
      );
      done();
    });
    test("The parking lot was full.", (done) => {
      assert.equal(
        translator.AmToBri("The parking lot was full.")[1],
        "The car park was full."
      );
      done();
    });
    test("Like a high tech Rube Goldberg machine.", (done) => {
      assert.equal(
        translator.AmToBri("Like a high tech Rube Goldberg machine.")[1],
        "Like a high tech Heath Robinson device."
      );
      done();
    });
    test("To play hooky means to skip class or work.", (done) => {
      assert.equal(
        translator.AmToBri("To play hooky means to skip class or work.")[1],
        "To bunk off means to skip class or work."
      );
      done();
    });
    test("No Mr. Bond, I expect you to die.", (done) => {
      assert.equal(
        translator.AmToBri("No Mr. Bond, I expect you to die.")[1],
        "No Mr Bond, I expect you to die."
      );
      done();
    });
    test("Dr. Grosh will see you now.", (done) => {
      assert.equal(
        translator.AmToBri("Dr. Grosh will see you now.")[1],
        "Dr Grosh will see you now."
      );
      done();
    });
    test("Lunch is at 12:15 today.", (done) => {
      assert.equal(
        translator.AmToBri("Lunch is at 12:15 today.")[1],
        "Lunch is at 12.15 today."
      );
      done();
    });
  });

  suite("To American English", () => {
    test("We watched the footie match for a while.", (done) => {
      assert.equal(
        translator.BriToAm("We watched the footie match for a while.")[1],
        "We watched the soccer match for a while."
      );
      done();
    });
    test("Paracetamol takes up to an hour to work.", (done) => {
      assert.equal(
        translator.BriToAm("paracetamol takes up to an hour to work.")[1],
        "Tylenol takes up to an hour to work."
      );
      done();
    });
    test("First, caramelise the onions.", (done) => {
      assert.equal(
        translator.BriToAm("First, caramelise the onions.")[1],
        "First, caramelize the onions."
      );
      done();
    });
    test("I spent the bank holiday at the funfair.", (done) => {
      assert.equal(
        translator.BriToAm("I spent the bank holiday at the funfair.")[1],
        "I spent the public holiday at the carnival."
      );
      done();
    });
    test("I had a bicky then went to the chippy.", (done) => {
      assert.equal(
        translator.BriToAm("I had a bicky then went to the chippy.")[1],
        "I had a cookie then went to the fish-and-fish-and-chip shop."
      );
      done();
    });
    test("I've just got bits and bobs in my bum bag.", (done) => {
      assert.equal(
        translator.BriToAm("I've just got bits and bobs in my bum bag.")[1],
        "I've just got odds and ends in my fanny pack."
      );
      done();
    });
    test("The car boot sale at Boxted Airfield was called off.", (done) => {
      assert.equal(
        translator.BriToAm(
          "The car boot sale at Boxted Airfield was called off."
        )[1],
        "The swap meet at Boxted Airfield was called off."
      );
      done();
    });
    test("Have you met Mrs Kalyani?", (done) => {
      assert.equal(
        translator.BriToAm("Have you met Mrs Kalyani?")[1],
        "Have you met Mr.s Kalyani?"
      );
      done();
    });
    test("Prof Joyner of King's College, London.", (done) => {
      assert.equal(
        translator.BriToAm("Prof Joyner of King's College, London.")[1],
        "Prof. Joyner of King's College, London."
      );
      done();
    });
    test("Tea time is usually around 4 or 4.30.", (done) => {
      assert.equal(
        translator.BriToAm("Tea time is usually around 4 or 4.30.")[1],
        "Tea time is usually around 4 or 4:30."
      );
      done();
    });
  });
  suite("highlight translation", () => {
    test("Mangoes are my favorite fruit.", (done) => {
      assert.equal(
        translator.AmToBri("Mangoes are my favorite fruit.")[0],
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });
    test("I ate yogurt for breakfast.", (done) => {
      assert.equal(
        translator.AmToBri("I ate yogurt for breakfast.")[0],
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
      done();
    });
    test("We watched the footie match for a while.", (done) => {
      assert.equal(
        translator.BriToAm("We watched the footie match for a while.")[0],
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });
    test("Paracetamol takes up to an hour to work.", (done) => {
      assert.equal(
        translator.BriToAm("Paracetamol takes up to an hour to work.")[0],
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
      done();
    });
  });
});
