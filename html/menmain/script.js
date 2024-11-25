// 오버레이 메뉴 열기 함수
function openMenu() {
    document.getElementById("overlay-menu").style.width = "250px";
}

// 오버레이 메뉴 닫기 함수
function closeMenu() {
    document.getElementById("overlay-menu").style.width = "0";
}

// 캐러셀 슬라이드 기능
let slideIndex = 0;
        const slides = document.getElementById("slides");
        const dots = document.getElementsByClassName("dot");

        function showSlide(index) {
            if (index >= slides.children.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.children.length - 1;

            slides.style.transform = `translateX(-${slideIndex * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            slideIndex++;
            showSlide(slideIndex);
        }

        function currentSlide(index) {
            slideIndex = index;
            showSlide(slideIndex);
        }

        function updateDots() {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active");
            }
            dots[slideIndex].classList.add("active");
        }

        // 슬라이드 자동 전환
        function autoSlide() {
            slideInterval = setInterval(nextSlide, 3000); // 3초마다 슬라이드 전환
        }

        autoSlide(); // 자동 슬라이드 시작
