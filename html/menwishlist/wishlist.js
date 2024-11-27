// 오버레이 메뉴 열기 함수
function openMenu() {
    document.getElementById("overlay-menu").style.width = "250px";
}

// 오버레이 메뉴 닫기 함수
function closeMenu() {
    document.getElementById("overlay-menu").style.width = "0";
}

// 로그인 화면으로 이동
function goToLogin() {
    window.location.href = '../login/login.html'; // 로그인 화면 경로
}

// 페이지로 이동
function goToPage(page) {
    window.location.href = page; // 해당 페이지로 경로 설정
}

// 오버레이 메뉴 열기 함수
function openMenu() {
    document.getElementById("overlay-menu").style.width = "250px";
}

// 오버레이 메뉴 닫기 함수
function closeMenu() {
    document.getElementById("overlay-menu").style.width = "0";
}

// 예제 데이터: 찜한 이미지 목록
const wishlistData = [
    { id: 1, image: 'https://via.placeholder.com/200', title: 'Outfit 1' },
    { id: 2, image: 'https://via.placeholder.com/200', title: 'Outfit 2' },
    { id: 3, image: 'https://via.placeholder.com/200', title: 'Outfit 3' },
    { id: 4, image: 'https://via.placeholder.com/200', title: 'Outfit 4' }
];

// 찜 목록 컨테이너 가져오기
const wishlistContainer = document.querySelector('.wishlist-container');

// 찜 목록 렌더링 함수
function renderWishlist() {
    wishlistContainer.innerHTML = ''; // 초기화
    wishlistData.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        
        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <p>${item.title}</p>
            <button onclick="removeFromWishlist(${item.id})">Remove</button>
        `;
        wishlistContainer.appendChild(wishlistItem);
    });
}

// 찜 목록에서 제거하는 함수
function removeFromWishlist(id) {
    const index = wishlistData.findIndex(item => item.id === id);
    if (index !== -1) {
        wishlistData.splice(index, 1);
        renderWishlist();
    }
}

// 초기 렌더링
renderWishlist();
