const principal = document.querySelector("#principal");
const rate = document.querySelector("#rate");
const time = document.querySelector("#time");
const btn = document.querySelector("button");
const result = document.querySelector("#result");

function simpleInterest(e) {
    e.preventDefault();
    if (!principal.value && principal.value <= 0) {
        principal.style.border = "2px red solid";
        btn.setAttribute("allow", "null");
    }
    if (!rate.value && rate.value <= 100) {
        rate.style.border = "2px red solid";
        btn.setAttribute("allow", "null");
    }
    if (!time.value && time.value <= 0) {
        time.style.border = "2px red solid";
        btn.setAttribute("allow", "null");
    }
    const interest = principal.value * (rate.value / 100) * time.value;
    result.textContent = `#${interest.toFixed(2)}`;
}

btn.addEventListener("click", simpleInterest);
