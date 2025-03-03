//Memory

//stack(primitive) and heap(non primitive)
//  
let Itzname = "Hemanth"
let wifeName = Itzname;
console.log(Itzname)
wifeName = "sanjana"
console.log(wifeName)

//All stored in the stack memory 

//Nex Heap memory
let user1={
    userName :"Hemanth G K",
    age :21,
    gmail:"gkhemanth0@gmail.com"
}
console.log(user1.userName)
let user2= user1;
user2.gmail="sanajan@gmail.com"
console.log(user1.gmail);
console.log(user2.gmail)
//stored in heap memory