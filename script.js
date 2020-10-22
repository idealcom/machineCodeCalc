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
        result.innerHTML = inpVal / 2
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

        for (let val = 0; val < n; val++) {
            result.innerHTML = inpVal % 2
            inpVal = inpVal / 2
        }
        // result.innerHTML =  finalRes
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