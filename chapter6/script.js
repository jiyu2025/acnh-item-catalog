/**
 * 로또 번호 자동 생성기
 * 1-45 사이의 숫자 중 중복 없이 6개를 랜덤으로 생성합니다.
 * 생성된 번호는 로컬 스토리지에 저장되어 영구 보관됩니다.
 */

// ===== 전역 변수 =====
// 생성된 로또 번호 히스토리를 저장하는 배열
let historyData = [];

// ===== DOM 요소 캐싱 =====
// 성능 향상을 위해 DOM 요소를 미리 가져와서 변수에 저장
const floatingBallsContainer = document.getElementById('floatingBalls');
const generateBtn = document.getElementById('generateBtn');
const currentNumbersDiv = document.getElementById('currentNumbers');
const historyListDiv = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// ===== 초기화 함수 =====
/**
 * 페이지 로드 시 실행되는 초기화 함수
 * - 45개의 떠다니는 공 생성
 * - 로컬 스토리지에서 히스토리 불러오기
 * - 이벤트 리스너 등록
 */
function init() {
    createFloatingBalls();
    loadHistoryFromStorage();
    renderHistory();
    
    // 이벤트 리스너 등록
    generateBtn.addEventListener('click', generateLottoNumbers);
    clearHistoryBtn.addEventListener('click', clearAllHistory);
}

// ===== 45개의 떠다니는 공 생성 =====
/**
 * 히어로 섹션에 1-45까지의 번호가 적힌 공을 동적으로 생성합니다.
 * 각 공은 랜덤한 위치, 애니메이션 시간, 이동 경로를 가집니다.
 */
function createFloatingBalls() {
    for (let i = 1; i <= 45; i++) {
        const ball = document.createElement('div');
        ball.className = `floating-ball ${getBallColor(i)}`;
        ball.textContent = i;
        
        // 랜덤한 초기 위치 설정
        const randomX = Math.random() * 90; // 0-90%
        const randomY = Math.random() * 90; // 0-90%
        ball.style.left = `${randomX}%`;
        ball.style.top = `${randomY}%`;
        
        // 랜덤한 애니메이션 설정
        const duration = 15 + Math.random() * 20; // 15-35초
        const delay = Math.random() * 5; // 0-5초 지연
        ball.style.animationDuration = `${duration}s`;
        ball.style.animationDelay = `${delay}s`;
        
        // 랜덤한 이동 경로 설정 (CSS 변수)
        const floatX1 = (Math.random() - 0.5) * 200;
        const floatY1 = (Math.random() - 0.5) * 200;
        const floatX2 = (Math.random() - 0.5) * 200;
        const floatY2 = (Math.random() - 0.5) * 200;
        const floatX3 = (Math.random() - 0.5) * 200;
        const floatY3 = (Math.random() - 0.5) * 200;
        
        ball.style.setProperty('--float-x1', `${floatX1}px`);
        ball.style.setProperty('--float-y1', `${floatY1}px`);
        ball.style.setProperty('--float-x2', `${floatX2}px`);
        ball.style.setProperty('--float-y2', `${floatY2}px`);
        ball.style.setProperty('--float-x3', `${floatX3}px`);
        ball.style.setProperty('--float-y3', `${floatY3}px`);
        
        floatingBallsContainer.appendChild(ball);
    }
}

// ===== 번호 범위별 색상 반환 =====
/**
 * 로또 번호에 따라 적절한 CSS 클래스를 반환합니다.
 * @param {number} number - 1-45 사이의 로또 번호
 * @returns {string} CSS 클래스명
 */
function getBallColor(number) {
    if (number <= 10) return 'ball-yellow';  // 1-10: 노란색
    if (number <= 20) return 'ball-blue';    // 11-20: 파란색
    if (number <= 30) return 'ball-red';     // 21-30: 빨간색
    if (number <= 40) return 'ball-gray';    // 31-40: 회색
    return 'ball-green';                     // 41-45: 초록색
}

// ===== 로또 번호 생성 로직 =====
/**
 * 1-45 사이의 숫자 중 중복 없이 6개를 랜덤으로 생성합니다.
 * 생성된 번호는 오름차순으로 정렬되어 화면에 표시되고 히스토리에 추가됩니다.
 */
function generateLottoNumbers() {
    // 버튼 비활성화 (중복 클릭 방지)
    generateBtn.disabled = true;
    generateBtn.textContent = '추첨 중...';
    
    // 추첨 애니메이션 시작
    startDrawingAnimation();
    
    const numbers = [];
    
    // 1~45 중 중복 없이 6개 선택 (Fisher-Yates 알고리즘의 단순화 버전)
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    
    // 오름차순 정렬 (가독성 향상)
    numbers.sort((a, b) => a - b);
    
    // 2초 후 추첨 애니메이션 종료 및 결과 표시
    setTimeout(() => {
        stopDrawingAnimation(numbers);
        
        // 히스토리에 추가 및 저장
        addToHistory(numbers);
        
        // 버튼 다시 활성화
        generateBtn.disabled = false;
        generateBtn.textContent = '로또번호 자동 생성';
    }, 2000);
}

// ===== 생성된 번호 화면에 표시 =====
/**
 * 생성된 6개의 로또 번호를 현재 번호 섹션에 표시합니다.
 * 각 번호는 순차적으로 팝인 애니메이션과 함께 나타납니다.
 * @param {number[]} numbers - 생성된 6개의 로또 번호 배열
 */
