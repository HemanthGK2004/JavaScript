const myNums = [1,2,3,4,5,6,7,9,9]

// const nums=myNums.filter((num)=>num>4)
// console.log(nums);

const newNums = []
myNums.forEach((num)=>{
    if(num>4)
    {
        newNums.push(num)
    }
})
console.log(newNums);

