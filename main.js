
//animated underline yay
let items = document.querySelectorAll("nav a");

items.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector("nav a.active").classList.remove("active");
        item.classList.add("active");
    })

})