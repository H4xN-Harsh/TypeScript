// enum
enum User{
    Admin="harsh",
    Guest="random"
}
User.Admin;


// any
let a;


// unknown 
let b:unknown
b = 12;
b = "ghost";
if(typeof b === 'string')b.toUpperCase();

// Void
function Hey():void{
    console.log("hey harsh");
}

// null
let c:null;
// undefined
let d: undefined;