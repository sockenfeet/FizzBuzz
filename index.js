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
    if (i % 13 == 0) {
        const x = string.indexOf("B"); //index of the first instance of "B" in string
        if (x == -1) {
            string = "Fezz" + string;
        } else {
            const x = string.indexOf("B"); //index of the first instance of "B" in string
            //console.log("X is: " + x);
            string = string.slice(0, x) + "Fezz" + string.slice(x);
        }
    }
    if (string == "") {
        console.log(i);
    } else {
        console.log(string);
    }
}