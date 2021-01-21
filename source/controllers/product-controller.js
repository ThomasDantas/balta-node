"use strict"; //  criterioso js

const emailService = require("../services/email-service");

exports.post = (req, res, next) => {
  res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send({ id: id, item: req.body });
};

exports.delete = (req, res, next) => {
  res.status(200).send(req.body);
};

exports.post = async (req, res, next) => {
  try {
    await emailService.send(
      req.body.email,
      "Bem vindo ao Node, email enviado pelo sendgrid",
      `Olá, ${req.body.email}, seja bem vindo à Node Store!`
    );

    res.status(201).send({
      message: "Email enviado com sucesso!"
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
    });
  }
};
