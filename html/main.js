document.addEventListener("DOMContentLoaded", function () {
  const menSection = document.querySelector(".men");
  const womenSection = document.querySelector(".women");

  // 남성 섹션 클릭 시
  menSection.addEventListener("click", function () {
      fadeOut(menSection, "../men_main/men_main.html"); // 원하는 URL로 변경
  });

  // 여성 섹션 클릭 시
  womenSection.addEventListener("click", function () {
      fadeOut(womenSection, "../women_main/women_main.html"); // 원하는 URL로 변경
  });

  function fadeOut(section, targetUrl) {
      section.classList.add("fade-out");
      setTimeout(function () {
          window.location.href = targetUrl;
      }, 1000); // 1초 후 페이지 이동
  }
});
