
let lowerBtn = document.getElementById('lower');
let upperBtn = document.getElementById('upper');
let trimBtn = document.getElementById('trim');
let capsBtn = document.getElementById('caps');
let copyBtn = document.getElementById('copy');

let inp = document.getElementById('inp');

lowerBtn.addEventListener('click', toLower);
upperBtn.addEventListener('click', toUpper);
trimBtn.addEventListener('click', toTrim);
capsBtn.addEventListener('click', toCaps);
copyBtn.addEventListener('click', toCopy);

function toLower() {
    inp.value = inp.value.toLowerCase()
}

function toUpper() {
    inp.value = inp.value.toUpperCase()
}

function toTrim() {
    inp.value = inp.value.trim()
}

function toCaps() {
    let first = "";
    for (let i = 1; i < inp.value.length; i++) {
        if (" " === inp.value[i - 1]) {
            first = first + inp.value[i].toUpperCase();
        } else {
            first = first + inp.value[i].toLowerCase();
        }
    }
    inp.value = inp.value[0].toUpperCase() + first;
}

function toCopy() {
    navigator.clipboard.writeText(inp.value);
    alert("Copied to Clipboard");
}



