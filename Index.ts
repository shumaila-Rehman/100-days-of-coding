//                          =======> Question #  3 <=========

//                          =========> LowerCase <==========

let personName : string = "Shumaila Rehman";
console.log("Person Name:",personName.toLowerCase());


//                            =========> Upper Case <===========

console.log( "Person Name:", personName.toUpperCase());


//                          =========> TitleCase <=========

console.log( "person Name :", personName.replace(/\bw/g,c => c.toUpperCase()));

