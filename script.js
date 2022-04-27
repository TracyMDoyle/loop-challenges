//create a for loop that prints odd numbers 1-20

for( var i = 1; i < 21; i++){
    if(i%2!==0) 
    console.log(i);
} 
console.log("next algo");
//create a loop that decreases in multiples of 3

for(var i = 100; i >= 0; i--){
    if(i%3==0)
    console.log(i);
}
console.log("next algo");
// create a loop that logs: 4, 2.5, 1, -0.5, -2, -3.5

for(var i = 4; i > -4; i-=1.5){
    console.log(i)
}
console.log("next algo");
//create a code that adds all the values from 1-100
function addTheNumbers(){
var sum = 0;
    for(var i = 1; i <=100; i++){
        (sum = sum + i);    
    }  	
    console.log(sum);
}
addTheNumbers();

console.log("next algo");
//create a code that will multiply all the values from 1-12 
function multiplyTheNumbers(){
    var product = 1;
    for(var i = 1; i <=12; i++){
        (product = product*i);
    }
    console.log(product);

}
multiplyTheNumbers();

