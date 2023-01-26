// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";

const pass = "cqfpmdnwtaazhkol";
const from = "devtestfrom@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: from,
    pass: pass,
  },
});

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
];

const mailOptionForAnnouncement = (user, content) => {
  console.log(content[0]);
  return {
    from: from,
    to: `${user.email}`,
    subject: "New Announcement ",
    // text: `hi ${user.name}`,
    html: ` <div style=" background: linear-gradient( rgba(94, 255, 0, 0.2), rgba(222, 172, 79, 0.2) ); position: relative; color: rgb(36, 32, 5); overflow-x: hidden; font-family: Arial, sans-serif; margin: 0; padding: 0; " > <header style=" display: flex; align-items: flex-start; justify-content: center; flex-direction: column; padding: 10px; width: 100%; overflow: hidden; background-color: rgb(0, 0, 0, 0.1); min-height: 7.5vh; margin: 0; " > <div style=" font-size: 180%; font-weight: bold; color: rgb(25, 106, 0); display: flex; align-items: center; justify-content: flex-start; gap: 3px; " > <span>A</span> <span>v</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" style="padding-top: 5px" alt=""/></span> <span>c</span> <span>a</span> <span>d</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" alt="" style="padding-top: 5px"/></span> </div></header> <div style="padding: 10px"> <p style="font-size: 16px; line-height: 1.5">Dear ${
      user.name
    },</p>${content
      .split("#")
      .map((item) => `<p style="font-size: 16px; line-height: 1.5">${item}</p>`)
      .join(
        ""
      )}<p style="font-size: 16px; line-height: 1.5">Best,</p><p style="font-size: 16px; line-height: 1.5">The Avocado Team</p></div></div>`,
  };
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    console.log(req.body);
    const content = req.body.content;

    let Failed = [];
    let Success = [];

    var sendMail = async function (index) {
      if (index >= users.length) {
        return;
      }

      var recipient = users[index];
      console.log({ recipient });
      function later(delay) {
        return new Promise(function (resolve) {
          setTimeout(resolve, delay);
          console.log("delayed");
        });
      }

      later("5000");

      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
            resolve(success);
          }
        });
      });

      console.log("verified");

      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(
          mailOptionForAnnouncement(recipient, content),
          (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log(info);
              resolve(info);
            }
            // setTimeout(function () {
            sendMail(index + 1);
            // }, 10000);
          }
        );
      });

      // transporter.sendMail(
      //   mailOptionForAnnouncement(recipient, content),
      //   function (error, info) {
      //     if (error) {
      //       console.log(error);
      //       Failed.push(recipient.email);
      //       console.log(Failed);
      //     } else {
      //       console.log(
      //         "Email sent: " + info.response + "to" + " " + recipient.email
      //       );

      //       Success.push(recipient);
      //       console.log({ success: Success.length });
      //     }

      //     setTimeout(function () {
      //       sendMail(index + 1);
      //     }, 10000);
      //   }
      // );
    };

    sendMail(0);

    res.status(200).json({ name: "John Doe" });
  } else {
    console.log("not the post request");
    const { content, name, email } = req.body;
    console.log({ name, email });
    let Failed = [];
    let Success = [];
    const recipient = { name, email };

    function later(delay) {
      return new Promise(function (resolve) {
        setTimeout(resolve, delay);
        console.log("delayed");
      });
    }

    later("5000");

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(
        mailOptionForAnnouncement(recipient, content),
        (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        }
      );
    });

    // transporter.sendMail(
    //   mailOptionForAnnouncement(recipient, content),
    //   function (error, info) {
    //     if (error) {
    //       console.log(error);
    //       Failed.push(recipient.email);
    //       console.log(Failed);
    //     } else {
    //       console.log(
    //         "Email sent: " + info.response + "to" + " " + recipient.email
    //       );

    //       Success.push(recipient);
    //       console.log({ success: Success.length });
    //     }
    //   }
    // );

    res.status(200).json({ name: "John Doe" });
  }
}
