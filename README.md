# 생성

```bash
npx express-21c project_cat --sequelize
```

- `npm install sequelize`
- 날짜 관련도구를 설치 : `npm install moment`
- 이미지 등 파일을 업로드 하려면 반드시 form tag에 method 는 POST 이어야하고, enctype="multipart/form-data" 속성이 포함되어야한다.

## DB Model import

```bash
sequelize-auto -o ./db -d catpdb -h localhost -u root -x '!Biz8080' -e mysql -l esm

```

## 이미지 관련

```bash
npm install multer
npm install uuid
```

### nodejs 서버에서 Session을 사용한 Login 구현

- dependency 설치: `npm install express-session`
- `app.js`에 session 설정

### 피그마를 이용한 서비스 기획

- https://www.figma.com/file/ens9uW7R0eTWt0OERGUa15/%EA%B3%A0%EC%96%91%EC%9D%B4-%EB%8C%80%EB%AA%A8%ED%97%98?type=design&node-id=0%3A1&mode=design&t=wDWWZwURvb2qrS5J-1
