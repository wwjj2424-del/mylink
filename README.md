# 마이링크 (MyLink)

AI 코딩으로 만든 개인 링크 관리 페이지

## 프로젝트 소개
링크트리처럼 여러 링크를 한 페이지에 모아서 관리하고 공유할 수 있는 페이지입니다.
'아이디어를 현실로 - 바이브 코딩' 과정에서 AI 도구를 활용하여 제작했습니다.

## 배포
- Live Demo: https://wwjj2424-del.github.io/mylink/MyLink/
- 링크 관리: https://wwjj2424-del.github.io/mylink/MyLink/mypage.html

## 주요 기능
- 프로필 페이지 (사진, 이름, 사용자 이름, 소개)
- 링크 CRUD (추가, 수정, 삭제) + 입력 검증, 삭제 확인 창
- 링크 아이콘
- 클릭 통계 (총 클릭수, 링크별 클릭수)
- 반응형 디자인 / 다크 모드
- OG 태그 (카카오톡 미리보기)
- 404 페이지

> 로그인 없이 동작하는 버전이라, 링크 수정과 클릭 수는 각 브라우저(localStorage)에 저장됩니다.

## 폴더 구조
```
mylink/
├── README.md
├── 404.html          # 없는 주소로 들어왔을 때 보여줄 페이지
└── MyLink/
    ├── index.html    # 공개 마이링크 페이지
    ├── mypage.html   # 내 링크 관리 (추가/수정/삭제, 통계)
    ├── data.js       # 데이터: 프로필, 링크, 클릭 수 저장
    ├── ui.js         # 화면 공통 부품: 아이콘, 통계
    ├── style.css     # 공통 스타일
    ├── profile.png   # 프로필 이미지
    ├── og.png        # 공유 미리보기 이미지
    └── docs/
        └── PRD.md    # 기획 문서 (기능 정의, 시나리오, 와이어프레임)
```

## 사용한 도구
- HTML / CSS / JavaScript
- GitHub Pages (배포)
- AI 도구 (Claude)

## 배운 점
- AI에게 물어보면서 코딩하기
- 기획(PRD) → 화면 → 기능(CRUD) → 통계 → 배포 순서로 만들기
- GitHub에 프로젝트를 올리고 GitHub Pages로 배포하기
