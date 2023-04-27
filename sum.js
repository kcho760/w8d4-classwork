function sum(num) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

function sum(num, ...othernums) {
    let sum = num;

    for (let i = 0; i < othernums.length; i++) {
        sum += othernums[i];
    };
    return sum;
}