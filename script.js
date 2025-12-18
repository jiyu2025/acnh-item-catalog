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
            image: 'image/cutebed.webp', 
            price: 9500, 
            description: '곰인형 장식이 있는 아기자기한 1인용 침대<br>[클릭해보세요!]',
            variants: [
                { image: 'image/cutebed.webp', colorName: '핑크' },
                { image: 'image/cutebed2.webp', colorName: '블루' },
                { image: 'image/cutebed3.webp', colorName: '옐로' },
                { image: 'image/cutebed4.webp', colorName: '블랙' }
            ]
        },
        { id: 2, name: '2층 침대', image: 'image/bunkbed.webp', price: 5000, description: '공간 절약을 위해 위아래로 층을 나눈 실용적인 침대' },
        { id: 3, name: '라탄 침대', image: 'image/latanbed.webp', price: 7200, description: '라탄 소재로 통풍이 잘 되고 넓게 누울 수 있는 침대' },
        { id: 4, name: '박스 침대', image: 'image/boxbed.webp', price: 10, description: '박스 세 개를 가로로 이어 붙여 만든 단순한 형태의 침대' },
        { id: 5, name: '반려동물 침대', image: 'image/petbed.webp', price: 1100, description: '작은 반려동물이 눕기 좋은 푹신한 쿠션형 침대' }
    ],
    sofa: [
        { 
            id: 6, 
            name: '큐트 소파', 
            image: 'image/cutesofa.webp', 
            price: 9600, 
            description: '하트 쿠션이 포함된 아기자기한 색감의 소파<br>[클릭해보세요!]',
            variants: [
                { image: 'image/cutesofa.webp', colorName: '레드' },
                { image: 'image/cutesofa2.webp', colorName: '옐로' },
                { image: 'image/cutesofa3.webp', colorName: '스카이 블루' },
                { image: 'image/cutesofa4.webp', colorName: '화이트' }
            ]
        },
        { id: 7, name: '머메이드 소파', image: 'image/Mermaidsofa.webp', price: 11200, description: '앉기만 해도 인어공주가 되는 소파' },
        { id: 8, name: '박스 소파', image: 'image/boxsofa.webp', price: 10, description: '박스 두개를 이어붙인 단순한 형태의 소파' },
        { id: 9, name: '통나무 긴 소파', image: 'image/woodsofa.webp', price: 1920, description: '통나무를 이용해 수제작한 소파' },
        { id: 10, name: '빈티지 소파', image: 'image/vintagesofa.webp', price: 26000, description: '고급스러운 분위기의 빈티지 소파' }
    ],
    chair: [
        { 
            id: 11, 
            name: '큐트 체어', 
            image: 'image/cutechairs.webp', 
            price: 4300, 
            description: '심플한 나무 의자<br>[클릭해보세요!]',
            variants: [
                { image: 'image/cutechairs.webp', colorName: '레드' },
                { image: 'image/cutechairs2.webp', colorName: '옐로' },
                { image: 'image/cutechairs3.webp', colorName: '스카이 블루' },
                { image: 'image/cutechairs4.webp', colorName: '화이트' }
            ]
        },
        { id: 12, name: '강의실 의자', image: 'image/lecturechair.webp', price: 3300, description: '강의실에서 사용하는 의자' },
        { id: 13, name: '목욕탕 의자', image: 'image/bathchair.webp', price: 3500, description: '목욕탕에서 사용하는 의자' },
        { id: 14, name: '얼음 의자', image: 'image/frozenchair.webp', price: 6200, description: '얼음으로 만든 의자' },
        { id: 15, name: '접이식 아웃도어 의자', image: 'image/outdoorchair.webp', price: 1500, description: '휴대하기 좋은 접이식 아웃도어 의자' }
    ],
    table: [
        { 
            id: 16, 
            name: '큐트 티 테이블', 
            image: 'image/cutetable.webp', 
            price: 3000, 
            description: '고급스러운 원목 테이블<br>[클릭해보세요!]',
            variants: [
                { image: 'image/cutetable.webp', colorName: '레드' },
                { image: 'image/cutetable2.webp', colorName: '옐로' },
                { image: 'image/cutetable3.webp', colorName: '스카이 블루' },
                { image: 'image/cutetable4.webp', colorName: '화이트' }
            ]
        },
        { id: 17, name: '돌 테이블', image: 'image/stonetable.webp', price: 1200, description: '돌로 만들어진 단단한 테이블' },
        { id: 18, name: '버섯 테이블', image: 'image/mushroomtable.webp', price: 1520, description: '버섯으로 만들어진 둥근 테이블' },
        { id: 19, name: '생일 테이블', image: 'image/birthtable.webp', price: 300, description: '생일 파티를 위한 테이블' },
        { id: 20, name: '중화 요리 테이블', image: 'image/diningtable.webp', price: 73000, description: '중화요리를 즐길 수 있는 테이블' }
    ],
    lamp: [
        { 
            id: 21, 
            name: '큐트 플로어 스탠드', 
            image: 'image/cutestand.webp', 
            price: 3500, 
            description: '책상용 스탠드 램프<br>[클릭해보세요!]',
            variants: [
                { image: 'image/cutestand.webp', colorName: '레드' },
                { image: 'image/cutestand2.webp', colorName: '옐로' },
                { image: 'image/cutestand3.webp', colorName: '스카이 블루' },
                { image: 'image/cutestand4.webp', colorName: '화이트' }
            ]
        },
        { id: 22, name: '야자수 램프', image: 'image/palmstand.webp', price: 3280, description: '방 안을 하와이로 만들어주는 램프' },
        { id: 23, name: '소프트아이스크림 램프', image: 'image/icestand.webp', price: 3000, description: '달달하고 시원한 램프' },
        { id: 24, name: '버섯 램프', image: 'image/mushroomstand.webp', price: 1600, description: '버섯 모양의 귀여운 램프' },
        { id: 25, name: '바닥 조명', image: 'image/floorlight.webp', price: 2200, description: '바닥에서 비춰주는 조명' }
    ]
};

