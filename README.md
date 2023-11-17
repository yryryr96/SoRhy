# 🎵 SoRhy

## 💁 팀원 소개

| 이름 | 직책 | 역할 |
| --- | --- | --- |
| 이진형 | 팀장 | Unity 게임 개발 |
| 서정희 | 팀원 | Unity 게임 개발 |
| 방정우 | 팀원 | Unity 게임 개발 |
| 노창현 | 팀원 | Unity 게임 개발, Infra |
| 정영록 | 팀원 | Backend, Frontend |
| 전대현 | 팀원 | Frontend |

## 📰 업무 분담

| 기능 | 담당 |
| --- | --- |
| 전적 검색 사이트  | 정영록 , 전대현 |
| 수박 부수기 게임 | 방정우 |
| 수영 레이싱 게임 | 서정희 |
| CI/CD 구축, 발표 | 노창현 |
| Unity 플랫폼 조성 및 게임 개발 | 이진형 |



## 📔 프로젝트 개요

- 프로젝트 기간 : 2023.10.09~2023.11.17 (총7주)
- 프로젝트 명 : SoRhy Project
      가상 오피스 ‘Soma’에서 동료들과 할 수 있는 “캐주얼 리듬 게임” 개발
      플레이 데이터(랭킹, 전적 등)를 확인할 수 있는 웹 사이트 개발
- 기획배경
    - 직방의 메타버스 가상오피스 소마(Soma)는 업무 뿐 아니라 네트워킹과 다양한 이벤트를 지원하는 복합 가상 공간이다. 마치 실제 공간에서 친목을 형성하고 모임을 즐기듯, 다른 유저와 소통할 수 있는 일종의 방안으로 협동 게임 서비스를 제공하고자 한다.
   
- 목표
    - **가상 오피스 ‘Soma’에서 동료들과 할 수 있는 “캐주얼 리듬 게임” 개발**
    - 리듬 게임 옴니버스: 다양한 리듬게임이 결합된 옴니버스 형태의 게임 
    - 캐릭터 조작, 감정표현: 게임 대기실에서 캐릭터 이동 및 감정표현으로 상호작용
    - 플레이 정보 기록 및 검색

- 게임 소개
- 
    **수박 부수기**
    - 노트에 맞춰 리듬 게임을 진행하고, 캐릭터들은 정확도에 따라 수박을 부수게 됨
    - 먼저 수박을 부수는 팀이 승리하는 방식으로 진행

    **수영 레이싱**
    - 박자와 방향에 맞춰 방향키를 누르면, 정확도에 따라 캐릭터가 앞으로 전진하는 레이싱 게임
    - 먼저 결승점에 도달하는 팀이 승리하는 방식으로 진행

- 전적 사이트 소개
    - 사용자가 속한 회사의 게임 이용 내역과 전적 목록 등 출력 가능
    - 자유게시판 기능 ( 커뮤니티 )
    - 사용자의 닉네임 검색을 통한 정보 조회 가능
    - 게임 및 회사별 랭킹 제공

## 💻 프로젝트 제작 시 사용된 기술

- 게임 제작 : Unity
- Back-end : SpringBoot,JPA, MySQL, S3 
- Front-end : Next.js,React,TypeScript,Zustand,Styled-components
- Infra : Docker, Jenkins
<div>
  <img src="https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=Unity&logoColor=white">
</div>
<div>
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
  <img src="https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=white">
</div>
<div>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
</div>
<div>
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">

</div>


## 🖇️ 개발문서

 - [Update 예정]

## 💻 ERD

 <img src="https://github.com/yryryr96/Algorithm/assets/122415720/3b1376f6-afdb-4138-9e37-26d3e8cf1277" width=600>

## 🎓 Git Rule

**branch**

<aside>
💡 develop → feature/{기능이름}


</aside>


**merge**


```jsx
Merge Pull requests 보내서 확인 후 Merge.
Merge 후 git pull 잊지 않기. 😎
```


## 주요기능


## 🎉 페이지 설명

### 1. SoRhy 메인 페이지

<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/c425877f-cd7a-4236-ac07-a6f8f559f679" width="600" height="400" border="1px solid gray"/>

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 로그인 및 회원가입 | 로그인 및 회원가입 진행 |
| 2 | Soma 연동 | Soma 가상 오피스와 연동 |

### 2. 수영 레이싱 게임 페이지

<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/24a56ad5-874e-4ce2-8462-0ff717e4178e" width="600" height="400" border="1px solid gray"/>

