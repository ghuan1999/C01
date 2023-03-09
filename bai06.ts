import {question} from 'readline-sync';

let a: number=Number(question("Moi nhap so: "));
let gio: number=Math.floor(a/3600);
let phut: number=Math.floor((a-gio*3600)/60);
let giay: number=a-gio*3600-phut*60;
console.log(gio,":",phut,":", giay);