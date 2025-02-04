// Difference between == and ===

// ==(Non-strict equality) checks the values of two sides but ===(Strict equality) checks values as well as data type.

    0 == false   // true
    0 === false  // false
    1 == "1"     // true
    1 === "1"    // false
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    // []==[] or []===[] //false, refer different objects in memory
    // {}=={} or {}==={} //false, refer different objects in memory