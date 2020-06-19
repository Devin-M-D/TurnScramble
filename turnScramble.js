//shamelessly pinched from Michael Mitrakos at https://initjs.org/all-permutations-of-a-set-f1be174c79f8
function getAllPermutations(string) {
    var results = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0, i) + string.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}


//shorthand function for getting player by index
function p(x, idx) {
    return x.substr(idx, 1)
}
//removes the substr() calls from the condtionals
function is(str, idx, val) {
    return str.substr(idx, 1) == val
}
function isnt(str, idx, val) {
    return str.substr(idx, 1) != val
}

//starting with all possible permutations satisfies the requirement that the same turn can't be passed to the same player twice
var allPossibleTurnRoutes = getAllPermutations("123456")

var t1 = allPossibleTurnPaths.filter((x) => { return x.substr(0, 1) == "1" })
var r1 = t1[Math.ceil(Math.random() * 100) % t1.length]

var t2 = allPossibleTurnPaths.filter((x) => {
    return is(x, 0, "2")
        && isnt(x, 1, p(r1, 1)) && isnt(x, 2, p(r1, 2)) && isnt(x, 3, p(r1, 3)) && isnt(x, 4, p(r1, 4)) && isnt(x, 5, p(r1, 5))
})
console.log(`t2 ${t2.length}`, t2)
var r2 = t2[Math.ceil(Math.random() * 100) % t2.length]

// var playerPasses = {}
// for (var x = 0; x < r1.length - 1; x++){
//   console.log(r1.substr(x, 1), x)
//   playerPasses[r1.substr(x, 1)] = (playerPasses[r1.substr(x, 1)] || []).push(r1.substr(x + 1, 1))
// }
// console.log(playerPasses)
//player 3 starts, doesn't collide with 1 or 2, and don't pass to the same person twice

var t3 = allPossibleTurnPaths.filter((x) => {
    return is(x, 0, "3")
        && isnt(x, 1, p(r1, 1)) && isnt(x, 2, p(r1, 2)) && isnt(x, 3, p(r1, 3)) && isnt(x, 4, p(r1, 4)) && isnt(x, 5, p(r1, 5))
        && isnt(x, 1, p(r2, 1)) && isnt(x, 2, p(r2, 2)) && isnt(x, 3, p(r2, 3)) && isnt(x, 4, p(r2, 4)) && isnt(x, 5, p(r2, 5))
})
console.log(`t3 ${t3.length}`, t3)
var r3 = t3[Math.ceil(Math.random() * 100) % t3.length]
console.log("r3", r3)

var t4 = allPossibleTurnPaths.filter((x) => {
    return is(x, 0, "4")
        && isnt(x, 1, p(r1, 1)) && isnt(x, 2, p(r1, 2)) && isnt(x, 3, p(r1, 3)) && isnt(x, 4, p(r1, 4)) && isnt(x, 5, p(r1, 5))
        && isnt(x, 1, p(r2, 1)) && isnt(x, 2, p(r2, 2)) && isnt(x, 3, p(r2, 3)) && isnt(x, 4, p(r2, 4)) && isnt(x, 5, p(r2, 5))
        && isnt(x, 1, p(r3, 1)) && isnt(x, 2, p(r3, 2)) && isnt(x, 3, p(r3, 3)) && isnt(x, 4, p(r3, 4)) && isnt(x, 5, p(r3, 5))
})
console.log(`t4 ${t4.length}`, t4)
var r4 = t4[Math.ceil(Math.random() * 100) % t4.length]

var t5 = allPossibleTurnPaths.filter((x) => {
    return is(x, 0, "5")
        && isnt(x, 1, p(r1, 1)) && isnt(x, 2, p(r1, 2)) && isnt(x, 3, p(r1, 3)) && isnt(x, 4, p(r1, 4)) && isnt(x, 5, p(r1, 5))
        && isnt(x, 1, p(r2, 1)) && isnt(x, 2, p(r2, 2)) && isnt(x, 3, p(r2, 3)) && isnt(x, 4, p(r2, 4)) && isnt(x, 5, p(r2, 5))
        && isnt(x, 1, p(r3, 1)) && isnt(x, 2, p(r3, 2)) && isnt(x, 3, p(r3, 3)) && isnt(x, 4, p(r3, 4)) && isnt(x, 5, p(r3, 5))
        && isnt(x, 1, p(r4, 1)) && isnt(x, 2, p(r4, 2)) && isnt(x, 3, p(r4, 3)) && isnt(x, 4, p(r4, 4)) && isnt(x, 5, p(r4, 5))
})
console.log(`t5 ${t5.length}`, t5)
var r5 = t5[Math.ceil(Math.random() * 100) % t5.length]

var t6 = allPossibleTurnPaths.filter((x) => {
    return is(x, 0, "6")
        && isnt(x, 1, p(r1, 1)) && isnt(x, 2, p(r1, 2)) && isnt(x, 3, p(r1, 3)) && isnt(x, 4, p(r1, 4)) && isnt(x, 5, p(r1, 5))
        && isnt(x, 1, p(r2, 1)) && isnt(x, 2, p(r2, 2)) && isnt(x, 3, p(r2, 3)) && isnt(x, 4, p(r2, 4)) && isnt(x, 5, p(r2, 5))
        && isnt(x, 1, p(r3, 1)) && isnt(x, 2, p(r3, 2)) && isnt(x, 3, p(r3, 3)) && isnt(x, 4, p(r3, 4)) && isnt(x, 5, p(r3, 5))
        && isnt(x, 1, p(r4, 1)) && isnt(x, 2, p(r4, 2)) && isnt(x, 3, p(r4, 3)) && isnt(x, 4, p(r4, 4)) && isnt(x, 5, p(r4, 5))
        && isnt(x, 1, p(r6, 1)) && isnt(x, 2, p(r6, 2)) && isnt(x, 3, p(r6, 3)) && isnt(x, 4, p(r6, 4)) && isnt(x, 5, p(r6, 5))
})
console.log(`t6 ${t6.length}`, t6)
var r6 = t6[Math.ceil(Math.random() * 100) % t6.length]

console.log("turn 1 player sequence", r1)
console.log("turn 2 player sequence", r2)
console.log("turn 3 player sequence", r3)
console.log("turn 4 player sequence", r4)
console.log("turn 5 player sequence", r6)
console.log("turn 6 player sequence", r6)
