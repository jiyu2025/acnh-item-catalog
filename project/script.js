/**
 * 모여봐요 동물의 숲 아이템 카탈로그
 * 카테고리별 아이템 관리 및 페이지 네비게이션
 */

// ===== 아이템 데이터베이스 =====
const itemsDatabase = {
    furniture: [
        { id: 1, name: '나무 침대', emoji: '🛏️', price: 3000, description: '편안한 나무로 만든 침대입니다.' },
        { id: 2, name: '소파', emoji: '🛋️', price: 5000, description: '푹신한 소파입니다.' },
        { id: 3, name: '책상', emoji: '🪑', price: 2500, description: '공부하기 좋은 책상입니다.' },
        { id: 4, name: '서랍장', emoji: '🗄️', price: 3500, description: '물건을 보관할 수 있는 서랍장입니다.' },
        { id: 5, name: '램프', emoji: '🛋️', price: 1500, description: '따뜻한 빛을 내는 램프입니다.' },
        { id: 6, name: '식탁', emoji: '🪑', price: 4000, description: '가족과 함께 식사하는 식탁입니다.' },
        { id: 7, name: '화분', emoji: '🪴', price: 800, description: '집안을 꾸며주는 화분입니다.' },
        { id: 8, name: '거울', emoji: '🪞', price: 2000, description: '자신의 모습을 비춰보는 거울입니다.' }
    ],
    clothing: [
        { id: 9, name: '티셔츠', emoji: '👕', price: 800, description: '편안한 티셔츠입니다.' },
        { id: 10, name: '원피스', emoji: '👗', price: 1500, description: '예쁜 원피스입니다.' },
        { id: 11, name: '모자', emoji: '🎩', price: 600, description: '멋진 모자입니다.' },
        { id: 12, name: '재킷', emoji: '🧥', price: 2000, description: '따뜻한 재킷입니다.' },
        { id: 13, name: '스웨터', emoji: '🧶', price: 1200, description: '포근한 스웨터입니다.' },
        { id: 14, name: '드레스', emoji: '👘', price: 2500, description: '화려한 드레스입니다.' },
        { id: 15, name: '반바지', emoji: '🩳', price: 700, description: '시원한 반바지입니다.' }
    ],
    shoes: [
        { id: 16, name: '운동화', emoji: '👟', price: 1000, description: '편한 운동화입니다.' },
        { id: 17, name: '부츠', emoji: '🥾', price: 1800, description: '튼튼한 부츠입니다.' },
        { id: 18, name: '슬리퍼', emoji: '🩴', price: 500, description: '집에서 신는 슬리퍼입니다.' },
        { id: 19, name: '샌들', emoji: '👡', price: 900, description: '여름용 샌들입니다.' },
        { id: 20, name: '구두', emoji: '👞', price: 1500, description: '정장용 구두입니다.' },
        { id: 21, name: '장화', emoji: '🥿', price: 1200, description: '비올 때 신는 장화입니다.' }
    ],
    bags: [
        { id: 22, name: '백팩', emoji: '🎒', price: 1500, description: '든든한 백팩입니다.' },
        { id: 23, name: '핸드백', emoji: '👜', price: 2000, description: '세련된 핸드백입니다.' },
        { id: 24, name: '크로스백', emoji: '👝', price: 1800, description: '편한 크로스백입니다.' },
        { id: 25, name: '파우치', emoji: '💼', price: 1000, description: '작은 물건을 담는 파우치입니다.' },
        { id: 26, name: '여행 가방', emoji: '🧳', price: 3000, description: '여행용 큰 가방입니다.' },
        { id: 27, name: '토트백', emoji: '🛍️', price: 1200, description: '장볼 때 좋은 토트백입니다.' }
    ],
    tools: [
        { id: 28, name: '낚싯대', emoji: '🎣', price: 2500, description: '물고기를 잡는 낚싯대입니다.' },
        { id: 29, name: '삽', emoji: '⛏️', price: 2000, description: '땅을 파는 삽입니다.' },
        { id: 30, name: '도끼', emoji: '🪓', price: 2500, description: '나무를 자르는 도끼입니다.' },
        { id: 31, name: '물뿌리개', emoji: '💧', price: 1500, description: '꽃에 물을 주는 물뿌리개입니다.' },
        { id: 32, name: '망치', emoji: '🔨', price: 1800, description: '물건을 만드는 망치입니다.' },
        { id: 33, name: '그물', emoji: '🕸️', price: 2000, description: '곤충을 잡는 그물입니다.' },
        { id: 34, name: '사다리', emoji: '🪜', price: 3000, description: '높은 곳에 올라가는 사다리입니다.' }
    ],
    other: [
        { id: 35, name: '벽지', emoji: '🖼️', price: 1000, description: '방을 꾸미는 벽지입니다.' },
        { id: 36, name: '바닥재', emoji: '🟫', price: 1200, description: '방 바닥을 꾸미는 바닥재입니다.' },
        { id: 37, name: '음악 CD', emoji: '🎵', price: 500, description: '집에서 들을 수 있는 음악입니다.' },
        { id: 38, name: '그림', emoji: '🖼️', price: 2000, description: '벽에 거는 그림입니다.' },
        { id: 39, name: '러그', emoji: '🧣', price: 1500, description: '바닥에 까는 러그입니다.' },
        { id: 40, name: '쿠션', emoji: '🛏️', price: 800, description: '소파에 놓는 쿠션입니다.' }
    ]
};

// ===== DOM 요소 =====
const homePage = document.getElementById('homePage');
const categoryPage = document.getElementById('categoryPage');
const categoryCards = document.querySelectorAll('.category-card');
const backBtn = document.getElementById('backBtn');
const categoryTitle = document.getElementById('categoryTitle');
const itemsGrid = document.getElementById('itemsGrid');

// ===== 카테고리 이름 매핑 =====
const categoryNames = {
    furniture: '가구',
    clothing: '옷',
    shoes: '신발',
    bags: '가방',
    tools: '도구',
    other: '기타 아이템'
};

// ===== 초기화 =====
function init() {
    // 카테고리 카드 클릭 이벤트
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showCategoryPage(category);
        });
    });

    // 뒤로 가기 버튼
    backBtn.addEventListener('click', showHomePage);

    // 클릭 이모지 효과
    document.addEventListener('click', createLeafEmoji);
}

// ===== 페이지 전환 함수 =====
function showCategoryPage(category) {
    homePage.classList.remove('active');
    categoryPage.classList.add('active');
    
    // 타이틀 설정
    categoryTitle.textContent = `${categoryNames[category]} 📦`;
    
    // 아이템 렌더링
    renderItems(category);
    
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
}

function showHomePage() {
    categoryPage.classList.remove('active');
    homePage.classList.add('active');
    
    // 페이지 최상단으로 스크롤
    window.scrollTo(0, 0);
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

// ===== 페이지 로드 시 초기화 =====
document.addEventListener('DOMContentLoaded', init);
