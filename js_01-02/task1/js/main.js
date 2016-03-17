var base = prompt('Enter Base', '');
var exponent = prompt('Enter Exponent', '');
    
console.log ('Pow = ', pow(base, exponent))


function pow (base, exponent) {

    var result = 1;

    base = parseInt(base);
    exponent = parseInt(exponent);

    if (isNaN(base) || isNaN(exponent)) {
        console.log ('Enter valid Number');
        return false;
    }

    // x^0 = 1
    if (exponent == 0) {
        result = 1;
    }

    // x^n = x*x*...x
    if (exponent > 0) {
        for (var i = 1; i <= exponent; i++) {
            result *= base;
        }
    }

    // x^-n = 1 / x^n
    if (exponent < 0) {
        for (var i = 1; i <= -exponent; i++) {
            result *= base;
        }
        result = 1 / result;
    }

    return result;
}