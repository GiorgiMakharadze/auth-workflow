import nodemailer from "nodemailer";
import nodemailerConfig from "./nodemailerConfig";

export const sendEmail = async ({ to, subject, html }: any) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Giorgi" <makharadze2000@gmail.com>',
    to,
    subject,
    html,
  });
};
