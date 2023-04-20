"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: process.env.ETHEREAL_USERNAME,
        pass: process.env.ETHEREAL_PASSWORD,
    },
};