const itemsDatabase = {
    clothing: [
        { id: 26, name: '노르딕풍 가디건', image: 'image/cardigan.webp', price: 1440, description: '북유럽의 눈꽃 송이를 수놓은 듯, 캠핑장 모닥불 앞에서 입고 싶은 포근한 가디건' },
        { id: 27, name: '개구리 그림 티셔츠', image: 'image/frogtee.webp', price: 640, description: '비 오는 날 연못가에서 튀어나온 듯한 귀여운 개구리가 시선을 강탈하는 티셔츠' },
        { id: 28, name: '데님 페인터 팬츠', image: 'image/denimpants.webp', price: 600, description: '워싱 없는 진한 청색의 정석, 어떤 상의와 매치해도 실패 없는 든든한 데일리 팬츠' },
        { id: 30, name: '밀리터리 치마', image: 'image/camoskirt.webp', price: 1300, description: '강인한 카모 패턴 속에 숨겨진 활동성으로 섬 곳곳을 누비기 좋은 치마' },
        { id: 47, name: '근육 수트', image: 'image/musclesuit.webp', price: 2280, description: '입는 순간 사과 한 박스도 거뜬히 옮길 것 같은 헬스 매니아의 필수 수트' },
        { id: 48, name: '달걀 파티 원피스', image: 'image/eggdress.webp', price: 7200, description: '이스터 축제의 설렘을 가득 담아, 톡 터질 듯한 노란색이 매력적인 화사함의 결정체' },
        { id: 49, name: '달걀 파티 모자', image: 'image/egghat.webp', price: 4800, description: '원피스와 세트로 매치하면 섬의 주인공이 될 수 있는, 귀여운 달걀 껍데기 포인트' },
        { id: 50, name: '빛나는 하트 액세서리', image: 'image/heartbopper.webp', price: 245, description: '머리 위에서 반짝이는 하트가 사랑스러운 존재감을 밤낮없이 알려주는 포인트' }
    ],
    shoes: [
        { id: 31, name: '러버토 하이컷 스니커', image: 'image/hightops.webp', price: 1260, description: '앞코의 고무 디테일과 시원한 파란색이 만나 활동성을 더한 스포티한 운동화' },
        { id: 32, name: '레인 부츠', image: 'image/rainboots.webp', price: 490, description: '비 오는 날 물웅덩이를 첨벙거리고 싶게 만드는 선명한 노란색의 귀여운 장화' },
        { id: 33, name: '메리제인 슈즈', image: 'image/maryjanes.webp', price: 1800, description: '클래식한 디자인에 강렬한 레드 컬러로 발끝에 확실한 포인트를 주는 사랑스러운 구두' },
        { id: 34, name: '리본 샌들', image: 'image/sandals.webp', price: 1300, description: '시원한 샌들 위 파란 리본이 살랑이며 여름날의 청량함을 완성해주는 신발' },
        { id: 51, name: '순백 펌프스', image: 'image/pumps.webp', price: 3000, description: '깨끗한 화이트에 은은한 푸른 기가 돌아 더욱 투명하고 우아하게 느껴지는 구두.' }
    ],
    bags: [
        { id: 35, name: '곰돌이 배낭', image: 'image/bearbag.webp', price: 1300, description: '귀여운 곰돌이가 등을 꼭 안고 있는 듯한 뒤태로 동심을 자극하는 포인트 백' },
        { id: 36, name: '가죽 핸드백', image: 'image/handbag.webp', price: 2400, description: '클래식한 실루엣에 선명한 레드 컬러를 더해 고급스러운 분위기를 연출하는 핸드백' },
        { id: 37, name: '드림 큐브 리본 미니백', image: 'image/minibag.webp', price: 1080, description: '몽글몽글한 핑크빛과 커다란 리본이 만나 꿈결 같은 사랑스러움을 완성하는 미니백' },
        { id: 38, name: '미니 가죽 가방', image: 'image/pleatherbag.webp', price: 1600, description: '군더더기 없는 그레이 톤으로 어떤 옷에나 세련되게 어우러지는 데일리 가방' },
        { id: 52, name: '종이 가방', image: 'image/paperbag.webp', price: 100, description: '쇼핑을 막 마친 듯한 자연스러운 멋과 가벼운 감성을 담은 유니크한 소품' }
    ],
    tools: [
        { id: 39, name: '낚싯대', image: 'image/fishing.webp', price: 2500, description: '물고기와의 짜릿한 한판 승부를 위해 반드시 챙겨야 할 섬 생활 필수 도구' },
        { id: 40, name: '삽', image: 'image/shovel.webp', price: 2000, description: '화석 발굴부터 나무 심기까지, 섬의 지형을 가꾸는 데 없어서는 안 될 만능 일꾼' },
        { id: 41, name: '도끼', image: 'image/axe.webp', price: 2500, description: '튼튼한 목재를 구하거나 장애물을 제거하며 섬을 개척해 나가는 듬직한 장비' },
        { id: 42, name: '물뿌리개', image: 'image/watering.webp', price: 1500, description: '시든 꽃에 생기를 불어넣고 아름다운 정원을 정성껏 가꾸어 주는 마법의 도구' },
        { id: 53, name: '사다리', image: 'image/ladder.webp', price: 1000, description: '높은 절벽 위 미지의 공간까지 자유롭게 오갈 수 있게 해주는 든든한 조력자' }
    ],
    other: [
        { id: 43, name: '벽지', image: 'image/wall.webp', price: 1000, description: '은은한 조명과 잘 어우러지는 깊은 갈색 톤으로 방 안에 차분하고 고전적인 감성을 더해주는 벽지' },
        { id: 44, name: '바닥재', image: 'image/flooring.webp', price: 1200, description: '금방이라도 차가 지나갈 것 같은 매끄러운 아스팔트 질감으로 실내에 이색적인 바닥재' },
        { id: 45, name: 'K.K. 아이돌 CD', image: 'image/music.webp', price: 500, description: '톡톡 튀는 멜로디와 경쾌한 리듬으로 듣는 것만으로도 섬 생활의 활력을 불어넣어 주는 인기 음반' },
        { id: 46, name: '그림', image: 'image/painting.webp', price: 2000, description: '고요하면서도 신비로운 눈빛이 공간의 품격을 높여주는, 박물관에 전시하고 싶은 아름다운 예술 작품' }
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
const searchInput = document.getElementById('searchInput');

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

    // 검색 기능
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(e);
            }
        });
    }

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

