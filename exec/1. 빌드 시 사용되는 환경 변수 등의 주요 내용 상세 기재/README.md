# 1. 빌드 시 사용되는 환경 변수 등의 주요 내용 상세 기재
### BE
```
💡 Jenkins
http://43.202.51.52:9090/
ID: sorhy / PW: sorhy

💡 서버 헬스체크
http://43.202.51.52:8080/health-check

💡 MySQL
43.202.51.52:3306
PW: ssafy
```

### FE

```
💡 Jenkins
http://54.180.136.113:9090/
http://54.180.136.113:3000/
ID: sorhy / PW: sorhy
```
gitlab access token: 3JDJWwWM1ss7wYL5FKdu

### EC2 초기 설정

```
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install build-essential

$ sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime # 한국으로 시간 설정

```

### 자바 설치

```
$ sudo apt install openjdk-17-jdk

```

### 도커 설치

```
$ sudo apt update
$ sudo apt install apt-transport-https ca-certificates curl software-properties-common
$ sudo wget -qO- <https://get.docker.com/> | sh

$ sudo usermod -aG docker ${USER}
$ sudo systemctl restart docker

```

### MySQL 설치

```
$ docker pull mysql:8.0.34
$ docker images
$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=ssafy -d -p 3306:3306 mysql:8.0.34
$ docker ps -a

$ docker exec -it mysql bash
mysql -u root -p

```

### 젠킨스 설치

```
$ sudo docker run -d --name jenkins --restart=on-failure \\
-p 9090:8080 \\
-v /var/jenkins_home:/var/jenkins_home \\
-v /var/run/docker.sock:/var/run/docker.sock \\
-e TZ=Asia/Seoul \\
-u root \\
jenkins/jenkins

# 초기 비밀번호
$ docker exec -u 0 -it jenkins /bin/bash
$ cat /var/jenkins_home/secrets/initialAdminPassword

```

### 깃랩 연동

### credential 생성

1. jenkins 설정 -> credential 생성 -> gitlab ID/PW 및 credential 이름과 설명 추가
2. 새로운 item 생성 -> Freestyle project -> `소스코드 관리` : Git -> repository url 추가(clone에서 http) -> credential은 위에서 생성한 것 사용
3. build 설정 - add build step -> execute shell
4. build 설정 - string parameter -> 이름 설정 및 default value 대상 브랜치로 설정(ex. `/develop`)

### 웹훅 설정

1. GitLab Personal Access token 발급 -> read_repository 체크 -> jenkins에 등록
2. gitlab plugin 설치
3. jenkins build trigger 설정에서 push혹은 merge 선택 -> url 확인 및 복사 -> build trigger에서 secret token 부분 generate 버튼 누르고 복사
4. gitlab webhook 설정에서 복사한 url 및 토큰 넣고 테스트

### DinD 설치

```bash
docker exec -u 0 -it 컨테이너명 sh

apt update
apt install apt-transport-https ca-certificates curl software-properties-common -y
apt-get install wget -y
wget -qO- https://get.docker.com/ | sh
```

### Execute Shell - Spring

```
cd /var/jenkins_home/workspace/SoRhy_BE/backend/

chmod +x gradlew
./gradlew clean build

NODE_CONTAINER_ID=`docker ps -aq --filter 'name=backend'`

if [ -n "$NODE_CONTAINER_ID" ]; then
    docker stop $NODE_CONTAINER_ID
    docker rm $NODE_CONTAINER_ID
fi

docker login -u evan523 --password dkzkepal1!
docker build -t evan523/sorhy .
docker push evan523/sorhy
docker pull evan523/sorhy
docker run --name backend -d -p 8080:8080 evan523/sorhy
docker logout
docker ps

docker rmi $(docker images -f "dangling=true" -q)

```

gradle build 멈출 시 - 실행중인 8080포트를 종료하는 과정에서 host의 8080이 아닌 컨테이너 내 8080(젠킨스)을 종료해버리는 이슈가 있었음

→ `--name backend` 식으로 이름을 붙여 관리하는 방식으로 해결

### Execute Shell - React

```
cd "/var/jenkins_home/workspace/SoRhy_FE/frontend/"

npm i
npm run build

rm /var/jenkins_home/workspace/SoRhy_FE/frontend/.env
echo ${NEXT_PUBLIC_API_URL}
echo "NEXT_PUBLIC_API_URL=\"${NEXT_PUBLIC_API_URL}\"" > /var/jenkins_home/workspace/SoRhy_FE/frontend/.env

docker stop $(docker ps -q -a -f "expose=3000")
docker login -u wjseogus523 --password sptakqmf12!
docker build -t wjseogus523/sorhy .
docker push wjseogus523/sorhy
docker pull wjseogus523/sorhy
docker run -d -p 3000:3000 -e NEXT_PUBLIC_API_URL="${NEXT_PUBLIC_API_URL}" wjseogus523/sorhy 
docker logout
```

환경변수 인식 실패 시 → `docker run -e` 옵션 이용하여 직접 젠킨스 환경변수 맵핑

### Jenkins Plugin

- nodejs

npm 빌드 위해 설치

Tools → configuration tools → NodeJS installations

→ 이름 설정 및 버전 선택

빌드 설정 → 빌드 환경 → Provide Node & npm bin/ folder to PATH

→ 드롭박스에서 설치한 nodejs 적용

### NGINX 설치

```
$ sudo apt-get update
$ sudo apt-get install nginx
$ sudo apt-get install vim

$ sudo service nginx start
$ sudo service nginx status

```

### NGINX 설정

---

# Specification

## 형상 관리

- Gitlab

## UI / UX

- Figma

## OS

- Ubuntu 20.04
- Windows 10

## 이슈 관리

- Jira

## Communication

- Mattermost
- Notion

## Front-end

- Unity : 2021.3.31f1
- React : 18 ( 18.16.0)

## DB

- MySQL : 8.0.34

## Back-end

- Java : 11.0.20

## IDE

- IntelliJ : 2023.2.1 (Ultimate Edition)
- Visual Studio Code : 1.84.2

## Infra

- Web Server : Nginx
- Jenkins : 2.416
- Docker : 24.0.5
- WSL2

### 기타 편의 툴

- mobaXterm
- Postman
