let readline = require("readline-sync");
let story = {};
let isEnough;
const WORD_TYPES = ["noun", "verb", "adjective", "adverb"];

do {
  WORD_TYPES.forEach((type) => {
    story[type] = readline.question(`Enter ${type}: `);
  });

  const MAD_LIBS_TEMPLATES = [
    `The ${story.adjective} ${story.noun} ${story.adverb} ${story.verb}`,
    `Do you ${story.verb} your ${story.noun} ${story.adverb}? That's hilarious!`,
    `Don't you ${story.verb} your ${story.noun} ${story.adverb}? How Tragic!`,
  ];
  let randomIndex = Math.floor(Math.random() * MAD_LIBS_TEMPLATES.length);

  console.log(MAD_LIBS_TEMPLATES[randomIndex]);
  isEnough = readline.keyInYN("Is this enough mad libs?");
} while (!isEnough);