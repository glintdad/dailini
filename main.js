const suggestionBtn = document.getElementById('suggestion-btn');
const menuDisplay = document.getElementById('menu-display');

const dinnerMenus = [
    "치킨",
    "피자",
    "삼겹살",
    "된장찌개",
    "김치찌개",
    "떡볶이",
    "라면",
    "초밥",
    "파스타",
    "햄버거",
    "부대찌개",
    "곱창",
    "보쌈",
    "족발",
    "카레",
];

suggestionBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    menuDisplay.textContent = `오늘 저녁은 ${selectedMenu} 어떠세요?`;
});
