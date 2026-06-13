# 정현태 자기소개 홈페이지

`spec.md` 요구사항을 바탕으로 만든 정적 개인 홈페이지입니다.  
HTML, CSS, JavaScript만 사용해서 바로 실행할 수 있고, 사진이나 텍스트를 쉽게 교체할 수 있도록 주석도 함께 넣어두었습니다.

## 실행 방법

가장 쉬운 방법:

1. `index.html` 파일을 더블클릭해서 브라우저로 엽니다.

조금 더 안정적으로 확인하는 방법:

1. VS Code의 Live Server 같은 확장으로 실행합니다.
2. 또는 간단한 로컬 서버를 열어 확인합니다.

## 파일 구성

```text
vibecodetest/
├─ index.html
├─ style.css
├─ script.js
├─ spec.md
├─ README.md
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

현재 `images` 폴더에 실제 사진이 없어도 페이지는 정상 동작합니다.  
이미지가 없으면 자동으로 자리표시용 이미지가 보입니다.

## 사진 교체 방법

아래 파일명으로 이미지를 넣으면 자동으로 반영됩니다.

- `images/profile.jpg`
- `images/portfolio1.jpg`
- `images/portfolio2.jpg`
- `images/portfolio3.jpg`
- `images/portfolio4.jpg`
- `images/hobby1.jpg`
- `images/hobby2.jpg`
- `images/hobby3.jpg`

중요:

- 파일명은 위와 정확히 같아야 가장 쉽게 교체됩니다.
- 다른 파일명을 쓰고 싶다면 `index.html` 안의 `src="images/..."` 부분만 바꾸면 됩니다.

## 텍스트 수정 방법

`index.html` 안에 `수정:`이라고 적힌 주석을 넣어 두었습니다.  
해당 위치의 텍스트만 바꾸면 손쉽게 내용을 수정할 수 있습니다.

대표적으로 수정하기 좋은 부분:

- 메인 제목
- 메인 소개 문구
- 자기소개 문단
- 경력 타임라인
- 포트폴리오 4개 카드
- 취향 3개 카드

## 포트폴리오 수정 방법

`index.html`의 `PORTFOLIO` 섹션에서 각 카드별로 아래 내용을 바꾸면 됩니다.

- 프로젝트 제목
- 설명 문구
- 기술 태그
- 링크 문구
- 이미지 파일

## 색상 변경 방법

전체 색상은 `style.css` 맨 위 `:root` 변수에서 바꿀 수 있습니다.

가장 많이 쓰는 값:

```css
--color-primary: #007aff;
--color-primary-strong: #0a84ff;
--color-primary-soft: #eaf4ff;
```

이 값들만 조정해도 전체 분위기가 함께 바뀝니다.

## 포함된 기능

- 상단 고정 메뉴
- 모바일 햄버거 메뉴
- 현재 보고 있는 메뉴 강조
- 부드러운 스크롤 이동
- 스크롤 등장 애니메이션
- 카드 hover 효과
- 맨 위로 이동 버튼
- 이미지가 없을 때 자동 자리표시 이미지 표시

## 참고

홈페이지 내용은 정현태 님의 경력, 기술, 자기소개를 기준으로 반영되어 있습니다.  
지원하는 회사나 포지션에 맞게 문구만 조금씩 조정해서 사용할 수 있습니다.
