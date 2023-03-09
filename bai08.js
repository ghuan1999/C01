"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var a = Number((0, readline_sync_1.question)("Nhap a: "));
var b = Number((0, readline_sync_1.question)("Nhap b: "));
var tmp = a;
a = b;
b = tmp;
console.log(a, b);
