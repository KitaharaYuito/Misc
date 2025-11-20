const sides = 6;
const parentNum = 1_000_000_000;

const results = new Array(sides).fill(0);

console.time("LoopTime");

for(let i = 0; i < parentNum; i++){
    const resultIndex = Math.floor(Math.random() * sides)
    results[resultIndex] ++;
}

console.timeEnd("LoopTime");

results.forEach((count, index) => {
    const diceNum = index + 1;
    const percentage = (count / parentNum) * 100;
    console.log(`${diceNum}: ${count} (${percentage.toFixed(2)}%)`)
});