let data;

const solve= document.getElementById('solve')

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

function sudokoSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == '.') {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = `${k}`;
            if (sudokoSolver(data)) {
             return true;
            } else {
             data[i][j] = '.';
            }
           }
         }
         return false;
       }
     }
   }
   return true;
  }


solve.addEventListener('click',()=>{
    
    data = document.getElementById('data').value;
    console.log(typeof(data));
    sudokoSolver(data)


})
console.log(data)