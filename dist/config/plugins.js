"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                localServer: {
                    maxage: 300000
                },
                sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
            },
            breakpoints: {
                xlarge: 1920,
                large: 1000,
                medium: 750,
                small: 500,
                xsmall: 64
            },
        },
    },
    email: {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: env("SMTP_HOST"),
                port: env.int("SMTP_PORT"),
                auth: {
                    user: env("SMTP_USER"),
                    pass: env("SMTP_PASSWORD"),
                },
            },
            settings: {
                defaultFrom: env("SMTP_FROM"),
                defaultReplyTo: env("SMTP_FROM"),
            },
        },
    },
});
