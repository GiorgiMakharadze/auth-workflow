"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = void 0;
const sendEmail_1 = require("./sendEmail");
const sendVerificationEmail = ({ name, email, verificationToken, origin, }) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
    const message = `<p>Please confrim you email by clickin on the following link: <a href="${verifyEmail}">Verify Email</a></p>`;
    return (0, sendEmail_1.sendEmail)({
        to: email,
        subject: "Email confrimation",
        html: `<h4> Hello ${name}</h4>
    ${message}
    `,
    });
});
exports.sendVerificationEmail = sendVerificationEmail;
console.log("front");
