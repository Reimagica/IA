const images = ['none1.jpg', 'none2.jpg', 'none3.jpg']; // �滻Ϊ���ͼƬ·��
let currentIndex = 0;

function moveSlide(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.querySelector('.picture_food').src = images[currentIndex];
}
