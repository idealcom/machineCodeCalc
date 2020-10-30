// putting all html tags in variable------
const firstCol = document.getElementById("fCol");
const secondCol = document.getElementById("sCol");
const input = document.getElementById("inpNum");
const result = document.getElementById("res");

// value set in first col and sec col--------
var fColVal = firstCol.addEventListener('click', (e) => {
    return fColVal = e.target.value;
})
var sColVar = secondCol.addEventListener('click', (e) => {
    return sColVal = e.target.value;
})
var inpVal = input.addEventListener('input', (e) => {
    return inpVal = e.target.value;
    console.log(inpVal)
})

// set the classes----------------
class Octclass {
    constructor(zero, one, two, three, four, five, six, saven) {
        this.zero = zero;
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five = five;
        this.six = six;
        this.saven = saven;
    }
}

class Decclass extends Octclass {
    constructor(zero, one, two, three, four, five, six, saven, eaight, nine) {
        super(zero, one, two, three, four, five, six, saven)
        this.eaight = eaight;
        this.nine = nine;
    }
}

class Hexclass extends Decclass {
    constructor(zero, one, two, three, four, five, six, saven, eaight, nine, ten, ellaven, twelve, thirteen, fourteen, fifteen) {
        super(zero, one, two, three, four, five, six, saven, eaight, nine)
        this.ten = ten;
        this.ellaven = ellaven;
        this.twelve = twelve;
        this.thirteen = thirteen;
        this.fourteen = fourteen;
        this.fifteen = fifteen;
    }
}

// first column functions----------
firstCol.addEventListener('click', () => {
    if (fColVal == "binary") {
        secondCol.innerHTML = `
            <option value="select" id="select">select</option>
            <option value="octal" id="octal">octal</option>
            <option value="decimal" id="decimal">decimal</option>
            <option value="hexadecimal" id="hexadecimal">hexadecimal</option>`
    } else if (fColVal == "octal") {
        secondCol.innerHTML = `
            <option value="select" id="select">select</option>
            <option value="binary" id="binary">binary</option>
            <option value="decimal" id="decimal">decimal</option>
            <option value="hexadecimal" id="hexadecimal">hexadecimal</option>`
    } else if (fColVal == "decimal") {
        secondCol.innerHTML = `
            <option value="select" id="select">select</option>
            <option value="binary" id="binary">binary</option>
            <option value="octal" id="octal">octal</option>
            <option value="hexadecimal" id="hexadecimal">hexadecimal</option>`
    } else if (fColVal == "hexadecimal") {
        secondCol.innerHTML = `
            <option value="select" id="select">select</option>
            <option value="binary" id="binary">binary</option>
            <option value="octal" id="octal">octal</option>
            <option value="decimal" id="decimal">decimal</option>`
    }

})



input.addEventListener('input', () => {

    if (fColVal == "binary" && sColVal == "octal") {
        binaryToOctal = new Octclass("000", "001", "010", "011", "100", "101", "110", "111")
        if (inpVal==0) {
            result.innerHTML = binaryToOctal.zero
        }else if(inpVal==1){
            result.innerHTML = binaryToOctal.one
        }else if(inpVal==2){
            result.innerHTML = binaryToOctal.two
        }
    }
    else if (fColVal == "binary" && sColVal == "decimal") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "binary" && sColVal == "hexadecimal") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "octal" && sColVal == "binary") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "octal" && sColVal == "decimal") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "octal" && sColVal == "hexadecimal") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "decimal" && sColVal == "binary") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "decimal" && sColVal == "octal") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "decimal" && sColVal == "hexadecimal") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "hexadecimal" && sColVal == "binary") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "hexadecimal" && sColVal == "octal") {
        result.innerHTML = inpVal * 2
    }
    else if (fColVal == "hexadecimal" && sColVal == "decimal") {
        result.innerHTML = inpVal * 10
    }
    else {
        result.innerHTML = `<span>check all options carefully and try again...!</span>`
    }
})