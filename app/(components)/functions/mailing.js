// import nodemailer from "nodemailer";

// const mail = (receiver, state) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       
//     },
//   });

//   const mailOptions = {
//     from: "",
//     to: receiver,
//     subject: "Acceptance status",
//     text: "Your essay is " + (state ? "accepted" : "rejected"),
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log("Error: " + error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// };

// export default mail;
