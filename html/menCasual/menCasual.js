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
    window.location.href = '../mainpage1.html'; // 로그인 화면으로 경로 설정
}

// 페이지로 이동
function goToPage(page) {
    window.location.href = page; // 클릭한 메뉴 항목의 해당 페이지로 경로 설정
}

const WISHLIST_STORAGE_KEY = 'wishlistItems';

// Wishlist 데이터 가져오기
function getWishlist() {
    return JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY)) || [];
}

// Wishlist에 데이터 추가
function addToWishlist(imageUrl, title) {
    const wishlist = getWishlist();
    const isDuplicate = wishlist.some(item => item.image === imageUrl);

    if (!isDuplicate) {
        wishlist.push({ image: imageUrl, title });
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
        alert('위시리스트에 추가되었습니다!');
    } else {
        alert('이미 추가된 항목입니다!');
    }
}
  