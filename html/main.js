document.addEventListener('DOMContentLoaded', function () {
    const menButton = document.getElementById('men-button');
    const womenButton = document.getElementById('women-button');
    const rightPanel = document.getElementById('right-panel');
    const rightPanelImage = document.getElementById('right-panel-image');
    const rightPanelText = document.getElementById('right-panel-text');

    function updateImage(imageSrc, text) {
      if (rightPanel.style.display === 'block') {
        rightPanel.style.opacity = '0';
        setTimeout(() => {
          rightPanelImage.src = imageSrc;
          rightPanelText.textContent = text;
          rightPanel.style.opacity = '1';
        }, 1000);
      } else {
        rightPanelImage.src = imageSrc;
        rightPanelText.textContent = text;
        rightPanel.style.display = 'block';
        setTimeout(() => {
          rightPanel.style.opacity = '1';
        }, 10);
      }
    }

    womenButton.addEventListener('click', function () {
      updateImage('images/Women.png', 'WOMEN');
    });

    menButton.addEventListener('click', function () {
      updateImage('images/men.png', 'MEN');
    });

    rightPanelImage.addEventListener('click', function () {
      const src = rightPanelImage.src.split('/').pop().toLowerCase(); // 파일 이름 추출 및 소문자로 변환
      if (src === 'men.png') {
        window.location.href = 'https://naver.com';
      } else if (src === 'women.png') {
        window.location.href = '../html/woman/womanmain.html';
      }
    });
  });