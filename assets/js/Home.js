// counter.js
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    const easeOut = (t) => 1 - Math.pow(1 - t, 3); // Công thức easing
  
    const animateCount = (counter, duration = 2000) => {
      const target = +counter.getAttribute("data-target");
      let start = 0;
      const startTime = performance.now();
  
      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // không vượt quá 1
        const easedProgress = easeOut(progress);
        const value = Math.floor(easedProgress * target);
  
        counter.textContent = value;
  
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target; // đảm bảo đúng giá trị cuối cùng
        }
      };
  
      requestAnimationFrame(updateCounter);
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.6 });
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });




  

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 3,
    loop: true,
    speed: 3000, 
    autoplay: {
      delay: 30,
      disableOnInteraction: false,
    },
    freeMode: true, 
    freeModeMomentum: false,
    grabCursor: true,
    breakpoints: {
      768: { slidesPerView: 5 },
      480: { slidesPerView: 2 },
    },
  });
  

  