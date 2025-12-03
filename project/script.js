/**
 * 모여봐요 동물의 숲 아이템 카탈로그
 * 카테고리별 아이템 관리 및 페이지 네비게이션
 */

// ===== 아이템 데이터베이스 =====
// 가구 서브 카테고리
const furnitureSubCategories = {
    bed: [
        { id: 1, name: '드림 큐트 침대', image: '../image/cutebed.webp', price: 9500, description: '곰인형 장식이 있는 아기자기한 1인용 침대입니다.<br>[클릭해보세요!]' },
        { id: 2, name: '2층 침대', image: '../image/bunkbed.webp', price: 5000, description: '공간 절약을 위해 위아래로 층을 나눈 실용적인 침대입니다.' },
        { id: 3, name: '라탄 침대', image: '../image/latanbed.webp', price: 7200, description: '라탄 소재로 통풍이 잘 되고 넓게 누울 수 있는 침대입니다.' },
        { id: 4, name: '박스 침대', image: '../image/boxbed.webp', price: 0, description: '박스 세 개를 가로로 이어 붙여 만든 단순한 형태의 침대입니다.' },
        { id: 5, name: '반려동물 침대', image: '../image/petbed.webp', price: 1100, description: '작은 반려동물이 눕기 좋은 푹신한 쿠션형 침대입니다.' }
    ],
    sofa: [
        { id: 6, name: '큐트 소파', image: '../image/cutesofa.webp', price: 9600, description: '하트 쿠션이 포함된 아기자기한 색감의 소파입니다.' },
        { id: 7, name: '머메이드 소파', image: '../image/Mermaidsofa.webp', price: 11200, description: '앉기만 해도 인어공주가 되는 소파입니다.' },
        { id: 8, name: '박스 소파', image: '../image/boxsofa.webp', price: 0, description: '박스 두개를 이어붙인 단순한 형태의 소파입니다.' },
        { id: 9, name: '리클라이너 소파', image: '../image/reclinersofa.webp', price: 7000, description: '등받이 조절 가능한 소파입니다.' },
        { id: 10, name: '빈티지 소파', image: '../image/vintagesofa.webp', price: 5500, description: '클래식한 빈티지 소파입니다.' }
    ],
    chair: [
        { id: 11, name: '나무 의자', emoji: '🪑', price: 1500, description: '심플한 나무 의자입니다.' },
        { id: 12, name: '회전 의자', emoji: '🪑', price: 2500, description: '360도 회전하는 의자입니다.' },
        { id: 13, name: '안락 의자', emoji: '🪑', price: 3500, description: '편안한 안락 의자입니다.' },
        { id: 14, name: '식탁 의자', emoji: '🪑', price: 1800, description: '식탁용 의자입니다.' },
        { id: 15, name: '접이식 의자', emoji: '🪑', price: 1200, description: '휴대하기 좋은 접이식 의자입니다.' }
    ],
    table: [
        { id: 16, name: '원목 테이블', emoji: '🪵', price: 5000, description: '고급스러운 원목 테이블입니다.' },
        { id: 17, name: '유리 테이블', emoji: '🪟', price: 4500, description: '세련된 유리 테이블입니다.' },
        { id: 18, name: '접이식 테이블', emoji: '📋', price: 3000, description: '공간 절약형 접이식 테이블입니다.' },
        { id: 19, name: '식탁', emoji: '🍽️', price: 6000, description: '가족 식사용 테이블입니다.' },
        { id: 20, name: '사이드 테이블', emoji: '🪵', price: 2000, description: '작은 사이드 테이블입니다.' }
    ],
    lamp: [
        { id: 21, name: '스탠드 램프', emoji: '💡', price: 2500, description: '책상용 스탠드 램프입니다.' },
        { id: 22, name: '플로어 램프', emoji: '🕯️', price: 3500, description: '거실용 플로어 램프입니다.' },
        { id: 23, name: 'LED 램프', emoji: '💡', price: 2000, description: '에너지 절약형 LED 램프입니다.' },
        { id: 24, name: '무드등', emoji: '🕯️', price: 1500, description: '은은한 무드등입니다.' },
        { id: 25, name: '벽등', emoji: '💡', price: 3000, description: '벽에 다는 조명입니다.' }
    ]
};

