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
    window.location.href = '../mainpage1.html'; // 로그인 화면 경로
}

// 페이지로 이동
function goToPage(page) {
    window.location.href = page; // 해당 페이지로 경로 설정
}

// 찜 목록 컨테이너 가져오기
const wishlistContainer = document.querySelector('.wishlist-container');

// Wishlist 데이터를 로컬 스토리지에서 가져오기
const WISHLIST_STORAGE_KEY = 'wishlistItems';

// Wishlist 데이터를 가져오는 함수
function getWishlist() {
    return JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY)) || [];
}

// Wishlist에 데이터 추가
function renderWishlist() {
    const wishlist = getWishlist();
    wishlistContainer.innerHTML = ''; // 기존 항목 초기화

    wishlist.forEach((item, index) => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';

        // 이미지 경로 확인 및 디버깅용 콘솔 출력
        console.log("Item image path:", item.image);

        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="width: 100px; height: 100px;">
            <p>${item.title}</p>
            <button onclick="removeFromWishlist(${index})">Remove</button>
        `;
        
        wishlistContainer.appendChild(wishlistItem);
    });
}

// Wishlist에서 아이템 제거
function removeFromWishlist(index) {
    const wishlist = getWishlist();
    wishlist.splice(index, 1);  // 해당 아이템 삭제
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    renderWishlist();  // 변경된 위시리스트 다시 렌더링
}

// 위시리스트에 아이템 추가 (예시 코드)
function addItemToWishlist() {
    const wishlistItem = {
        image: "images/casualFull1.png",  // 대소문자 맞춰서 수정된 이미지 경로
        title: "Outfit 1"
    };

    // 로컬 스토리지에서 현재 위시리스트 가져오기
    const wishlist = getWishlist();

    // 새로운 아이템을 위시리스트에 추가
    wishlist.push(wishlistItem);

    // 업데이트된 위시리스트를 로컬 스토리지에 저장
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));

    // 위시리스트 다시 렌더링
    renderWishlist();
}

// 페이지 로드 시 렌더링
document.addEventListener('DOMContentLoaded', renderWishlist);

// 예시로, "Add to Wishlist" 버튼에 addItemToWishlist 함수를 연결할 수 있습니다.
