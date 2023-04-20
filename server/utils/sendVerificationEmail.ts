import { sendEmail } from "./sendEmail";

export const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}: any) => {
  const message =
    "<p>Please confrim you email by clickin on the following link: </p>";

  return sendEmail({
    to: email,
    subject: "Email confrimation",
    html: `<h4> Hello ${name}</h4>
    ${message}
    `,
  });
};

console.log("front");
