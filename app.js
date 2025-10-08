// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 146.26;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 179.89;
    return valueInPound
}
















//This is my function that sums two numbers

const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3));


//Export of the funcion

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


