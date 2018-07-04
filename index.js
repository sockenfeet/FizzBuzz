for (let i=1; i<101; i++) {
    let string = new Array(0); //empty array of relevant words
    if (i % 3 == 0) {
        string.push("Fizz");
    }
    if (i % 5 == 0) {
        string.push("Buzz");
    }
    if (i % 7 == 0) {
        string.push("Bang");
    }
    if (i % 11 == 0) {
        string = ["Bong"];
    }
    if (i % 13 == 0) {
        const x = findBinArr(string); //index of first element of String which begins with "B"
        if (x == string.length) { //no elements of string start with "B"
            string.unshift("Fezz");
        } else {
            string.splice(x,0,"Fezz");
            //string = string.slice(0, x) + "Fezz" + string.slice(x); //needsfixingfornewArrayStructure
        }
    }
    if (i % 17 == 0) {
        string.reverse();
    }
    if (string.length == 0) {
        console.log(i);
    } else {
        console.log(string.join(""));
    }
}

function findBinArr(str) {
    let i=0;
    let f=false; //flags when the relevant value is found
    while (i<str.length && f==false) {
        if (str[i][0] == "B") {
            f = true;
        } else {
            i++;
        }
    }
    return i;
}