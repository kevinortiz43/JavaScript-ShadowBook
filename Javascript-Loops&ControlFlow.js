// Challenge: Loops & Control Flow
// Write a function mergingTripletsAndQuints which takes in two arrays as arguments. 
// This function will return a new array replacing the elements in array1 
// if they are divisible by 3 or 5. The number should be replaced\
//  with the sum of itself added to the element at the corresponding index in array2.


const mergingTripletsAndQuints= (array1,array2) =>{
// function mergingTripletsAndQuints(array1, array2) {
 // ADD CODE HERE
  for(let index in array1){
    
    if(array1[index] %3 === 0 || array1[index] %5 ===0){
      
      let sum = 0;
      sum = array1[index] + array2[index];
      array1[index] = sum;
   
    }
    
  }
  return array1;
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

// Challenge: While Loops - Counters
// Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown 
// from n. When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' 
// \When it's at 3, print 'I'm about to explode with excitement!' 
// When the counter is finished, print 'That was kind of a let down'.

function imAboutToExplodeWithExcitement(n){
  
  // while(n>=0){
  //   if(n ===5){
  //    console.log(`Oh wow, I can't handle the anticipation!`);
  //   }
  //   else if(n===3){
  //     console.log(`I'm about to explode with excitement!`);
  //   }
  //   else if(n===0){
  //     console.log(`That was kind of a let down`);
  //   }
  //   else{
  //   console.log(n);
  //   }
  //   n--;
    
  // }
  
  
  while(n>=0){
    console.log(
    n===5 ?`Oh wow, I can't handle the anticipation!`:
    n===3 ?`I'm about to explode with excitement!`:
    n===0 ?`That was kind of a let down`:
    n);
    n--;
    
    
  }
  
}

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'


// Challenge: Control Flow - if statements and the Math object
// Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

// Note: Due to the output being based off of a random factor, the tests provided below cannot determine if you have solved the prompt exactly. The test cases for this challenge check for the correct data types only.

const closestToTheMark = (player1, player2) => {
// function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);

  // we have number scores from player1, and player2, from the variables player1 and player2
  // we are getting "themark" which is a randomly generated number
  // we need to figure out which "player score" is closer to "the mark"
  
  // We need to figure out which players score is closer to the mark
	// how to figure out a number is close to the randomly generated number
  // player 1 score = 25
  // random number is 65
  // 65 - 25 = 50
  // player 2 score =75
  // 75 - 65 = 10
  
  // differenceplayer1 = 50 > differenceplayer2 =10
  // then player 2 is close since the difference is smaller
  // okay so we subtract the random generated number from the player scores
  // if player1 <player2 === true then player1 is closer else player 2 is closer
  // need to account for negative numbers. if the mark is less than the player score then we get a negative number which 				would incorrectly say that it is smaller than it actually is and we get a "wrong difference"  
  // the smaller the difference the closer the player score is to " mark"
  

  
let difference1 =  Math.abs(theMark- player1);
 // console.log(`player1 difference: ${difference1}`);
let difference2 = Math.abs(theMark - player2);
  // console.log(`player2 difference ${difference2}`);
  
  console.log(
 `Player 1 score: ${player1}
  Player 2 score: ${player2} 
  The mark; ${theMark}`
  );
  				// IF
  return player1 === player2 ?`Players are equal score` :
          // ELSE IF
  				difference1<difference2 ?`Player 1 is closer` :
          // ELSE
  				`Player 2 is closer`;

  // if (player1 === player2){
  //   return `Players are equal score`;
    
  // }
  // else if(difference1<difference2){
  // 	return`Player 1 is closer` ;
  // }
  
  // else {
  //     return `Player 2 is closer`;
  //   }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));




