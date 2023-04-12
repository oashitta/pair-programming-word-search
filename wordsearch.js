let result = false;  
const transpose = function(matrix) {
    let newArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
  
    for (let array of matrix) {
      for (const [j, num] of array.entries()) {
        newArray[j].push(num);
      }
    }
    return newArray;
  };

const wordSearch = (letters, word) => { 
  if (letters.length === 0){
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          result = true;
        } 
    } 

    let verticalString = "";
    let transposedString = transpose(letters)
    for (letter of transposedString) {
      verticalString += letter;
      if (verticalString.includes(word)) {
        result = true;
      }
    }
  
  return result;
};

module.exports = wordSearch