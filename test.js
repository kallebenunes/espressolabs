let [num,p,i] = [9,0,0]

while(num > 0){
    if(num % 2 == 0){
        p++
    } else {
        i++
    }
    num--
}

console.log(p,i);