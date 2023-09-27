# 오늘의집 클론코딩 🏠

### ⭐️ 프로젝트 기간

> 2023년 07월 21일 ~ 2023년 07월 27일
> 

### 🐶 팀 원

> FE : 김나영, 이용우, 홍성민
> 
> 
> BE : 홍승현, 이채원, 이예원, 최현성, 조성근


### 🖥️ 결과물

---

홈페이지 주소 : https://ohou-clone-fe.vercel.app/

시연 영상 : https://www.youtube.com/watch?v=gYafiEdicrk

프로젝트 노션: [https://www.notion.so/4-ed1c11e6e80840f78947328d20542b42](https://www.notion.so/4-ed1c11e6e80840f78947328d20542b42?pvs=21)

프로젝트 github : https://github.com/OHOU-cloneCoding

---


### 🔧 사용 기술 (FE)

---

- View : **`React`, `React-Router-Dom`, `axios` , `Styled-components`, `react-icons`**
- State Management : **`Redux`, `react-query`, `Redux-toolkit`**
- Build Tool : **`Create React App`**
- Other Tools : **`yarn`, `Github`, `notion`**

---

### 🔧 사용 기술 (BE)

---

- **`SpringBoot`, `SpringData JPA`, `JDBC`, `Spring Security`, `JWT`, `Querydsl`, `Jsoup`**
- CICD : **`GithubActions`, `S3`, `Route 53`, `CodeDeploy`, `EC2`, `RDS`**
- Other Tools : **`Git`, `Github`, `notion`**

---


### 🧑‍💻 FE 트러블 슈팅

> 김나영
> 

문제 :  액세스 토큰과 리프레시 토큰이 각각 따로 만료됬을 때 axios 인터셉터로 핸들링하는 과정에서 error.response에 접근이 안됨

해결방법 : 백엔드와 소통하여 새로운 액세스 토큰을 success 시 body로 받아 추출한 뒤 만료된 토큰과 교환해서 저장했다. 그리고 error일 경우에는 리프레시 토큰의 만료로 간주하여 모든 토큰을 지운 뒤 “/login”으로 리다이렉트 시키는 방법 선택했다. 
그러나 지금은 refresh token 오류와 다른 종류의 오류를 구분할 수 없고, refresh token을 로컬스토리지에 저장하기 때문에 보안상 좋지 않아 많은 개선이 필요하다고 생각한다.

> 이용우
> 

문제 :  로그인 후 토큰이 로컬 스토리지에 저장되지 않음.

해결방법 : 
login 함수에서 로그인이 성공한 후 헤더부분에서 반환된 토큰정보를 추출하여 로컬 스토리지에 저장하는 부분을 추가했다.

> 홍성민
> 

문제 :  게시글 수정페이지에서 원본 게시글 불러오기

해결방법 : 
이전 주차에서는 상세페이지에서 수정페이지로 게시글을 state로 넘겨준 다음, 수정페이지에서 useLocation을 사용했고 이번에는 state 대신 게시글 아이디를 쿼리스트링으로 넘긴 후 수정페이지에서 React Query로 해당 게시물을 가져왔다.

### 🧑‍💻 BE 트러블 슈팅

문제 :  
검색기능 & 필터링 & 정렬을 하기 위한 동적 쿼리 작성
다양한 검색 조건이 주어졌을 때, 이를 JQPL에서 다루기가 매우 힘듦.

해결방법 : Querydsl을 사용하여 해결.

장점
    - JPQL을 이용하게 되면, compile 시점에서 오류를 못잡고, 해당 메서드가 호출되는 시점에서 RuntimeException이 발생한다.
       하지만, Querydsl은 자바 언어로 코드를 작성하기 때문에 compile오류를 발생 시킨다.
    - 조건문을 만들기 위해 사용한 메서드를 재사용이 가능하다.
    - Querydsl은 모든 조건에 대한 메서드를 만들고 해당 메서드가 null 이 아니면 조건문이 실행된다.

문제 :  
JWT Access Token을 사용하는데 보안적인 측면에서 문제가 있음.

해결 방법 : Refresh Token 적용.

장점
       -Refresh Token을 적용하게 되면 Access Token의 유효 기간을 짧게 설정하고, Refresh Token의 유효기간을 길게 설정하여
        사용자는 Access Token이 만료되면 Refresh Token을 통해 새로운 Access Token을 발급받는다.
        이로 인해 Access Token이 탈취 되더라도 짧은 Access Token의 유효 기간으로 금방 만료 되어서 탈취자는 해당 토큰을 사용할 수 없다.

문제 :  
웹페이지 크롤링을 하면서 발생한 문제
크롤링을 하는 방법에는 2가지 방법이 존재. 동적페이지를 크롤링 하는지, 정적 페이지를 크롤링하는지에 따라 사용되는 라이브러리가 다르다.
처음에 동적 웹페이지 크롤링 라이브러리인 Jsoup을 사용하여 크롤링을 시도했으나, 우리가 원하는 정보를 찾아 올 수 없었음.

해결방법 : 
동적 웹페이지 크롤링과 정적 웹페이지 크롤링의 차이를 알게 되었고, 정적 웹페이지를 찾아서 Jsoup을 시도함

### 💡 새롭게 도전한 기술

### **FE**

---

- Refresh token
- 검색창
- 페이지네이션
- 회원가입 시 이메일 인증
- 리액트 쿼리, swal 등 모듈화

---

### **BE**

---

- 상품 정보 크롤링 : 오늘의 집 상품 크롤링 시도 > 동적 페이지로 크롤링이 어려워 정적 페이지의 비슷한 정보를 가진 페이지에서 상품 크롤링
- 검색 기능 (Querydsl 사용하여 동적 쿼리를 생성)
- **refreshToken**
- github action을 사용한 자동 배포 기능 설정
- 회원가입시 메일 서버 인증 기능 구축
    
    

---

### 💪🏻 시간이 더 있었다면 시도해보고 싶었던 것들

### **FE**

---

- 2차기능 : 책갈피, 마이페이지, 다크모드
- 최적화 : 이미지 리사이징, 렌더링 성능
- 보안 :Refresh token → http only cookie
- 스타일: 반응형 웹 (모바일, 태블릿)

---

### **BE**

---

- 실시간 인기 검색어
- 책갈피 기능
- 채팅 기능을 이용한 고객센터 문의
- 고객센터 데이터 크롤링
- EC2 swap memory 설정
- 소셜 로그인 기능
