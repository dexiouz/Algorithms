let projects  = ["is"];
let project = ['chidera']
// projects = ["Gburugburu",...project,...projects];

projects.push('Paul')//add to the end of an array
// console.log(projects)

// projects.shift(...project)// add to the beginning of an array
console.log(projects) 
projects = ['Excellent', ...projects, 'love' ]
console.log(projects)
console.log(projects.shift())


// console.log(num)
// console.log(num.slice(3))
// console.log(num)
// console.log(num.slice(0,3))//start from 0 bring out 3 elements
// console.log(num)
let number = [1,2,3,4,5,6,7,8,9]
function z(num){
   let m = num.map((n,i)=> {
        return {
            i : n
        }
        
    })
}
z(number)