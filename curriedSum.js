function curriedSum (numArgs) {
    let sum = 0
    let numbers = []; //[5,30,20,1]


    return function _curriedSum(num) {
        numbers.push(num);  //1
        if (numbers.length === numArgs) {
            numbers.forEach(ele => {
                sum += ele;
            })    

            return sum;
        }
        return _curriedSum  
    }
}

let seq = curriedSum(4)
seq = seq(5)
seq = seq(30)
seq = seq(20)
seq(1) // = 56