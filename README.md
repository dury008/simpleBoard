# 간단한 게시판 (Springboot + mariadb + Vue.js) 

교육시간때 만든 jsp게시판을 프론트와 백엔드를 분리하기위해 api를 제공하는 형태로 만들었고
vue를 사용해서 토큰 로그인기능을 처리해보고 싶어서 스프링시큐리티 쪽은 아직 어려운 내용이 많지만 일단 jwt 예제를 따라서 만들어봤다. 서버로부터 api를 호출해서 프론트단에 보여주는 작업에 더 흥미를 느껴서 Vue에서 토큰처리와 컴포넌트들을 구성하는 쪽에 더 시간을 많이 투자했던 것같다
## Frontend
---
### 사용기술
- Vue, Vuex, Vue-Router
- Bootstrap

### 기능
- 로그인, 회원가입 페이지(로그인시 refresh, access토큰 쿠키저장)

- 전체게시물 조회페이지(자유게시판, 공지사항, 1:1문의, 자주묻는질문)

- 상세게시물 조회, 수정 페이지

- 게시물 삭제 기능, 게시물 추가기능(CKEditor사용)

- 게시물 제목을 통한 검색

- axios interceptor, vue Router Navigator 를 이용한 사용자 로그인 상태유지

## Backend
---
### 사용기술
- Springboot, SpringSecurity, Jwt

### 기능
- jwt refreshToken, accessToken을 이용한 로그인, 회원가입 , 토큰갱신 ,로그아웃 api제공   
참조->  https://www.bezkoder.com/spring-boot-jwt-authentication/  

- 전체게시물, 상세게시물, 등록, 수정, 삭제 api 제공

- 게시물 조회수 증가 기능  
![api](https://user-images.githubusercontent.com/22339142/141141505-cbdb5ecc-5895-499f-9d1c-e594e5d339f5.png)
---
## Project setup
### backend  
- eclipse에서 spring-web 프로젝트 import 
- mariadb에서 maria_web 데이터베이스 생성

- 데이터베이스에 테이블생성 (/spring-web/createTable.txt)
- application.properties db접속 정보 변경
```
spring.datasource.driverClassName: org.mariadb.jdbc.Driver
spring.datasource.jdbcUrl = jdbc:mariadb://localhost:3306/maria_web?allowMultiQuries=true
spring.datasource.username= username
spring.datasource.password = password
```
- Sprigboot 실행(3000포트)





