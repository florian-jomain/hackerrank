'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairCounter = 0;
    const sortedArray = ar.sort();
    console.log(sortedArray)
    for (let i = 0; i <= sortedArray.length - 1; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            pairCounter++;
            sortedArray.splice(i, 1);
        };
    }
    console.log(pairCounter);
    return pairCounter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);