const itemsDatabase = {
    clothing: [
        { id: 26, name: '티셔츠', emoji: '👕', price: 800, description: '편안한 티셔츠입니다.' },
        { id: 27, name: '원피스', emoji: '👗', price: 1500, description: '예쁜 원피스입니다.' },
        { id: 28, name: '모자', emoji: '🎩', price: 600, description: '멋진 모자입니다.' },
        { id: 29, name: '재킷', emoji: '🧥', price: 2000, description: '따뜻한 재킷입니다.' },
        { id: 30, name: '스웨터', emoji: '🧶', price: 1200, description: '포근한 스웨터입니다.' }
    ],
    shoes: [
        { id: 31, name: '운동화', emoji: '👟', price: 1000, description: '편한 운동화입니다.' },
        { id: 32, name: '부츠', emoji: '🥾', price: 1800, description: '튼튼한 부츠입니다.' },
        { id: 33, name: '슬리퍼', emoji: '🩴', price: 500, description: '집에서 신는 슬리퍼입니다.' },
        { id: 34, name: '샌들', emoji: '👡', price: 900, description: '여름용 샌들입니다.' }
    ],
    bags: [
        { id: 35, name: '백팩', emoji: '🎒', price: 1500, description: '든든한 백팩입니다.' },
        { id: 36, name: '핸드백', emoji: '👜', price: 2000, description: '세련된 핸드백입니다.' },
        { id: 37, name: '크로스백', emoji: '👝', price: 1800, description: '편한 크로스백입니다.' },
        { id: 38, name: '토트백', emoji: '🛍️', price: 1200, description: '장볼 때 좋은 토트백입니다.' }
    ],
    tools: [
        { id: 39, name: '낚싯대', emoji: '🎣', price: 2500, description: '물고기를 잡는 낚싯대입니다.' },
        { id: 40, name: '삽', emoji: '⛏️', price: 2000, description: '땅을 파는 삽입니다.' },
        { id: 41, name: '도끼', emoji: '🪓', price: 2500, description: '나무를 자르는 도끼입니다.' },
        { id: 42, name: '물뿌리개', emoji: '💧', price: 1500, description: '꽃에 물을 주는 물뿌리개입니다.' }
    ],
    other: [
        { id: 43, name: '벽지', emoji: '🖼️', price: 1000, description: '방을 꾸미는 벽지입니다.' },
        { id: 44, name: '바닥재', emoji: '🟫', price: 1200, description: '방 바닥을 꾸미는 바닥재입니다.' },
        { id: 45, name: '음악 CD', emoji: '🎵', price: 500, description: '집에서 들을 수 있는 음악입니다.' },
        { id: 46, name: '그림', emoji: '🖼️', price: 2000, description: '벽에 거는 그림입니다.' }
    ]
};

// ===== DOM 요소 =====
const homePage = document.getElementById('homePage');
const categoryPage = document.getElementById('categoryPage');
const subCategoryPage = document.getElementById('subCategoryPage');
const categoryCards = document.querySelectorAll('.category-card');
const backBtn = document.getElementById('backBtn');
const backToSubBtn = document.getElementById('backToSubBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const categoryTitle = document.getElementById('categoryTitle');
const itemsGrid = document.getElementById('itemsGrid');
const subCategoryGrid = document.getElementById('subCategoryGrid');

// ===== 카테고리 이름 매핑 =====
const categoryNames = {
    furniture: '가구',
    clothing: '옷',
    shoes: '신발',
    bags: '가방',
    tools: '도구',
    other: '기타 아이템'
};

const furnitureSubCategoryNames = {
    bed: { name: '침대', emoji: '🛏️' },
    sofa: { name: '소파', emoji: '🛋️' },
    chair: { name: '의자', emoji: '🪑' },
    table: { name: '테이블', emoji: '🪵' },
    lamp: { name: '스탠드램프', emoji: '💡' }
};

let currentMainCategory = '';
let currentSubCategory = '';

// ===== 초기화 =====
function init() {
    // 저장된 페이지 상태 복원
    restorePageState();
    
    // 카테고리 카드 클릭 이벤트
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category === 'furniture') {
                showFurnitureSubCategories();
            } else {
                showCategoryPage(category);
            }
        });
    });

    // 뒤로 가기 버튼들
    backBtn.addEventListener('click', () => {
        if (currentSubCategory) {
            // 서브 카테고리에서 온 경우 서브 카테고리로
            showFurnitureSubCategories();
        } else {
            // 일반 카테고리는 홈으로
            showHomePage();
        }
    });
    backToSubBtn.addEventListener('click', showFurnitureSubCategories);
    backToHomeBtn.addEventListener('click', showHomePage);

    // 클릭 이모지 효과
    document.addEventListener('click', createLeafEmoji);
}

// ===== 페이지 전환 함수 =====
function showFurnitureSubCategories() {
    homePage.classList.remove('active');
    categoryPage.classList.remove('active');
    subCategoryPage.classList.add('active');
    
    currentMainCategory = 'furniture';
    currentSubCategory = '';
    
    // 페이지 상태 저장
    savePageState();
    
    // 서브 카테고리 렌더링
    renderFurnitureSubCategories();
    
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
}

function showCategoryPage(category) {
    homePage.classList.remove('active');
    subCategoryPage.classList.remove('active');
    categoryPage.classList.add('active');
    
    currentMainCategory = category;
    
    // 타이틀 설정
    categoryTitle.textContent = `${categoryNames[category]} 📦`;
    
    // 아이템 렌더링
    renderItems(category);
    
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
}

