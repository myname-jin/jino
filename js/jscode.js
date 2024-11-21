document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('men').addEventListener('click', function () {
    window.location.href = 'https://naver.com'; // 현재 창에서 naver.com으로 이동
  });

  document.getElementById('women').addEventListener('click', function () {
    window.location.href = 'https://daum.net'; // 현재 창에서 daum.net으로 이동
  });
});