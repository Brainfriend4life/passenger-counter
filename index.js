let countEl = document.getElementById("count-el")

console.log(countEl)
let previousEntries = []

let count = 0

function increment () {
    count = count + 1
    countEl.innerText = count
}
function save() {
    previousEntries.push(count);
    document.getElementById("previous-entries").textContent = previousEntries.join(" - ");
    count = 0;
    document.getElementById("count-el").textContent = count;
    console.log(count)
}



