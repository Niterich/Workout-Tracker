const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");