import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

const users = [
  { name: "sohan", email: "sohanur01744@gmail.com" },
  {
    name: "sohanur25800",
    email: "sohanur25800@gmail.com",
  },
  {
    email: "sohanurrahoman02@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "sohanur01744@gmail.com" },
  {
    name: "sohanur25800",
    email: "sohanur25800@gmail.com",
  },
  {
    email: "sohanurrahoman02@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "sohanur01744@gmail.com" },
  {
    name: "sohanur25800",
    email: "sohanur25800@gmail.com",
  },
  {
    email: "sohanurrahoman02@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "sohanur01744@gmail.com" },
  {
    name: "sohanur25800",
    email: "sohanur25800@gmail.com",
  },
  {
    email: "sohanurrahoman02@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
  { name: "sohan", email: "sohanur01744@gmail.com" },
  {
    name: "sohanur25800",
    email: "sohanur25800@gmail.com",
  },
  {
    email: "sohanurrahoman02@gmail.com",
    name: "test user",
  },
  {
    email: "ranodm@gmail.com",
    name: "random",
  },
];

export default function Home() {
  const [content, setContent] = useState("A Test Announcement");

  const handleClick = async () => {
    try {
      const { data } = await axios.post("/api/hello", {
        content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendMail = async (name, email) => {
    try {
      const { data } = await axios.put("/api/hello", {
        content,
        name,
        email,
      });
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  // const handleMultiple = async () => {
  //   console.log("runnign");
  //   try {
  //     users.forEach(async (user) => await sendMail(user.name, user.email));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const requests = users.map((user) =>
  //   axios.put("/api/hello", {
  //     content,
  //     name: user.name,
  //     email: user.email,
  //   })
  // );

  // const requests2 = users.map((user) => sendMail(user.name, user.email));

  // const handleMultiple = () => {
  //   axios.all(requests2).then((responses) => {
  //     responses.forEach((resp) => {
  //       console.log(resp);
  //     });
  //   });
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>There will a announcment</p>
        <form>
          <input
            type="text"
            placeholder="Post A Announcement"
            style={{ padding: "5px" }}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
        <div
          style={{
            border: "1px solid black",
            padding: "3px 10px",
            margin: "10px 5px",
            minWidth: "100px",
            textAlign: "center",
          }}
          onClick={() => handleClick()}
        >
          Post
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "3px 10px",
            margin: "10px 5px",
            minWidth: "100px",
            textAlign: "center",
          }}
          onClick={() => sendMail(users[0].name, users[0].email)}
        >
          Post To Multiple User
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
