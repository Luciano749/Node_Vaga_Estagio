const sumFunction = () => {
    const index = 13;
    let sum = 0;
    let k = 0;
    
    while(k < index){
        k = k + 1;
        sum = sum + k
    }
    
    console.log(sum) // Saída: 91
}
sumFunction();

// ----------------------------------

const fibonnaci = (num) => {
    let a = 0;
    let b = 1;
    let c = num

   while(a <= c){
    if(a === c){
        return true
    }

    const next = a + b
    a = b;
    b = next;
   }

   return false
}
console.log(fibonnaci(3))