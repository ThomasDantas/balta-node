"use strict"; //  criterioso js

// var config = require("../config");
var sendgrid = require("sendgrid")(
  "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"
);

exports.send = async (to, subject, body) => {
  sendgrid.send({
    to: to,
    from: "hello@botmail",
    subject: subject,
    html: body
  });
};
