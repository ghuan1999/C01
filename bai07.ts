import {question} from 'readline-sync';

let x1: number=Number(question("Nhap x1: "));
let y1: number=Number(question("Nhap y1: "));
let x2: number=Number(question("Nhap x2: "));
let y2: number=Number(question("Nhap y2: "));
let khoangCach: number=Math.sqrt((x1-x2)**2+(y1-y2)**2);
console.log(khoangCach);