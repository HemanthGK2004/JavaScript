// const array = [1,2,3,5,6,7,8,9]
// let sum = 0;
// let k = 1;
// for(let i =0;i<8;i++){
//     if(array[i]==k){
//         console.log(i);
//     }
// }

//Methods

// const array = new Array(1,2,3,4,6,6)
// array.push(10)
// array.pop()
// array.unshift(9)
// console.log(array);


// let marbles = ["A","B","C","D"]
// let DC = ["e","f","g","h"]

// let combine = [...marbles,...DC]
// console.log(combine);

const n = [1,2,3,[4,5,6],7,[8,9,[8,7,6]]]
const real_array = n.flat(Infinity)
console.log(real_array);
