// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";

const pass = "cqfpmdnwtaazhkol";
const from = "devtestfrom@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
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

const mailOptionForAnnouncement = (user, content) => {
  console.log(content[0]);
  return {
    from: from,
    to: `${user.email}`,
    subject: "New Announcement ",
    text: `hi ${user.name}`,
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

      await transporter.sendMail(
        mailOptionForAnnouncement(recipient, content),
        function (error, info) {
          if (error) {
            console.log(error);
            Failed.push(recipient.email);
            console.log(Failed);
          } else {
            console.log(
              "Email sent: " + info.response + "to" + " " + recipient.email
            );

            Success.push(recipient);
            console.log({ success: Success.length });
          }

          setTimeout(function () {
            sendMail(index + 1);
          }, 10000);
        }
      );
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
    transporter.sendMail(
      mailOptionForAnnouncement(recipient, content),
      function (error, info) {
        if (error) {
          console.log(error);
          Failed.push(recipient.email);
          console.log(Failed);
        } else {
          console.log(
            "Email sent: " + info.response + "to" + " " + recipient.email
          );

          Success.push(recipient);
          console.log({ success: Success.length });
        }
      }
    );

    res.status(200).json({ name: "John Doe" });
  }
}
