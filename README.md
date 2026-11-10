# 민순영 포트폴리오

행정 업무부터 콘텐츠 제작까지, AI를 실무에 활용하는 민순영의 포트폴리오입니다.

이 폴더는 GitHub Pages에 바로 게시할 수 있는 최종 정적 사이트입니다. Node.js 설치, npm 설치, 별도 빌드가 필요하지 않습니다.

## GitHub 업로드

1. ZIP 압축을 풉니다. ZIP 파일 자체를 저장소에 올리지 않습니다.
2. GitHub에 새 저장소를 만듭니다. 이름은 `min-sunyoung-portfolio` 등을 사용할 수 있습니다.
3. 저장소에서 **Add file → Upload files**를 선택합니다.
4. 이 폴더 **안의 파일과 폴더**를 모두 올립니다. 저장소 첫 화면에 `index.html`, `app.js`, `styles`, `media`, `data`가 보여야 합니다. `github-upload` 폴더 자체를 한 단계 위에 올리지 마세요.
5. **Commit changes**로 저장합니다. `.nojekyll`도 포함합니다. 운영체제에서 숨김 파일이 보이지 않아도 앱 본문은 일반 정적 파일로 구성되어 있습니다.

일반적인 무료 개인 계정에서는 공개 저장소의 GitHub Pages를 사용합니다. 게시된 사이트와 저장소에 담긴 파일은 다른 사람이 볼 수 있습니다. 이 패키지에는 사용자가 공개 가능하다고 확인한 콘텐츠와 웹용 자산만 포함했습니다.

## GitHub Pages 설정

1. 저장소의 **Settings → Pages**를 엽니다.
2. **Build and deployment → Source**에서 **Deploy from a branch**를 선택합니다.
3. **Branch**에서 `main`, 폴더에서 **/(root)**를 선택하고 **Save**를 누릅니다.
4. 배포가 완료되면 Pages 화면에 표시되는 사이트 주소를 엽니다.

일반 프로젝트 저장소 주소 형식은 `https://사용자명.github.io/저장소명/`입니다. 실제 주소는 GitHub Pages 화면에서 확인합니다. 이 파일을 만든 시점에는 GitHub 업로드나 배포를 실행하지 않았습니다.

## 폴더 구성

```text
index.html          완성된 페이지
app.js              메뉴 표시와 영상 오류 처리
styles/             공통·반응형 스타일
media/profile/      본인 사진
media/works/        작품 이미지와 영상 포스터
media/videos/       최적화한 영상 2편
data/portfolio.json 공개용 콘텐츠
.nojekyll           정적 파일 게시 설정
```

모든 사이트 자산 경로는 상대 경로이므로 저장소명 아래에서도 동작합니다. 외부 폰트·외부 JavaScript 라이브러리·서버·DB는 사용하지 않습니다. 영상은 사용자가 재생할 때 불러옵니다. 이미지에는 크게 보기와 작품 원본 링크가 연결되어 있습니다.

## 게시 후 확인

- PC와 휴대전화에서 사진·작품 이미지가 보이는지 확인합니다.
- 메뉴, 맨 위로 이동, 이미지 크게 보기, 작품 원본 링크를 확인합니다.
- 두 영상을 각각 재생하고 중간 지점 이동과 음량을 확인합니다.

원본 이력서, 포트폴리오 PDF, 원본 대용량 영상, 임시 추출 자료와 개발 검토 문서는 포함하지 않았습니다. 이 폴더에 그런 자료를 추가로 올리지 마세요. 제작 원본과 개발 스크립트는 기존 작업 폴더에 보존했습니다.

## 수정

이 파일들은 이미 빌드된 결과입니다. 기존 작업 폴더의 원고·소스를 수정하고 다시 빌드·패키징한 결과로 교체하는 방식을 권장합니다. 공개 데이터 JSON만 바꿔도 이미 생성된 HTML 본문은 바뀌지 않습니다.

## 공식 안내

- [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages 사이트 만들기](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
