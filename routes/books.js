//this is a currently not working

const express = require("express");
const router = require("express").Router();

router.post("/", (req, res) => {
  console.log(req, res);
  console.log("im here");
});
