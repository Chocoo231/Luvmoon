
// 스크롤 페이드인 인터랙션 스크립트
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1
});
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// 세부 가격 목록 아코디언 토글 제어 스크립트
function toggleDetails(button) {
    button.classList.toggle('active');
    const content = button.nextElementSibling;

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}



// 스크롤 위치를 감지하여 nav 크기를 조절하는 스크립트
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollPos = window.scrollY;

    if (window.innerWidth <= 999) {
        return;
    }

    if (scrollPos > 180) {
        nav.classList.remove('step-mid');
        nav.classList.add('step-min');
    } else if (scrollPos > 40) {
        nav.classList.remove('step-min');
        nav.classList.add('step-mid');
    } else {
        nav.classList.remove('step-mid', 'step-min');
    }
});

//모바일 햄버거 메뉴 제어 함수
function toggleMenu() {
    const navRight = document.getElementById('navRight');
    navRight.classList.toggle('active');
}

// 메뉴 클릭 시 부드러운 스크롤 후 메뉴판이 자동으로 닫히게 하는 함수
function closeMenu() {
    const navRight = document.getElementById('navRight');
    navRight.classList.remove('active');
}