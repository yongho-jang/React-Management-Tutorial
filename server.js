const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var data = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any/1",
    name: "장용호",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any/2",
    name: "홍길동",
    birthday: "960101",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any/3",
    name: "이순신",
    birthday: "200401",
    gender: "여자",
    job: "대학생",
  },
];

app.get("/api/customers", (req, res) => {
  res.send(data);
});

app.use("/image", express.static("./upload"));
app.post("/api/customers", upload.single("image"), (req, res) => {
  data.push({
    id: req.body.name,
    birthday: req.body.birthday,
    image: "/image/" + req.file.fileName,
    gender: req.body.gender,
    job: req.body.job,
  });

  res.send(data);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
