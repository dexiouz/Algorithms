//ALGORITHMS

//REVERSING STRINGS

//MY PUSH and UNSHIFT METHOD METHOD
function reverse(word){
    let splitWord = word.split('')
    let reversed = [];
    // for (let i = splitWord.length-1; i>=0; i--){
    //     reversed.push(splitWord[i]);
    // }
    // for (let i = 0; i<=splitWord.length; i++){
    //     reversed.unshift(splitWord[i]);
    // }
    console.log(reversed.join(''))
}
reverse('grace')  
console.log()

// let arr = ["element"];
// let rs = arr.map((rev)=>{
//    let k = rev.split('').reverse().join('')
   
//     console.log(k)
// })



//USIING REDUCE
// function reverse(str) {
//     return str.split('').reduce((rev,char) => char + rev, '');

// }
// console.log(reverse('ben'));

//USING REVERSE METHOD FOR STRING
// function reverse(str){
//          return str.split('').reverse().join('');
//     }
//     console.log(reverse('ben'));

// //REVERSE USING FOR OF
// function reverse(str){
//     let reversed = '';
//     for (const character of str) {
//     reversed = character + reversed;       
//  .   }
//     return reversed;
// }
// console.log(reverse(`eagle`))


//GEORGE'S METHOD
// function revStr(str){
//     if(str == '')return '';
//     return revStr(str.subStr(1)) + str.char(0)
// }
// console.log(revStr('bernadine'));



// REVERSING NUMBERS
// function reverseInt(n){
//     const a = n.toString().split('').reverse().join('');
//     return parseInt(a)*Math.sign(n);
// }

// console.log(reverseInt(-15))

// USING REDUCE
// function reverse(str) {
    // const a = str.toString();
//     const b = a.split('').reduce((rev,char) => char + rev, '');
//     return parseInt(b)*Math.sign(str);

// }
// console.log(reverse(-15));


//PALINDROME
// let str = prompt('enter a number');   
// let reverseStr ="";            
// for(let i= str.length-1; i>=0; i--){
        
//         reverseStr=reverseStr+str[i];
// };
// alert(reverseStr);
// if (str===reverseStr){
// alert(`${str} is a palindrome`);
// }
// else{
//     alert(`${str} is not a palindrome`)
//}

// //BERNADINE PALINDROME
// function pal(x){
//     let A = x.split('').reverse().join('');
//     return x ===A;
// }
// console.log(pal('bob'));


//USING EVERY FUNCTION PALINDROME
// function palindrome(str){
//     return str.split('').every((char, i) => {
//         return char === str[str.length -i-1]
//     })
// }
// console.log(palindrome('beb'))
    
// //reverse the string and check if its a palindrome

//FIND LARGEST WORD
// function findLongestWords(str){
//     let words = str.split(' ')
//     let longest = '';
//     for(let word of words){
//         if(word.length > longest.length){
//             longest = word
//         }
//     }
//     return longest.length
// }
// console.log(findLongestWords('Today is the best day of my life'))

//OR
// function findLongestWords(str){
    // return str.split(' ').sort((a,b) => b.length - a.length)[0]
// }console.log(findLongestWords('Today is the best day of my life'))

//REVERSE NUMBER
// const num =(n)=>{
//     return parseInt(n.toString().split('').reverse().join(''))*Math.sign(n)
// }
// console.log(num(-472))

// let vals  = [1,2,3,4]
// let acc = 0;
// for (let val of vals){
//     acc +=val
// }
// console.log(acc)


// const users = [
//     {
//         firstName: 'Bob',
//         lastName: 'Doe',
//         age: 37
//     },
//     {
//         firstName: 'chris',
//         lastName: 'ken',
//         age: 41
//     },

//     {
//         firstName: 'fabulous',
//         lastName: 'Mike',
//         age: 27
//     },
//     {
//         firstName: 'patty',
//         lastName: 'ginika',
//         age: 23
//     }
// ]

// const data = users.filter((user) => (user.age >20 && user.age < 30))
// .map((user) =>`${user.firstName} ${user.lastName}`)
// .filter(fullName => fullName.length >= 10)
// console.log(data)
//ANOTHER METHOD
// const isInTwenties = user => user.age >20 && user.age < 30;
// const makeFullName = user =>`${user.firstName} ${user.lastName}`;
// const isAtleastTenChars = fullName =>fullName.length >=10;

// const data = users.filter(isInTwenties).map(makeFullName).filter(isAtleastTenChars)
// console.log(data)


//WITH REDUCE

// const data = users.reduce((accumulator, user) =>{
//     const fullName = makeFullName(user)
//     if(isInTwenties(user) && isAtleastTenChars(fullName)){
//         accumulator.push(fullName)
//     }
//     return accumulator
// })
// console.log(data)




//REDUCE 
// let numbers = [1,34,65,34,67]
// let sum = numbers.reduce((passedIn,item) => {
//     console.log(passedIn,item);
//     return passedIn + item;
// }, 0)
// console.log(`Tota is ${sum}`)



// function reverse(str){
//     return [...str].reverse('').join('')
// }
// // console.log(reverse('data'))
// // Given an array you must increment every duplicate element until all of its elements are unique, in addition, the sum of its elements must be the minimum possible within the getMatchedCSSRules.
// let arrays = [1,1,3,3,2,6]
// function getUniqueMinimum(arr){
//     for(let i = 0; i<= arr.length; i++){
//         let slicedArr = arr.slice(0,i); //1,1
//         let flag = true;                     [1,1,3,5]
//         while (flag){
//             if(slicedArr.includes(arr[i])){ 
                                  
//             }else{
//                 flag = false;
//             }
//         }
//         //console.log(slicedArr)
//     }
//     return arr.reduce((sum,a) =>sum + a,0)
// }
// console.log(getUniqueMinimum(arrays))


//  //console.log(arrays.slice())


