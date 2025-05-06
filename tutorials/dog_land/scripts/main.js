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