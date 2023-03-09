"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var x1 = Number((0, readline_sync_1.question)("Nhap x1: "));
var y1 = Number((0, readline_sync_1.question)("Nhap y1: "));
var x2 = Number((0, readline_sync_1.question)("Nhap x2: "));
var y2 = Number((0, readline_sync_1.question)("Nhap y2: "));
var khoangCach = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
console.log(khoangCach);
