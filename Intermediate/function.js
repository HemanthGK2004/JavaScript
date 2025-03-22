function login(userName){
    if(!userName)
        return;
    return `${userName} just logged in`
}
console.log(login("Hemanth"));

const user={
    name :"Hemanth",
    age :21
}
function handleObject(anyObject){
    console.log(`${anyObject.name} just logged in and her Age is ${anyObject.age} and she marries ${anyObject.husband}`);
}

handleObject({
    name:"Sanjana",
    age:21,
    husband : "Hemanth"
})

