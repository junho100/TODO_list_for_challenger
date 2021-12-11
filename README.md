# TODO list API for challenger

백엔드 개인 프로젝트 "TODO list for challenger"<br>
매달 큰 목표를 세운 후, 한주마다 첼린지를 스스로 설정해 목표를 이루어 나가는 투두 앱 API 구현 프로젝트

## Tech Stack I Used

- NodeJS
- Express
- MySQL
- Sequelize

## Install

> **본인 실행환경**
>
> - window10
> - VSCode
> - Chrome 94.0.4606.61

## Dependencies

## External Resource

## Discussion & Obstacles

### React useEffect 속 무한리랜더링(setState)

### GET 요청에 request body 추가

## TODO

- [x] monthly goal api documentation
- [x] weekly challenge api documentation
- [x] 대략적인 서버 구조 설계(Route, Controller, Data)
- [x] Monthly goal router 수정(GET 요청)
  - [x] postman 수정
- [ ] goal, challenge 해당 이름만 가져오는 api 구현
- [x] Weekly challenge router 수정(GET 요청)
  - [x] postman 수정
- [x] 메모리 임시 DB 구현 (monthly goal)
- [x] 메모리 임시 DB 구현 (weekly challenge)
- [x] postman setups (monthly goal)
- [x] postman setups (weekly challenge)
- [x] monthly goal
  - [x] 기본 구현
  - [x] controller, router 분리
- [x] weekly challenge
  - [x] 기본 구현
  - [x] controller, router 분리
- [ ] validation 구현
- [ ] goal, challenge 추가 예외처리 확인, 구현
- [ ] auth api documentation
- [ ] postman setup for auth
- [ ] auth 구현
- [ ] DB MySQL로 전환 (using Sequelize) (진행중)
  - [ ] MySQL로만 db 연결해보기 (진행중)
  - [ ] using Sequelize
- [ ] 간단한 프론트엔드 구현, 연결
  - [x] goal, challenge 구현 후
    - [x] goal 구현
    - [x] challenge 구현
  - [ ] validation 구현 후
  - [ ] auth 구현 후
- [ ] api 문서화, github 연동 (using Swagger)
  - [ ] api 모듈화 -> 보기쉽게 작성
- [ ] goals, challenge 중복 확인 구현
