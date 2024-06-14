const images = document.querySelectorAll('.show img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// 點擊照片左右切換
images.forEach((img, i) => {
    img.addEventListener('click', () => {
        if (i === currentIndex) {
            nextImage();
        }
    });
});

// 初始顯示第一張照片
showImage(currentIndex);

