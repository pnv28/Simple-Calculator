const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\x1b[1m');
console.log(`\n\nCalculator\nCan not calculate Exponents using ( ^ ) Operator, For exponents use ( ** )\nUses BODMAS Rule\nMade by pnv28`);

rl.question(`\n\nPlease Input the Numerical: `, (n) =>{
    let ans = eval(n);
    console.log(`\nAns: `, ans);
    console.log('\x1b[0m');
    rl.close();
})
