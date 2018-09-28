//FIZZ BUZZ
// function fizzBuzz(number){
//        for(let i= 0;i<= number; i++){
//          if((i % 3 == 0) && (i % 5 == 0)){
//              console.log('fizzBuzz')
//          }
//          else if(i % 5 == 0){
//              console.log('buzz')
//          }else if(i % 3 == 0){
//              console.log('fizz')
//          }else{
//              console.log(i)
//          }
//     // console.log(i)
//      }
   
    
// }

// fizzBuzz(21)

// function harmlessRansomNote(noteText,magazineText){
//     let noteArr = noteText.split(' ')
//     let magazineArr = magazineText.split(' ')
//     let magazineObj = {}

//     magazineArr.forEach(word => {
//         if(!magazineObj[word]) magazineObj[word] = 0;
//         magazineObj[word]++;
//     });
//     // console.log(magazineObj);
//     let noteIsPossible = true;
//     noteArr.forEach(word => {
//         if(magazineObj[word]){
//             magazineObj[word]--;
//             if(magazineObj[word] < 0) noteIsPossible = false; 
//          }
//         else noteIsPossible = false;
//     });
//     return noteIsPossible;
// }
  
// harmlessRansomNote('this is', 'this is me here');

//PALINDROME
// function isPalindrome(string) {
//     let string = string.toLowerCase();
//     let characterArray = string.split('');
//     let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

//     let lettersArr = [];
//     characterArray.forEach(char => {
//         if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
//         if(str.join('') === newArr.reverse().join('')) return true; else return false 
//     });
// }
// console.log(isPalindrome(elements))


const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
    ea<console.log(tally, fruit)
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})

// count { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }


// const count = fruitBasket.reduce((tally,fruit ) =>{
//     tally[fruit]
// })