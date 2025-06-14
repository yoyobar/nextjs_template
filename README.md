# Next.js 시작 템플릿

이 프로젝트는 Next.js를 기반으로 한 시작 템플릿입니다. 기본적인 설정과 유용한 라이브러리들이 포함되어 있어 빠르게 개발을 시작할 수 있습니다.

## 주요 기능

- 🎨 **UI/UX**

  - Shadcn UI: 재사용 가능한 컴포넌트 라이브러리
  - Next Themes: 다크/라이트 테마 지원
  - Framer Motion: 애니메이션 라이브러리

- 🛠 **유틸리티**
  - Day.js: 날짜/시간 처리
  - es-hangul: 한글 관련 유틸리티

## 시작하기

1. 개발 서버 실행:

```bash
yarn dev
```

2. [http://localhost:3000](http://localhost:3000)에서 결과를 확인하세요.

## 프로젝트 구조

```
├── components/     # 재사용 가능한 컴포넌트
│   └── ui/        # Shadcn UI 컴포넌트
├── lib/           # 유틸리티 함수
├── pages/         # 페이지 컴포넌트
│   ├── api/       # API 라우트
│   └── _app.tsx   # 앱 설정
└── styles/        # 전역 스타일
```

## 주요 설정

### 폰트

- Pretendard Variable 폰트가 기본으로 설정되어 있습니다.
- `_app.tsx`에서 전역적으로 적용됩니다.

### 테마

- 다크/라이트 테마가 지원됩니다.
- 시스템 테마를 기본으로 사용합니다.
- 우측 상단의 토글 버튼으로 테마를 변경할 수 있습니다.

### 유틸리티 함수

`lib/utils.ts`에 다음과 같은 유틸리티 함수들이 포함되어 있습니다:

- 날짜 포맷팅
- 상대적 시간 표시
- 클립보드 복사
- 디바운스

## 개발 팁

1. 페이지 수정은 `pages/index.tsx`에서 시작하세요.
2. 컴포넌트는 `components` 디렉토리에 추가하세요.
3. 유틸리티 함수는 `lib` 디렉토리에 추가하세요.
4. API 라우트는 `pages/api` 디렉토리에 추가하세요.
