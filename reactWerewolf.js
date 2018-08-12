let moonPhase = 'solar eclipse';
if (moonPhase === 'full') {
  console.log("Howl!");
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if  (moonPhase === 'mostly new'){
  console.log('Back on two feet');
}
else {
  console.log('Invalid moon phase');
}

let hungerLevel = 10;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log('We can eat later!');
}

let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'Love that!';
if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}