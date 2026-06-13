# 개인 프로필 홈페이지

`spec.md` 요구사항을 바탕으로 만든 정적 개인 홈페이지입니다.  
HTML, CSS, JavaScript만 사용해서 바로 실행하고 수정할 수 있게 구성했습니다.

## 실행 방법

가장 쉬운 방법:

1. `index.html` 파일을 더블클릭해서 브라우저로 엽니다.

조금 더 안정적으로 보기:

1. VS Code의 Live Server 같은 확장으로 실행합니다.
2. 또는 간단한 로컬 서버를 열어서 확인합니다.

## 파일 구성

```text
vibecodetest/
├─ index.html
├─ style.css
├─ script.js
├─ spec.md
└─ images/
   ├─ profile.jpg
   ├─ portfolio1.jpg
   ├─ portfolio2.jpg
   ├─ portfolio3.jpg
   ├─ portfolio4.jpg
   ├─ hobby1.jpg
   ├─ hobby2.jpg
   └─ hobby3.jpg
```

현재 `images` 폴더에 실제 사진이 없어도 페이지는 깨지지 않습니다.  
사진이 없으면 자동으로 플레이스홀더 이미지가 표시됩니다.

## 사진 교체 방법

아래 파일 이름으로 이미지를 넣으면 자동으로 반영됩니다.

- `images/profile.jpg`
- `images/portfolio1.jpg`
- `images/portfolio2.jpg`
- `images/portfolio3.jpg`
- `images/portfolio4.jpg`
- `images/hobby1.jpg`
- `images/hobby2.jpg`
- `images/hobby3.jpg`

중요:

- 파일 이름은 위와 똑같이 맞추는 것이 가장 쉽습니다.
- 다른 파일 이름을 쓰고 싶다면 `index.html` 안의 `src="images/..."` 부분만 바꾸면 됩니다.

## 텍스트 수정 방법

`index.html` 안에 `수정:` 이라고 적힌 주석이 들어 있습니다.  
그 주변 텍스트만 바꾸면 됩니다.

대표적으로 수정하면 좋은 부분:

- 메인 제목
- 한 줄 소개
- 자기소개 문단
- 이력 타임라인
- 포트폴리오 4개 카드
- 취미 3개 카드

## 포트폴리오 수정 방법

`index.html`의 `PORTFOLIO` 섹션으로 가면 카드 4개가 있습니다.  
각 카드에서 아래 내용을 바꾸면 됩니다.

- 프로젝트 제목
- 설명 문구
- 기술 태그
- `자세히 보기` 링크
- 이미지 파일

링크를 실제 주소로 바꾸고 싶다면:

```html
<a class="text-link" href="https://example.com">자세히 보기</a>
```

처럼 수정하면 됩니다.

## 색상 변경 방법

전체 색상은 `style.css` 맨 위 `:root` 변수에서 바꿀 수 있습니다.

특히 아래 변수들을 바꾸면 전체 분위기가 함께 변경됩니다.

```css
--color-primary: #007aff;
--color-primary-strong: #0a84ff;
--color-primary-soft: #eaf4ff;
```

## 포함된 기능

- 상단 고정 메뉴
- 모바일 햄버거 메뉴
- 현재 보고 있는 메뉴 강조
- 부드러운 스크롤 이동
- 스크롤 등장 애니메이션
- 카드 hover 효과
- 맨 위로 이동 버튼
- 이미지가 없어도 보이는 자동 플레이스홀더

## 참고

사이트 제목, 브랜드명, 문구는 모두 예시입니다.  
원하는 이름과 내용으로 자유롭게 바꿔서 사용하면 됩니다.
