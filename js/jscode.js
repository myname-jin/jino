document.addEventListener('DOMContentLoaded', function () {
  // "MEN" 버튼 클릭 시 naver.com으로 이동
  document.getElementById('men').addEventListener('click', function () {
    window.location.href = 'https://naver.com'; // 현재 창에서 naver.com으로 이동
  });

  // "WOMEN" 버튼 클릭 시 Mainpage.html로 이동
  document.getElementById('women').addEventListener('click', function () {
    window.location.href = 'Mainpage.html'; // 현재 창에서 Mainpage.html로 이동
  });
});
