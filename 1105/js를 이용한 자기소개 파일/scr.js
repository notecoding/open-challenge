// 페이지 로드 후 동적으로 콘텐츠를 생성하는 함수
function createContent() {
    // 1. 스타일 추가 (CSS를 JavaScript로 삽입)
    const style = document.createElement('style');
    style.innerHTML = `
        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid #3498db;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .button-custom {
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            text-decoration: none;
        }

        .button-custom:hover {
            background-color: #2980b9;
        }
    `;
    // 스타일을 <head> 태그에 추가
    document.head.appendChild(style);

    // 2. 상위 container 생성
    const container = document.createElement('div');
    container.className = 'container text-center my-5';

    // 3. 프로필 이미지 생성
    const profileImg = document.createElement('img');
    profileImg.src = 'https://via.placeholder.com/150';
    profileImg.alt = '프로필 이미지';
    profileImg.className = 'profile-img mb-4';
    container.appendChild(profileImg);

    // 4. 자기소개 제목
    const heading = document.createElement('h1');
    heading.innerText = '안녕하세요, 저는 홍길동입니다!';
    container.appendChild(heading);

    // 5. 자기소개 텍스트
    const introText = document.createElement('p');
    introText.innerText = '웹 개발자이며 다양한 기술을 배우고 적용하는 것을 좋아합니다.';
    container.appendChild(introText);

    // 6. 기술 스택 제목
    const skillsHeading = document.createElement('h3');
    skillsHeading.className = 'mt-4';
    skillsHeading.innerText = '기술 스택';
    container.appendChild(skillsHeading);

    // 7. 기술 스택 리스트
    const skillsList = document.createElement('ul');
    skillsList.className = 'list-unstyled';
    const skills = ['HTML5, CSS3', 'JavaScript (ES6+)', 'React, Node.js'];

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });
    container.appendChild(skillsList);

    // 8. 이메일 보내기 버튼
    const emailButton = document.createElement('a');
    emailButton.href = 'mailto:example@example.com';
    emailButton.className = 'button-custom mt-4';
    emailButton.innerText = '이메일 보내기';
    container.appendChild(emailButton);

    // 9. body에 container 추가
    document.body.appendChild(container);
}
