// 페이지 로딩 시 hero 섹션 서서히 나타나게 하기
window.onload = function () {
    // hero 섹션에 애니메이션 효과 추가
    var heroSection = document.getElementById('hero-section');
    heroSection.style.transition = 'opacity 1.5s ease-in-out';
    heroSection.style.opacity = 1;
};

// 메뉴 클릭 시 해당 섹션만 표시하는 함수
function showContent(sectionId) {
    // 모든 content-section을 숨기기
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // 클릭된 메뉴에 맞는 섹션만 보이기
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// 초기 화면에서는 첫 번째 섹션이 보이도록 설정
document.addEventListener('DOMContentLoaded', function () {
    // 기본적으로 'companyOverview' 섹션을 보여줍니다.
    showContent('companyOverview');
});