function showSubCategoryItems(subCategory) {
    subCategoryPage.classList.remove('active');
    categoryPage.classList.add('active');
    
    currentSubCategory = subCategory;
    
    // 페이지 상태 저장
    savePageState();
    
    // 타이틀 설정
    const subInfo = furnitureSubCategoryNames[subCategory];
    categoryTitle.textContent = `${subInfo.emoji} ${subInfo.name}`;
    
    // 뒤로 가기 버튼 표시 조정
    backBtn.style.display = 'none';
    backToSubBtn.style.display = 'inline-block';
    
    // 아이템 렌더링
    renderSubCategoryItems(subCategory);
    
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
}

function showHomePage() {
    categoryPage.classList.remove('active');
    subCategoryPage.classList.remove('active');
    homePage.classList.add('active');
    
    currentMainCategory = '';
    currentSubCategory = '';
    
    // 페이지 상태 저장
    savePageState();
    
    // 버튼 표시 초기화
    backBtn.style.display = 'inline-block';
    backToSubBtn.style.display = 'none';
    
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
}

// ===== 가구 서브 카테고리 렌더링 =====
function renderFurnitureSubCategories() {
    subCategoryGrid.innerHTML = Object.keys(furnitureSubCategoryNames).map(key => {
        const sub = furnitureSubCategoryNames[key];
        return `
            <button class="category-card sub-category-card" data-subcategory="${key}">
                <span class="category-icon">${sub.emoji}</span>
                <h2 class="category-name">${sub.name}</h2>
            </button>
        `;
    }).join('');
    
    // 서브 카테고리 클릭 이벤트 등록
    document.querySelectorAll('.sub-category-card').forEach(card => {
        card.addEventListener('click', () => {
            const subCategory = card.dataset.subcategory;
            showSubCategoryItems(subCategory);
        });
    });
}

// ===== 아이템 렌더링 =====
function renderItems(category) {
    const items = itemsDatabase[category] || [];
    
    if (items.length === 0) {
        itemsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <p class="empty-state-text">아이템이 없습니다</p>
            </div>
        `;
        return;
    }
    
    itemsGrid.innerHTML = items.map(item => `
        <div class="item-card" data-id="${item.id}">
            <span class="item-emoji">${item.emoji}</span>
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">${item.price.toLocaleString()}</p>
            <p class="item-description">${item.description}</p>
        </div>
    `).join('');
}

// ===== 서브 카테고리 아이템 렌더링 =====
function renderSubCategoryItems(subCategory) {
    const items = furnitureSubCategories[subCategory] || [];
    
    if (items.length === 0) {
        itemsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <p class="empty-state-text">아이템이 없습니다</p>
            </div>
        `;
        return;
    }
    
    itemsGrid.innerHTML = items.map(item => `
        <div class="item-card" data-id="${item.id}">
            ${item.image 
                ? `<img src="${item.image}" alt="${item.name}" class="item-image">` 
                : `<span class="item-emoji">${item.emoji || '🛏️'}</span>`
            }
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">${item.price.toLocaleString()}</p>
            <p class="item-description">${item.description}</p>
        </div>
    `).join('');
}

// ===== 클릭 시 나뭇잎 이미지 효과 =====
function createLeafEmoji(e) {
    // 버튼이나 카드 클릭 시에만 작동
    const isClickable = e.target.closest('.category-card, .item-card, .back-btn');
    if (!isClickable) return;
    
    const leaf = document.createElement('img');
    leaf.className = 'leaf-emoji';
    leaf.src = '../image/leaflogo.png';
    leaf.style.left = e.clientX + 'px';
    leaf.style.top = e.clientY + 'px';
    
    document.body.appendChild(leaf);
    
    // 애니메이션 종료 후 제거
    setTimeout(() => {
        leaf.remove();
    }, 2000);
}

// ===== 페이지 상태 저장/복원 =====
function savePageState() {
    const state = {
        mainCategory: currentMainCategory,
        subCategory: currentSubCategory
    };
    localStorage.setItem('acPageState', JSON.stringify(state));
}

function restorePageState() {
    const savedState = localStorage.getItem('acPageState');
    if (!savedState) return;
    
    try {
        const state = JSON.parse(savedState);
        
        if (state.mainCategory === 'furniture' && !state.subCategory) {
            // 가구 서브카테고리 페이지
            showFurnitureSubCategories();
        } else if (state.mainCategory === 'furniture' && state.subCategory) {
            // 가구 세부 아이템 페이지
            showFurnitureSubCategories();
            setTimeout(() => showSubCategoryItems(state.subCategory), 0);
        } else if (state.mainCategory && state.mainCategory !== 'furniture') {
            // 일반 카테고리 페이지
            showCategoryPage(state.mainCategory);
        }
        // 상태 없으면 홈 페이지 유지 (기본값)
    } catch (e) {
        console.error('페이지 상태 복원 실패:', e);
    }
}

// ===== 페이지 로드 시 초기화 =====
document.addEventListener('DOMContentLoaded', init);
