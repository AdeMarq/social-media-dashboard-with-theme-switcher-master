const themeToggler = document.querySelector(".toggle-btn");
const toggleWrapper = document.querySelector(".toggle-wrap")
const body = document.querySelector("body");



themeToggler.addEventListener("click", () => {
    themeToggler.classList.toggle("active");
    toggleWrapper.classList.toggle("active");
    body.classList.toggle('active')
    document.body.classList.toggle("dark-theme-variable")
})

