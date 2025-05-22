const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    btn.textContent = "You clicked me!";
    setTimeout(() => {
        btn.textContent = "Press me";
    }, 1000);
})