// ===== 검색 기능 =====
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    // 검색어가 비어있으면 홈페이지로
    if (!searchTerm) {
        showHomePage();
        return;
    }
    
    // 전체 데이터베이스에서 검색
    const searchResults = [];
    
    // 가구 서브카테고리 검색
    Object.keys(furnitureSubCategories).forEach(subKey => {
        const subInfo = furnitureSubCategoryNames[subKey];
        const items = furnitureSubCategories[subKey];
        
        items.forEach(item => {
            const matchesItem = item.name.toLowerCase().includes(searchTerm) || 
                               item.description.toLowerCase().includes(searchTerm);
            const matchesSubCategory = subInfo.name.toLowerCase().includes(searchTerm);
            
            if (matchesItem || matchesSubCategory) {
                searchResults.push({
                    ...item,
                    categoryName: `${subInfo.emoji} ${subInfo.name}`
                });
            }
        });
    });
    
    // 일반 카테고리 아이템 검색
    Object.keys(itemsDatabase).forEach(categoryKey => {
        const categoryName = categoryNames[categoryKey];
        const items = itemsDatabase[categoryKey];
        
        items.forEach(item => {
            const matchesItem = item.name.toLowerCase().includes(searchTerm) || 
                               item.description.toLowerCase().includes(searchTerm);
            const matchesCategory = categoryName.toLowerCase().includes(searchTerm);
            
            if (matchesItem || matchesCategory) {
                searchResults.push({
                    ...item,
                    categoryName: categoryName
                });
            }
        });
    });
    
    // 검색 결과 표시
    showSearchResults(searchResults, searchTerm);
}

