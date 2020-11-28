
const puppy = process.env.PUPPY || "Fido"

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${puppy} is the best puppy!`);
    await sleep(5000);
  }
}

main();
