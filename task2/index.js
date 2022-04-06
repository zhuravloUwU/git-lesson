function grid(n) {
  if(n < 0) return null;

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  let grid = []
  let letterIndexer = 0;
 
  for (let i = 0; i < n; i++) {
    grid[i] = []
    for (let j = 0; j < n; j++) {
      grid[i][j] = alphabet[letterIndexer++]
      if(letterIndexer === alphabet.length){
        letterIndexer = 0
      }
    }
    
  }
  return grid
}

console.log(grid(20))