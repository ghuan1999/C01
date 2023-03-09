"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var x = Number((0, readline_sync_1.question)("Nhap x: "));
var y = Number((0, readline_sync_1.question)("Nhap y: "));
var S = (Math.sqrt(x) + Math.abs(x)) / Math.sqrt(Math.pow(x, y));
console.log(S);
