
function randomLoop() {
  let i = 0;
  setInterval(() => {
    console.log(`${i}. Looped`);
    i++;
  }, 1000);
}

randomLoop();