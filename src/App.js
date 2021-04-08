import { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
import React from "react";

const customers = [
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

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            ></Customer>
          );
        })}
      </div>
    );
  }
}

export default App;
