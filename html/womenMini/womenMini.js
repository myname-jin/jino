// 오버레이 메뉴 열기 함수
function openMenu() {
    document.getElementById("overlay-menu").style.width = "250px"; // 오버레이 메뉴 열기
}

// 오버레이 메뉴 닫기 함수
function closeMenu() {
    document.getElementById("overlay-menu").style.width = "0"; // 오버레이 메뉴 닫기
}

// 로그인 화면으로 이동
function goToLogin() {
    window.location.href = '../login/login.html'; // 로그인 화면으로 경로 설정
}

// 페이지로 이동
function goToPage(page) {
    window.location.href = page; // 클릭한 메뉴 항목의 해당 페이지로 경로 설정
}