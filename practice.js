const button=document.querySelector(".bar-btn");
const list=document.querySelector(".list");

button.addEventListener("click", () => {
    button.classList.toggle("active");
    list.classList.toggle("act");
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    button.classList.remove("active");
    list.classList.remove("act");
}))

let values = document.querySelectorAll(".num");
values.forEach((values) => {
    var startValue = 0;
    let endValue = parseInt(values.getAttribute("data-val"));
    let counter = setInterval(function () {
        startValue += 1;
        values.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, 50);

});