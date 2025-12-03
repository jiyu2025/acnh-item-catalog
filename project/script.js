/**
 * 모여봐요 동물의 숲 아이템 카탈로그
 * 카테고리별 아이템 관리 및 페이지 네비게이션
 */

// ===== 아이템 데이터베이스 =====
// 가구 서브 카테고리
const furnitureSubCategories = {
    bed: [
        { 
            id: 1, 
            name: '드림 큐트 침대', 
            image: '../image/cutebed.webp', 
            price: 9500, 
            description: '곰인형 장식이 있는 아기자기한 1인용 침대입니다.<br>[클릭해보세요!]',
            variants: [
                { image: '../image/cutebed.webp', colorName: '핑크' },
                { image: '../image/cutebed2.webp', colorName: '블루' },
                { image: '../image/cutebed3.webp', colorName: '옐로' },
                { image: '../image/cutebed4.webp', colorName: '블랙' }
            ]
        },
        { id: 2, name: '2층 침대', image: '../image/bunkbed.webp', price: 5000, description: '공간 절약을 위해 위아래로 층을 나눈 실용적인 침대입니다.' },
        { id: 3, name: '라탄 침대', image: '../image/latanbed.webp', price: 7200, description: '라탄 소재로 통풍이 잘 되고 넓게 누울 수 있는 침대입니다.' },
        { id: 4, name: '박스 침대', image: '../image/boxbed.webp', price: 0, description: '박스 세 개를 가로로 이어 붙여 만든 단순한 형태의 침대입니다.' },
        { id: 5, name: '반려동물 침대', image: '../image/petbed.webp', price: 1100, description: '작은 반려동물이 눕기 좋은 푹신한 쿠션형 침대입니다.' }
    ],
    sofa: [
        { 
            id: 6, 
            name: '큐트 소파', 
            image: '../image/cutesofa.webp', 
            price: 9600, 
            description: '하트 쿠션이 포함된 아기자기한 색감의 소파입니다.<br>[클릭해보세요!]',
            variants: [
                { image: '../image/cutesofa.webp', colorName: '레드' },
                { image: '../image/cutesofa2.webp', colorName: '옐로' },
                { image: '../image/cutesofa3.webp', colorName: '스카이 블루' },
                { image: '../image/cutesofa4.webp', colorName: '화이트' }
            ]
        },
        { id: 7, name: '머메이드 소파', image: '../image/Mermaidsofa.webp', price: 11200, description: '앉기만 해도 인어공주가 되는 소파입니다.' },
        { id: 8, name: '박스 소파', image: '../image/boxsofa.webp', price: 0, description: '박스 두개를 이어붙인 단순한 형태의 소파입니다.' },
        { id: 9, name: '통나무 긴 소파', image: '../image/woodsofa.webp', price: 1920, description: '통나무를 이용해 수제작한 소파입니다.' },
        { id: 10, name: '빈티지 소파', image: '../image/vintagesofa.webp', price: 26000, description: '고급스러운 분위기의 빈티지 소파입니다.' }
    ],
    chair: [
        { 
            id: 11, 
            name: '큐트 체어', 
            image: '../image/cutechairs.webp', 
            price: 4300, 
            description: '심플한 나무 의자입니다.<br>[클릭해보세요!]',
            variants: [
                { image: '../image/cutechairs.webp', colorName: '레드' },
                { image: '../image/cutechairs2.webp', colorName: '옐로' },
                { image: '../image/cutechairs3.webp', colorName: '스카이 블루' },
                { image: '../image/cutechairs4.webp', colorName: '화이트' }
            ]
        },
        { id: 12, name: '강의실 의자', image: '../image/lecturechair.webp', price: 3300, description: '강의실에서 사용하는 의자입니다.' },
        { id: 13, name: '목욕탕 의자', image: '../image/bathchair.webp', price: 3500, description: '목욕탕에서 사용하는 의자입니다.' },
        { id: 14, name: '얼음 의자', image: '../image/frozenchair.webp', price: 6200, description: '얼음으로 만든 의자입니다.' },
        { id: 15, name: '접이식 아웃도어 의자', image: '../image/outdoorchair.webp', price: 1500, description: '휴대하기 좋은 접이식 아웃도어 의자입니다.' }
    ],
    table: [
        { 
            id: 16, 
            name: '큐트 티 테이블', 
            image: '../image/cutetable.webp', 
            price: 3000, 
            description: '고급스러운 원목 테이블입니다.<br>[클릭해보세요!]',
            variants: [
                { image: '../image/cutetable.webp', colorName: '레드' },
                { image: '../image/cutetable2.webp', colorName: '옐로' },
                { image: '../image/cutetable3.webp', colorName: '스카이 블루' },
                { image: '../image/cutetable4.webp', colorName: '화이트' }
            ]
        },
        { id: 17, name: '돌 테이블', image: '../image/stonetable.webp', price: 1200, description: '돌로 만들어진 단단한 테이블입니다.' },
        { id: 18, name: '버섯 테이블', image: '../image/mushroomtable.webp', price: 1520, description: '버섯으로 만들어진 둥근 테이블입니다.' },
        { id: 19, name: '생일 테이블', image: '../image/birthtable.webp', price: 300, description: '생일 파티를 위한 테이블입니다.' },
        { id: 20, name: '중화 요리 테이블', image: '../image/diningtable.webp', price: 73000, description: '중화요리를 즐길 수 있는 테이블입니다.' }
    ],
    lamp: [
        { 
            id: 21, 
            name: '큐트 플로어 스탠드', 
            image: '../image/cutestand.webp', 
            price: 3500, 
            description: '책상용 스탠드 램프입니다.<br>[클릭해보세요!]',
            variants: [
                { image: '../image/cutestand.webp', colorName: '레드' },
                { image: '../image/cutestand2.webp', colorName: '옐로' },
                { image: '../image/cutestand3.webp', colorName: '스카이 블루' },
                { image: '../image/cutestand4.webp', colorName: '화이트' }
            ]
        },
        { id: 22, name: '야자수 램프', image: '../image/palmstand.webp', price: 3280, description: '방 안을 하와이로 만들어주는 램프입니다.' },
        { id: 23, name: '소프트아이스크림 램프', image: '../image/icestand.webp', price: 3000, description: '달달하고 시원한 램프입니다.' },
        { id: 24, name: '버섯 램프', image: '../image/mushroomstand.webp', price: 1600, description: '버섯 모양의 귀여운 램프입니다.' },
        { id: 25, name: '바닥 조명', image: '../image/floorlight.webp', price: 2200, description: '바닥에서 비춰주는 조명입니다.' }
    ]
};

