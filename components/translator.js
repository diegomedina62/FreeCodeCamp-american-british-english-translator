const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");
const spellingsAtoB = new Map(Object.entries(americanToBritishSpelling));
const titlesAtoB = new Map(Object.entries(americanToBritishTitles));

const spellingBtoA = new Map();
Object.entries(americanToBritishSpelling).forEach((x) => {
  spellingBtoA.set(x[1], x[0]);
});
const titlesBtoA = new Map();
Object.entries(americanToBritishTitles).forEach((x) => {
  titlesBtoA.set(x[1], x[0]);
});

class Translator {
  AmToBri(text) {
    let translation = text;
    let noHighlight = "";

    Object.keys(americanOnly).forEach((x) => {
      let word = new RegExp(`\\b${x}\\b`, "gi");
      translation = translation.replace(
        word,
        `<span class="highlight">${americanOnly[x]}</span>`
      );
    });
    spellingsAtoB.forEach((value, key) => {
      let word = new RegExp(`\\b${key}\\b`, "gi");
      translation = translation.replace(
        word,
        `<span class="highlight">${value}</span>`
      );
    });
    titlesAtoB.forEach((value, key) => {
      if (translation.indexOf(key) >= 0) {
        translation = translation.replace(
          key,
          `<span class="highlight">${value}</span>`
        );
      }
    });
    if (/([1-9]|1[012]):[0-5][0-9]/g.test(translation)) {
      const hour = translation.match(/([1-9]|1[012]):[0-5][0-9]/g);
      let hourArr = [];
      hour.forEach((x) => {
        hourArr.push([x, x.replace(":", ".")]);
      });

      hourArr.forEach((x) => {
        translation = translation.replace(
          x[0],
          `<span class="highlight">${x[1]}</span>`
        );
      });
    }

    noHighlight = translation.replaceAll('<span class="highlight">', "");
    noHighlight = noHighlight.replaceAll("</span>", "");

    return [translation, noHighlight];
  }
  BriToAm(text) {
    let translation = text;
    let noHighlight = "";

    Object.keys(britishOnly).forEach((x) => {
      let word = new RegExp(`\\b${x}\\b`, "gi");
      translation = translation.replace(
        word,
        `<span class="highlight">${britishOnly[x]}</span>`
      );

      // if (translation.indexOf(x) >= 0) {
      //   translation = translation.replace(
      //     x,
      //     `<span class="highlight">${britishOnly[x]}</span>`
      //   );
      // }
    });
    spellingBtoA.forEach((value, key) => {
      let word = new RegExp(`\\b${key}\\b`, "gi");
      translation = translation.replace(
        word,
        `<span class="highlight">${value}</span>`
      );
      // if (translation.indexOf(key) >= 0) {
      //   translation = translation.replace(
      //     key,
      //     `<span class="highlight">${value}</span>`
      //   );
      // }
    });
    titlesBtoA.forEach((value, key) => {
      if (translation.indexOf(key) >= 0) {
        translation = translation.replace(
          key,
          `<span class="highlight">${value}</span>`
        );
      }
    });
    if (/([1-9]|1[012])\.[0-5][0-9]/g.test(translation)) {
      const hour = translation.match(/([1-9]|1[012])\.[0-5][0-9]/g);
      let hourArr = [];
      hour.forEach((x) => {
        hourArr.push([x, x.replace(".", ":")]);
      });

      hourArr.forEach((x) => {
        translation = translation.replace(
          x[0],
          `<span class="highlight">${x[1]}</span>`
        );
      });
    }
    noHighlight = translation.replaceAll('<span class="highlight">', "");
    noHighlight = noHighlight.replaceAll("</span>", "");

    return [translation, noHighlight];
  }
}

module.exports = Translator;
