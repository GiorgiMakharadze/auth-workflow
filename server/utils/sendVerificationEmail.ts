import { sendEmail } from "./sendEmail";

export const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}: any) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;

  const message = `<p>Please confrim you email by clickin on the following link: <a href="${verifyEmail}">Verify Email</a></p>`;

  return sendEmail({
    to: email,
    subject: "Email confrimation",
    html: `<h4> Hello ${name}</h4>
    ${message}
    `,
  });
};
