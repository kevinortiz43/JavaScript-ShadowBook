const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// we can do this
// i hate 2d arrays

// nested for loops for sure
// first for loop goes to the matrix.length
// second for loop access the array at matrix[j]?

for (let outterMatrice of matrix) {
  // console.log("outter for loop " + outterMatrice);
  // first we access the array which looks like
  // [1,2,3,]
  // [4,5,6]
  // [7,8,9]

  for (let innerMatrice of outterMatrice) {
    console.log(innerMatrice);
    // Then we access each individual array
    // which becomes 1,2,3,4,5,6,7,8,9
  }
}

matrix.forEach((outterMatrice) => {
  // console.log(outterMatrice);
  // first we access the array which looks like
  // [1,2,3,]
  // [4,5,6]
  // [7,8,9]

  outterMatrice.forEach((innerMattrice) => {
    console.log(innerMattrice);

    // Then we access each individual array
    // which becomes 1,2,3,4,5,6,7,8,9
  });
});

for (let outsideArray in matrix) {
  // console.log(matrix[outsideArray]);
  // first we access the array which looks like
  // [1,2,3,]
  // [4,5,6]
  // [7,8,9]

  for (let InnerAray in matrix[outsideArray]) {
    // console.log(matrix[InnerAray]);
    console.log(matrix[outsideArray][InnerAray]);

    // Then we access each individual array
    // which becomes 1,2,3,4,5,6,7,8,9
  }
}

for (let row = 0; row < matrix.length; row++) {
  // first we access the matrix array
  // Console.log(matrix[row]);
  // this looks like
  // [1,2,3,], [4,5,6], [7,8,9]

  for (let column = 0; column < matrix[row].length; column++) {
    console.log(matrix[row].length);

    // Now we have the array outter which is
    // matrix[row]
    // [1,2,3,], [4,5,6], [7,8,9]
    //   Then
    // matrix[row][column]
    // 1,2,3,4,5,6,7,8,9

    
    console.log(matrix[row][column]);
  }
}
