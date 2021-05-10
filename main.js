const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What is Num 1 : `, (num1) =>{

    rl.question(`What is Num 2 : `, (num2) =>{
        let var1 = parseFloat(num1), var2 = parseFloat(num2);
        console.log(var1 + var2)
    })

})