const itemsDatabase = {
    clothing: [
        { id: 26, name: '노르딕풍 가디건', image: '../image/cardigan.webp', price: 1440, description: '편안한 티셔츠입니다.' },
        { id: 27, name: '개구리 그림 티셔츠', image: '../image/frogtee.webp', price: 640, description: '예쁜 원피스입니다.' },
        { id: 28, name: '데님 페인터 팬츠', image: '../image/denimpants.webp', price: 600, description: '멋진 모자입니다.' },
        { id: 30, name: '밀리터리 치마', image: '../image/camoskirt.webp', price: 1300, description: '포근한 스웨터입니다.' },
        { id: 47, name: '근육 수트', image: '../image/musclesuit.webp', price: 2280, description: '' },
        { id: 48, name: '달걀 파티 원피스', image: '../image/eggdress.webp', price: 7200, description: '' },
        { id: 49, name: '달걀 파티 모자', image: '../image/egghat.webp', price: 4800, description: '' },
        { id: 50, name: '빛나는 하트 액세서리', image: '../image/heartbopper.webp', price: 245, description: '' }
    ],
    shoes: [
        { id: 31, name: '러버토 하이컷 스니커', image: '../image/hightops.webp', price: 1260, description: '편한 운동화입니다.' },
        { id: 32, name: '레인 부츠', image: '../image/boots.webp', price: 490, description: '튼튼한 부츠입니다.' },
        { id: 33, name: '메리제인 슈즈', image: '../image/slippers.webp', price: 1800, description: '집에서 신는 슬리퍼입니다.' },
        { id: 34, name: '리본 샌들', image: '../image/sandals.webp', price: 1300, description: '여름용 샌들입니다.' },
        { id: 51, name: '순백 펌프스', image: '', price: 3000, description: '' }
    ],
    bags: [
        { id: 35, name: '곰돌이 배낭', image: '../image/bearbag.webp', price: 1300, description: '든든한 백팩입니다.' },
        { id: 36, name: '가죽 핸드백', image: '../image/handbag.webp', price: 2400, description: '세련된 핸드백입니다.' },
        { id: 37, name: '드림 큐브 리본 미니백', image: '../image/minibag.webp', price: 1080, description: '편한 크로스백입니다.' },
        { id: 38, name: '미니 가죽 가방', image: '../image/pleatherbag.webp', price: 1600, description: '장볼 때 좋은 토트백입니다.' },
        { id: 52, name: '종이 가방', image: '../image/paperbag.webp', price: 0, description: '' }
    ],
    tools: [
        { id: 39, name: '낚싯대', image: '../image/fishing.webp', price: 2500, description: '물고기를 잡는 낚싯대입니다.' },
        { id: 40, name: '삽', image: '../image/shovel.webp', price: 2000, description: '땅을 파는 삽입니다.' },
        { id: 41, name: '도끼', image: '../image/axe.webp', price: 2500, description: '나무를 자르는 도끼입니다.' },
        { id: 42, name: '물뿌리개', image: '../image/watering.webp', price: 1500, description: '꽃에 물을 주는 물뿌리개입니다.' },
        { id: 53, name: '사다리', image: '', price: 0, description: '' }
    ],
    other: [
        { id: 43, name: '벽지', image: '../image/wallpaper.webp', price: 1000, description: '방을 꾸미는 벽지입니다.' },
        { id: 44, name: '바닥재', image: '../image/flooring.webp', price: 1200, description: '방 바닥을 꾸미는 바닥재입니다.' },
        { id: 45, name: '음악 CD', image: '../image/musiccd.webp', price: 500, description: '집에서 들을 수 있는 음악입니다.' },
        { id: 46, name: '그림', image: '../image/painting.webp', price: 2000, description: '벽에 거는 그림입니다.' }
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
    lamp: { name: '램프', emoji: '💡' }
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
            ${item.image 
                ? `<img src="${item.image}" alt="${item.name}" class="item-image">` 
                : `<span class="item-emoji">${item.emoji}</span>`
            }
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
    
    // 색상 변형이 있는 아이템에 클릭 이벤트 추가
    document.querySelectorAll('.item-card').forEach(card => {
        const itemId = parseInt(card.dataset.id);
        const item = items.find(i => i.id === itemId);
        if (item && item.variants) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => showVariantModal(item));
        }
    });
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

// ===== 색상 변형 모달 =====
const variantModal = document.getElementById('variantModal');
const modalTitle = document.getElementById('modalTitle');
const variantGrid = document.getElementById('variantGrid');
const closeModal = document.getElementById('closeModal');

function showVariantModal(item) {
    if (!item.variants || item.variants.length === 0) return;
    
    modalTitle.textContent = `${item.name} - 상세 색상`;
    
    variantGrid.innerHTML = item.variants.map((variant, index) => `
        <div class="variant-item">
            <img src="${variant.image}" alt="${variant.colorName}" class="variant-image">
            <p class="variant-color-name">${variant.colorName}</p>
        </div>
    `).join('');
    
    variantModal.classList.add('active');
}

function hideVariantModal() {
    variantModal.classList.remove('active');
}

closeModal.addEventListener('click', hideVariantModal);
variantModal.addEventListener('click', (e) => {
    if (e.target === variantModal) {
        hideVariantModal();
    }
});

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
