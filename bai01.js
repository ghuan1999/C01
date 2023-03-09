"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var a = Number((0, readline_sync_1.question)("Nhap a: "));
var tram = Math.floor(a / 100);
var chuc = Math.floor((a - tram * 100) / 10);
var donVi = a % 10 + 1;
console.log(tram, chuc, donVi);
