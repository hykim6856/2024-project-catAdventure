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
