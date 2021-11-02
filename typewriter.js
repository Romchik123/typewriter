const sentence = "hello there from lighthouse labs";

let timer = 0;
let interval = 500;

for (const i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, (timer += interval)); // <= 1s delay to make it noticeable. Can dial it down later.
}
