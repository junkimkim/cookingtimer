# Cloudflare Pages 빌드 설정

## Node 버전 오류가 날 때

Cloudflare 빌드 로그에 **Node v12.18.0** 이나 `Cannot find module 'node:path'` 가 보이면, 빌드 환경이 **Node 12**를 쓰고 있는 상태입니다.  
이 프로젝트는 **Node 14 이상**(권장 **Node 18**)이 필요합니다.

### 1) 저장소에 추가된 설정 (이미 적용됨)

- **`.nvmrc`**  
  - 프로젝트 루트에 `18` 이 들어 있습니다.  
  - Cloudflare가 이 파일을 읽으면 Node 18로 빌드합니다.
- **`package.json` 의 `engines`**  
  - `"node": ">=14.0.0"` 으로 최소 Node 버전을 명시했습니다.

### 2) .nvmrc 만으로 해결되지 않을 때

일부 Cloudflare 프로젝트는 예전 빌드 이미지를 쓰면서 `.nvmrc`를 안 읽을 수 있습니다.  
이때는 **환경 변수**로 Node 버전을 지정하세요.

1. **Cloudflare Dashboard** → **Workers & Pages** → 해당 **Pages 프로젝트** 선택  
2. **Settings** → **Environment variables**  
3. **Build** 환경에 변수 추가  
   - **Variable name**: `NODE_VERSION`  
   - **Value**: `18` (또는 `20`)  
4. 저장 후 **재배포**(Retry deployment 또는 새 push)

### 3) 빌드 명령어

- **Build command**: `npm run build`  
- **Build output directory**: `build` (Create React App 기본값)

Cloudflare Pages에서 “Framework preset”을 **None** 또는 **Create React App**으로 두고,  
Build output directory를 `build`로 설정하면 됩니다.

### 요약

| 증상 | 원인 | 조치 |
|------|------|------|
| `Cannot find module 'node:path'` | Node 12 사용 | `.nvmrc`(18) 적용 또는 `NODE_VERSION=18` 설정 |
| `Unsupported engine for react-scripts` | Node 14 미만 | 위와 동일 |

이후 `git push` 로 다시 배포하면 Node 18로 빌드되어 오류가 사라져야 합니다.
