"use strict";
{
    // spread operator
    var even = [2, 4, 6];
    var odd = [1, 3, 5];
    var allnumbers = [];
    allnumbers.push((even.push.apply(even, odd)));
    console.log(allnumbers);
}
