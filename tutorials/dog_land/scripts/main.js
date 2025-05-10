images = [
    'dog_pic.jpeg',
    'dog_pic2.jpeg',
    'dog_pic3.jpeg',
    'dog_pic4.jpeg',
    'dog_pic5.jpeg',
    'dog_pic6.jpeg',
    'dog_pic7.jpeg',
    'dog_pic8.jpeg'
]

activeImages = document.querySelectorAll("img");
// console.log(active_images);

imgCount = activeImages.length;

activeImages.forEach((element) => {
    element.addEventListener("click", () => {
        if (imgCount > images.length - 1) {
            imgCount = 0
        }
        element.setAttribute("src", `artifacts/${images.at(imgCount)}`);
        imgCount++;
    })
})

primaryHeader = document.querySelector(".main-header");
secondaryHeader = document.querySelector(".secondary-header");
userBtn = document.querySelector(".user-btn");
let userName = "___";

primaryHeader.addEventListener("click", () => {
    if (secondaryHeader.textContent.includes("___")) {
        setUserName();
    }
    primaryHeader.style.display = "none";
    secondaryHeader.style.display = "block";
    userBtn.style.display = "block";
})

secondaryHeader.addEventListener("click", () => {
    userBtn.style.display = "none";
    secondaryHeader.style.display = "none";
    primaryHeader.style.display = "block";
})

userBtn.addEventListener("click", () => {
    setUserName();
})

function setUserName() {
    let newUserName = prompt("Please enter your name.");
    secondaryHeader.textContent = secondaryHeader.textContent.replace(userName, newUserName);
    userName = newUserName;
}