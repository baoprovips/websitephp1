// Lấy các phần tử cần sử dụng
var sliderContainer = document.querySelector('.slider-container');
var slider = document.querySelector('.slider');
var images = document.querySelectorAll('.slider img');

// Khai báo biến và giá trị khởi tạo
var slideIndex = 0;
var slideHeight = sliderContainer.clientHeight;
var totalSlides = images.length;

// Thiết lập kích thước cho slider
slider.style.height = slideHeight * totalSlides + 'px';

// Hàm chạy slide
function runSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = totalSlides -1;
  }
  slider.style.top = -slideIndex * slideHeight + 'px';
}

// Thiết lập interval cho slide chạy tự động
var slideInterval = setInterval(runSlide, 2000);
