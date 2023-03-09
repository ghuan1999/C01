"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var a = Number((0, readline_sync_1.question)("Moi nhap so: "));
var gio = Math.floor(a / 3600);
var phut = Math.floor((a - gio * 3600) / 60);
var giay = a - gio * 3600 - phut * 60;
console.log(gio, ":", phut, ":", giay);
