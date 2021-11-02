const sentence = "hello there from lighthouse labs";

let timer = 0;
let interval = 50;

// When running, run it in the terminal! ::
for (let i = 0; i <= sentence.length; i++) {
  setTimeout(() => {
    if (sentence[i]) {
      process.stdout.write(sentence[i]);
    } else if (i === sentence.length) {
      console.log("");
    }
  }, (timer += interval)); // <= 1s delay to make it noticeable. Can dial it down later.
}
