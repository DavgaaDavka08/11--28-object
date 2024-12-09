//1 shine sedev---split
// let text = "mungguituuguu";
// let arrtext = text.split("  ");
// console.log("text", text);
// console.log("arrtext", text);
////
///
///
//
// let text = "bilgvvn";
// console.log(text[0], text[text.length - 1]);
///
////
//
////
//replace
// let text2 = "hallo world";
// let replaced = text2.replace("z", "a");
// console.log("replaced=", replaced);

//STRING METHOD
let text = "replace doo, doo, doo, doo, doo, doo.";
let lyricsArr = [
  "Baby shark",
  "Mommy shark,",
  "Daddy shark,",
  "Grandma shark",
  "Grandpa shark",
  "Let's go hunt,",
  "Run away,",
  "Safe at last, ",
  "It's the end",
];

lyricsArr.map((lyrics) => {
  let line = text.replace("replace", lyrics);
  for (let i = 0; i < 3; i++) {
    console.log(line);
  }
  console.log(lyrics + "!");
});
