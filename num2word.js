//Hello, this took a long time to make please leave a star 😭

const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
const tens = ["ten", "teen", "ty"];
const tensPlus = ["", "", "hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "hextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "hexdecillion", "septendecillion", "octodecillion", "novemdecillion", "vigintillion", "unvigintillion", "duovigintillion", "trevigintillion", "quattourvigintillion", "quinvigintillion", "hexvigintillion", "septenvigintillion", "octovigintillion", "novemvigintillion", "trigintillion", "untrigintillion", "duotrigintillion"]
const exception = [['twen', 'thir', "", 'fif', "", "", "eigh"], ["two", "three", "five", "eight"], ["one", "two", "three", "five", "eight"], ["eleven", "twelve", "thirteen", "", "fifteen", "", "", "eighteen"]]



function numberOfThings(n, thing) {
    let regex = new RegExp(thing, "g");
    return count = (n.match(regex) || []).length;
}

Array.prototype.multiIndexOf = function (el) {
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
};

function num2word(n) {
    let num = n.trim();
    if (n.includes(".")) {
        num = n.split(".")[0].trim();
    }
    let zeros = numberOfThings(num, "0");
    if (num.includes(",")) {
        let end;
        let place = numberOfThings(num, ",");
        let splitNum = num.split(",")
        let rest = num2word(splitNum.pop());
        if (rest !== "") {
            end = " and " + rest;
        }
        else {
            end = rest;
        }
        let arr = [];
        let c = place + 3;
        for (let i = 0; i < splitNum.length; i++) {
            c--;
            if (splitNum[i] !== "000") {
                if(c<tensPlus.length){
                    arr.push(num2word(splitNum[i]) + " " + tensPlus[c]);
                }
                else{
                    return "Too Much 🤦‍♂️";
                }
            }
            if (splitNum.length - 1 === i) {
                return arr.join(" ") + end;
            }
        }
    }
    else {
        if (num.length == 3) {
            if (zeros == 3) {
                return "";
            }
            if (zeros == 2) {
                if (num.split("").multiIndexOf("0").includes(0) && num.split("").multiIndexOf("0").includes(1) == false) {
                    let rest = num2word(new Array(num.split("")[1], num.split("")[2]).join(""));
                    return rest;
                }
                else if (num.split("").multiIndexOf("0").includes(0) && num.split("").multiIndexOf("0").includes(1)) {
                    let rest = num2word(num.split("")[2]);
                    return rest;
                }
                else {
                    return ones[Number(num.split("")[0])] + " " + tensPlus[zeros];
                }
            }
            else if (zeros == 1) {
                let first = num2word(num.split("")[0] + "00");
                if (num.indexOf(0) == 2) {
                    let rest = num2word(new Array(num.split("")[1], num.split("")[2]).join(""));
                    return first + " " + rest;
                }
                else if (num.indexOf(0) == 1) {
                    let rest = num2word(num.split("0")[1]);
                    return first + " " + rest;
                }
                else if (num.indexOf(0) == 0) {
                    let rest = num2word(new Array(num.split("")[1], num.split("")[2]).join(""));
                    return rest;
                }
                else {
                    return what();
                }
            }
            else if (zeros == 0) {
                let first = num2word(num.split("")[0] + "00");
                let rest = num2word(new Array(num.split("")[1], num.split("")[2]).join(""));
                return first + " " + rest;
            }
        }
        else if (num.length == 2) {
            if (zeros == 1) {
                if (num.indexOf(0) !== 0) {
                    if (num.split("")[0] == 1) {
                        return "ten";
                    }
                    if (!exception[1].includes(ones[Number(num.split("")[0])])) {
                        return ones[Number(num.split("")[0])] + tens[num.length];
                    }
                    else {
                        let actual = Number(num.split("")[0]) - 2;
                        return exception[0][actual] + tens[num.length];
                    }
                }
                else {
                    return num2word(num.split("")[1]);
                }
            }
            else if (zeros == 0) {
                if (num.split("")[0] == 1) {
                    if (!exception[2].includes(ones[Number(num.split("")[1])])) {
                        return ones[Number(num.split("")[1])] + tens[num.length - 1];
                    }
                    else {
                        let actual = Number(num.split("")[1] - 1);
                        return exception[3][actual];
                    }
                }
                else {
                    let first = num2word(num.split("")[0] + "0");
                    let rest = num2word(num.split("")[1]);
                    return first + " " + rest;
                }
            }
        }
        else if (num.length == 1) {
            return ones[Number(num.split("")[0])];
        }
        else if (num.length == 0) {
            return what();
        }
    }
}

function what() {
    return "Bro what? 🤦‍♂️";
}
