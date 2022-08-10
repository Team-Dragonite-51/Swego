// for testing addValues

function testAddValues(func) {
    const inputs = [];
    // test case 1
    if (func(2, 3) != 5) {
        inputs.push([2, 3]);
    }
    // test case 2
    if (func(-1, 1) != 0) {
        inputs.push([-1, 1]);
    }
    // test case 3
    if (func(6, 10) != 16) {
        inputs.push[6, 10];
    }
    // if all pass then return true;
    if (inputs.length === 0) return true;
    else return `Failed inputs: ${inputs}`
}

console.log("dog");

