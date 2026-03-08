# 구글 AdSense 승인을 위한 개선 가이드

이 문서는 CookingTimer 사이트의 AdSense 승인 가능성을 높이기 위해 적용한 개선 사항과, **직접 확인·수정해야 할 항목**을 정리한 것입니다.

---

## 1. 이미 적용된 개선 사항

### 필수 페이지 추가
- **About (소개)** (`/about`): 서비스 설명, 대상 사용자, 사용 방법 (본문 텍스트 충분)
- **Privacy Policy (개인정보처리방침)** (`/privacy`): 수집 정보, 쿠키, AdSense·Google 언급
- **Terms of Service (이용약관)** (`/terms`): 이용 조건, 면책, 제3자 광고 안내

### 네비게이션·구조
- **Footer**: 모든 페이지 하단에 About, Privacy Policy, Terms of Service 링크 추가
- 라우트: `/about`, `/privacy`, `/terms` 추가

### SEO·메타
- **index.html**  
  - `description`: “timer for cooking eggs, pastas” → 더 구체적인 문장으로 확장  
  - `keywords`: 요리 타이머, 달걀, 파스타, 스톱워치 등 확장  
  - `title`: “CookingTimer - Egg, Pasta & Kitchen Timer | Free Online”  
  - `og:title`, `og:description` 동일하게 정리
- **robots.txt**: `Allow: /`, `Disallow: /static/` 추가
- **sitemap.xml**: `/`, `/about`, `/privacy`, `/terms` 포함 (public 폴더에 생성)

### 콘텐츠
- About·Privacy·Terms 페이지에 **문단 단위 텍스트** 포함 (헤드라인만 있는 페이지 방지)
- AdSense 정책에서 요구하는 “충분한 텍스트”를 이 페이지들로 보강

---

## 2. 배포 후 반드시 할 일

### 1) HTTPS 사용
- AdSense는 **HTTPS** 사이트만 승인합니다.
- Vercel, Netlify, GitHub Pages 등으로 배포하면 기본적으로 HTTPS가 적용됩니다.
- 자체 서버라면 SSL 인증서 설정이 필요합니다.

### 2) sitemap.xml 도메인 수정
- `public/sitemap.xml` 안의 `https://your-domain.com`을 **실제 사이트 URL**로 모두 바꿉니다.
- 예: `https://cookingtimer.example.com`

### 3) robots.txt에 Sitemap URL 넣기
- `public/robots.txt`에서 아래 주석을 해제하고, 실제 도메인으로 수정합니다.
  ```
  Sitemap: https://your-domain.com/sitemap.xml
  ```
- 예: `Sitemap: https://cookingtimer.example.com/sitemap.xml`

### 4) Google Search Console 등록
- [Google Search Console](https://search.google.com/search-console)에 사이트를 등록합니다.
- sitemap 제출: Sitemaps 메뉴에서 `https://your-domain.com/sitemap.xml` 제출합니다.
- 인덱싱이 되면 AdSense 심사 시 “정상적인 웹사이트”로 보는 데 도움이 됩니다.

### 5) AdSense 재신청 시 체크
- **신청 URL**: 실제로 서비스가 열리는 메인 URL (예: `https://your-domain.com/`)을 사용합니다.
- **테스트/공사 중 페이지가 아닌지**: 실제 사용자에게 공개된 상태인지 확인합니다.
- **로그인/리다이렉트**: AdSense 심사 봇이 메인·About·Privacy·Terms 등 주요 페이지를 그대로 볼 수 있어야 합니다.

---

## 3. AdSense에서 자주 거절되는 이유 (참고)

| 이유 | 대응 |
|------|------|
| **콘텐츠 부족** | About, Privacy, Terms에 문단 텍스트 추가 완료. 필요 시 메인 페이지에 1~2문단 소개 추가 가능. |
| **네비게이션 불명확** | Footer로 주요 페이지 링크 제공 완료. |
| **필수 페이지 없음** | Privacy Policy, Terms, About 추가 완료. |
| **HTTP 사이트** | 배포 시 HTTPS 사용 필수. |
| **사이트 미완성/공사 중** | 실제 배포 후, 정상 동작하는 URL로 신청. |
| **가짜/정책 위반 트래픽** | 유료 클릭, 봇 트래픽 사용 금지. |

---

## 4. 유틸리티/앱 사이트 참고 사항

- AdSense는 “블로그형” 콘텐츠뿐 아니라 **유용한 서비스(도구·앱)** 사이트도 승인 대상입니다.
- 중요한 것은 **명확한 목적**, **충분한 텍스트**(About·Privacy·Terms 등), **정상적인 네비게이션**, **HTTPS**입니다.
- CookingTimer는 “요리 타이머·스톱워치”라는 목적이 분명하고, 위 페이지들이 있어 승인 가능성이 높아진 상태입니다.

---

## 5. 요약 체크리스트

- [x] Privacy Policy 페이지
- [x] Terms of Service 페이지
- [x] About 페이지
- [x] Footer에 위 페이지 링크
- [x] 메타 설명·키워드·타이틀 보강
- [x] robots.txt 정리
- [x] sitemap.xml 생성
- [ ] **배포 후** sitemap.xml 도메인 수정
- [ ] **배포 후** robots.txt에 Sitemap URL 추가
- [ ] **배포 후** HTTPS 사용 확인
- [ ] **선택** Google Search Console 등록 및 sitemap 제출

위 항목까지 반영한 뒤, 실제 공개 URL로 AdSense에 다시 신청하면 됩니다.
