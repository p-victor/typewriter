// const write = process.stdout.write ;
const sentence = "hello there from lighthouse labs";
console.log("");
let i = 0;
for (const char of sentence+"\n") {
  i++;
  setTimeout( () => {
    process.stdout.write(char);
  }, i*100);
}
// console.log("hey2");

// written in collaboration between Victor & Hatem 
