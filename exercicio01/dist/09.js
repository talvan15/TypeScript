"use strict";
function ehpar(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const n1 = 10;
console.log(`o numero ${n1} é par? ${ehpar(n1)}`);
