const images = ['none1.jpg', 'none2.jpg', 'none3.jpg']; // Ìæ»»ÎªÄãµÄÍ¼Æ¬Â·¾¶
let currentIndex = 0;

function moveSlide(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.querySelector('.picture_food').src = images[currentIndex];
}