- 노래의 박자에 맞춰 나타나는 노트를 키보드의 방향키로 입력하는 게임
- 높은 판정을 얻을수록 많은 점수를 얻고 더 멀리 수영해서 나아감
- 다른 9명의 가상 플레이어와 대결하고 실시간 등수를 확인할 수 있음

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 방향키 노트 | 각각 4개의 다른 방향의 노트가 판정 컨테이너의 중앙 원과 겹치는 타이밍에 키보드 입력  |
| 2 | 판정ui | 총 5개의 판정(perfect, cool, great, good, miss)을 표시 |
| 3 | 점수ui | 판정에 따라 얻은 점수(나아간 거리)를 표시 |
| 4 | 화면1 | 탑 뷰 카메라를 통해 현재 다른 가상플레이어와 자신의 위치를 한 눈에 확인 가능 |
| 5 | 화면2 | 플레이어 본인을 따라가는 카메라로 수영해서 나아가는 효과를 생생하게 느낄 수 있음 |

### 3. 수박 깨기 게임 페이지

<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/d3386c09-fc66-46ea-a403-a21452f44091" width="600" height="400"/>

- 리듬에 맞춰 노트를 치면 타조들이 수박을 쳐서 수박에 갇힌 동물친구를 구하는 게임
- 이 게임은 리듬히어로, osu!와 같이 점점 줄어드는 원이 해당 노트의 테두리와 겹치는 타이밍에 클릭 또는 드래그로 점수를 획득하고 게임을 진행합니다

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 점수판 | 노트를 친 타이밍을 판정해서 부여한 점수가 나타남 |
| 2 | 진행바 | 목표 점수인 10,000점을 시각화해서 볼 수 있는 그래프 |
| 3 | 콤보현황판 | 노트를 친 타이밍을 판정해서 누적된 콤보가 나타남 |
| 4 | 판정현황판 | 노트를 친 타이밍을 판정해서 얼마나 적절하게 쳤는지 애니메이션 효과와 함께 나타남 |
| 5 | 원노트 | 점점 줄어드는 원이 해당 노트의 테두리와 겹치는 타이밍에 클릭하는 노트 |
| 6 | 롱노트 | 점점 줄어드는 원이 해당 노트의 테두리와 겹치는 타이밍에 드래그하는 노트 |



---

### 4. SoRhy 전적 검색 메인 페이지


<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/4bb05584-a60e-4178-901e-3f6d6fb9d96e" width="600" height="400" />

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 닉네임 입력 및 검색 | 닉네임 입력 후 전적 검색 진행 |
| 2 | 로그인 및 회원가입 | 로그인 및 회원가입 진행 |
| 3 | 전적검색,커뮤니티,랭킹 | 페이지 Navigation |

---

### 5. 전적 검색 페이지



<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/eec56e19-3993-47df-835f-cb73068a5ace" width="600" height="400"/>


| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 내 정보 및 통합 전적 확인  | 내 회사 및 통합 전적 확인 가능 |
| 2 | Top3Characters | 가장 많이 사용한 3개의 캐릭터 확인 가능 |
| 3 | 최근 경기 통계 | 최근 5경기에 대한 승/패 현황 차트 제공 |
| 4 | 게임 결과 | 게임 관련 정보 전달 |
| 5 | 랭크 확인 | 내 랭킹 정보 제공 |

---


### 6. 랭킹 페이지

<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/e5358724-38da-4ff1-9e59-4ab53276d9ed" width="600" height="400"/>


| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 랭킹 확인 | 회사 및 게임별 랭킹 확인 |
| 2 | Top3Characters | 가장 많이 사용한 3개의 캐릭터 확인 가능 |
| 3 | 점수 확인 | 회사 및 게임별 점수 확인 |


---

### 7. 커뮤니티 페이지

<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/9434fd50-ab1b-4361-a160-3eb6721eb4ee" width="600" height="400"/>

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 게시판 선택 | 게시판 카테고리 별 구분 |
| 2 | 게시글 목록 | 게시글 목록 확인, 클릭 시 게시글 디테일 페이지로 이동 |
| 3 | 실시간 핫이슈 게시글 | 실시간 조회 수 기준으로 핫이슈 게시글 표시 |
| 4 | 게시글 검색 | 게시판 별 제목,닉네임,내용,작성자 기준으로 검색 |

---



### 8. 글 작성 및 글 디테일 페이지

<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/23a52552-2d9b-4895-9baa-68f5dd49d21d" width="600" height="400"/>

<img src="https://github.com/gitDaeHyun/Next-pjt/assets/122415799/364b7a9f-ea58-45e3-97a7-74dc81e4fae6" width="600" height="400"/>

| 구분 | 항목 | 내용 |
| --- | --- | --- |
| 1 | 게시글 작성 | 제목, 내용, 파일 등록하여 게시글 등록 |
| 2 | 게시글 댓글 작성 | 게시글 디테일 페이지에서 댓글 작성 |

---

</aside>

---
