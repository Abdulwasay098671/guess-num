
let generate = Math.floor(Math.random()* 10) + 1;

 let guess =+ prompt("Enter Any 6 digit num")

if (parseInt(guess) === generate) {
    alert("you re right")
    
}else{
    alert("you re wrong" + generate + ".");
}
