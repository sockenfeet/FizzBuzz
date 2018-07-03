for (let i=1; i<101; i++) {
    let string = "";
    if (i % 3 == 0) {
        string += "Fizz";
    }
    if (i % 5 == 0) {
        string += "Buzz";
    }
    if (i % 7 == 0) {
        string += "Bang";
    }
    if (i % 11 == 0) {
        string = "Bong";
    }
    if (string == "") {
        console.log(i);
    } else {
        console.log(string);
    }
}