// ===== 검색 결과 표시 =====
function showSearchResults(results, searchTerm) {
    homePage.classList.remove('active');
    subCategoryPage.classList.remove('active');
    categoryPage.classList.add('active');
    
    // 타이틀 설정
    categoryTitle.textContent = `🔍 "${searchTerm}" 검색 결과 (${results.length}개)`;
    
    // 뒤로 가기 버튼 조정
    backBtn.style.display = 'inline-block';
    backToSubBtn.style.display = 'none';
    
    if (results.length === 0) {
        itemsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p class="empty-state-text">검색 결과가 없습니다</p>
            </div>
        `;
        return;
    }
    
    itemsGrid.innerHTML = results.map(item => `
        <div class="item-card" data-id="${item.id}">
            ${item.image 
                ? `<img src="${item.image}" alt="${item.name}" class="item-image">` 
                : `<span class="item-emoji">${item.emoji || '🎁'}</span>`
            }
            <div class="item-category-badge">${item.categoryName}</div>
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">${item.price.toLocaleString()}</p>
            <p class="item-description">${item.description}</p>
        </div>
    `).join('');
    
    // 색상 변형이 있는 아이템에 클릭 이벤트 추가
    document.querySelectorAll('.item-card').forEach(card => {
        const itemId = parseInt(card.dataset.id);
        
        // 가구에서 먼저 찾기
        let item = null;
        Object.keys(furnitureSubCategories).forEach(subKey => {
            const foundItem = furnitureSubCategories[subKey].find(i => i.id === itemId);
            if (foundItem) item = foundItem;
        });
        
        if (item && item.variants) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => showVariantModal(item));
        }
    });
    
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
}

// ===== 클릭 시 나뭇잎 이미지 효과 =====
function createLeafEmoji(e) {
    // 버튼이나 카드 클릭 시에만 작동
    const isClickable = e.target.closest('.category-card, .item-card, .back-btn');
    if (!isClickable) return;
    
    const leaf = document.createElement('img');
    leaf.className = 'leaf-emoji';
    leaf.src = 'image/leaflogo.png';
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
