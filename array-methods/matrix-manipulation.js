const rows = 3;
const cols = 4;

const outputMatrix = new Array(rows);
let val = 1;

for (let i = 0; i < rows; i++) {
  outputMatrix[i] = new Array(cols);
  for (let j = 0; j < cols; j++) {
    outputMatrix[i][j] = val++;
  }
}

// Console default (array of arrays)
console.log(outputMatrix, 'outputMatrix');

// // Requested formatting:
// const formatted = '[\n' + outputMatrix.map(r => r.join(',')).join('\n') + '\n]';
// console.log(formatted);