function displayCurrentNumbers(numbers) {
    currentNumbersDiv.innerHTML = '';
    
    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.className = `lotto-ball ${getBallColor(num)} stop`;
        ball.textContent = num;
        // 순차적 애니메이션을 위한 딜레이 설정
        ball.style.animationDelay = `${index * 0.1}s`;
        currentNumbersDiv.appendChild(ball);
    });
}

// ===== 로또 번호 추첨 애니메이션 시작 =====
/**
 * 6개의 공이 빠르게 숫자가 변하는 추첨 애니메이션을 시작합니다.
 */
let drawingInterval;
function startDrawingAnimation() {
    currentNumbersDiv.innerHTML = '';
    
    // 6개의 공 생성
    const balls = [];
    for (let i = 0; i < 6; i++) {
        const ball = document.createElement('div');
        ball.className = 'lotto-ball rolling';
        ball.textContent = '?';
        currentNumbersDiv.appendChild(ball);
        balls.push(ball);
    }
    
    // 숫자가 빠르게 변하는 애니메이션
    drawingInterval = setInterval(() => {
        balls.forEach(ball => {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            ball.textContent = randomNum;
            ball.className = `lotto-ball ${getBallColor(randomNum)} rolling`;
        });
    }, 100);
}

// ===== 로또 번호 추첨 애니메이션 종료 =====
/**
 * 추첨 애니메이션을 멈추고 최종 번호를 표시합니다.
 * @param {number[]} finalNumbers - 최종 선택된 로또 번호 배열
 */
function stopDrawingAnimation(finalNumbers) {
    // 애니메이션 인터벌 종료
    clearInterval(drawingInterval);
    
    // 최종 번호 표시
    displayCurrentNumbers(finalNumbers);
}

// ===== 히스토리 기능 =====
/**
 * 생성된 로또 번호를 히스토리에 추가합니다.
 * @param {number[]} numbers - 추가할 로또 번호 배열
 */
function addToHistory(numbers) {
    const historyItem = {
        id: Date.now(),                              // 고유 ID (타임스탬프)
        numbers: numbers,                            // 생성된 번호 배열
        timestamp: new Date().toLocaleString('ko-KR') // 생성 시간 (한국 시간)
    };
    
    // 배열 맨 앞에 추가 (최신 항목이 위로)
    historyData.unshift(historyItem);
    
    // 로컬 스토리지에 저장
    saveHistoryToStorage();
    
    // 화면 갱신
    renderHistory();
}

// ===== 히스토리 렌더링 =====
/**
 * 저장된 히스토리 데이터를 화면에 렌더링합니다.
 * 히스토리가 없을 경우 안내 메시지를 표시합니다.
 */
function renderHistory() {
    // 히스토리가 없는 경우
    if (historyData.length === 0) {
        historyListDiv.innerHTML = '<p class="placeholder">아직 생성된 번호가 없습니다</p>';
        return;
    }
    
    historyListDiv.innerHTML = '';
    
    // 각 히스토리 항목을 카드 형태로 렌더링
    historyData.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const header = document.createElement('div');
        header.className = 'history-item-header';
        
        const time = document.createElement('span');
        time.className = 'history-item-time';
        time.textContent = item.timestamp;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-item-btn';
        deleteBtn.textContent = '🗑️';
        deleteBtn.onclick = () => deleteHistoryItem(item.id);
        
        header.appendChild(time);
        header.appendChild(deleteBtn);
        
        const numbersDiv = document.createElement('div');
        numbersDiv.className = 'history-numbers';
        
        item.numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = `lotto-ball ${getBallColor(num)}`;
            ball.textContent = num;
            numbersDiv.appendChild(ball);
        });
        
        historyItem.appendChild(header);
        historyItem.appendChild(numbersDiv);
        historyListDiv.appendChild(historyItem);
    });
}

// ===== 개별 히스토리 항목 삭제 =====
/**
 * 특정 히스토리 항목을 삭제합니다.
 * @param {number} id - 삭제할 히스토리 항목의 고유 ID
 */
function deleteHistoryItem(id) {
    historyData = historyData.filter(item => item.id !== id);
    saveHistoryToStorage();
    renderHistory();
}

// ===== 전체 히스토리 삭제 =====
/**
 * 모든 히스토리를 삭제합니다.
 * 사용자 확인 후 실행됩니다.
 */
function clearAllHistory() {
    // 히스토리가 없으면 실행하지 않음
    if (historyData.length === 0) return;
    
    // 사용자 확인
    if (confirm('모든 히스토리를 삭제하시겠습니까?')) {
        historyData = [];
        saveHistoryToStorage();
        renderHistory();
        currentNumbersDiv.innerHTML = '<p class="placeholder">버튼을 클릭하여 로또 번호를 생성하세요</p>';
    }
}

// ===== 로컬 스토리지 연동 =====
/**
 * 히스토리 데이터를 브라우저의 로컬 스토리지에 저장합니다.
 * 페이지를 새로고침해도 데이터가 유지됩니다.
 */
function saveHistoryToStorage() {
    localStorage.setItem('lottoHistory', JSON.stringify(historyData));
}

/**
 * 페이지 로드 시 로컬 스토리지에서 히스토리 데이터를 불러옵니다.
 */
function loadHistoryFromStorage() {
    const saved = localStorage.getItem('lottoHistory');
    if (saved) {
        try {
            historyData = JSON.parse(saved);
        } catch (error) {
            // JSON 파싱 실패 시 빈 배열로 초기화
            console.error('히스토리 로드 실패:', error);
            historyData = [];
        }
    }
}

// ===== 페이지 로드 시 초기화 =====
// DOM이 완전히 로드된 후 초기화 함수 실행
document.addEventListener('DOMContentLoaded', init);
