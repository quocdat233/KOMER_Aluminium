window.onscroll = function() {
    stickyHeader();
};

var header = document.querySelector('.header'); // Lấy header
var sticky = header.offsetTop; // Vị trí ban đầu của header

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky"); // Thêm lớp "sticky" khi cuộn xuống
    } else {
        header.classList.remove("sticky"); // Bỏ lớp "sticky" khi cuộn lên
    }
}
AOS.init({
    duration: 1000, // thời gian hiệu ứng (ms)

    once: false // Cho phép chạy nhiều lần
  });
  let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
    // Cuộn xuống → ẩn header
    header.classList.remove("show");
    header.classList.add("hide");
  } else {
    // Cuộn lên → hiện header
    header.classList.remove("hide");
    header.classList.add("show");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

  
