// import s from './Form.module.scss';
import React from "react";

const user = {
  name: "iskak",
  email: "iskak2512@gmail.com",
  age: 19,
};

export const Dashboard = () => {
  return (
    <>
      <section>
        <h2>Welcome {user && user.name}</h2>
        <p>Your email is {user.email}</p>
        <p>Your age is {user.age}</p>
      </section>
    </>
  );
};
