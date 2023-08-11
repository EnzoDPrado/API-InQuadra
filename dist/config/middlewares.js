"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    {
        name: "strapi::body",
        config: {
            formLimit: "256mb",
            jsonLimit: "256mb",
            textLimit: "256mb",
            formidable: {
                maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
            },
        },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
