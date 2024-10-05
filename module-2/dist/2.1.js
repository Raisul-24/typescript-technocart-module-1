"use strict";
{
    // type assertion
    // tumi amr theke beshi bujho
    var anything = void 0;
    anything = "Raisul";
    //(anything as string).
    var kgToGm = function (value) {
        if (typeof value === 'string') {
            var convertedValue = 1000 * parseFloat(value);
            return convertedValue;
        }
        else {
            var convertedValue = 1000 * value;
            return convertedValue;
        }
    };
    var result1 = kgToGm(1000);
    var result2 = kgToGm('1000');
    console.log(result1, result2);
}
