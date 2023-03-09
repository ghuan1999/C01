import {question} from 'readline-sync';

let a: number=Number(question("Nhap a: "));
let b: number=Number(question("Nhap b: "));
let tmp: number=a; // biến tạm dùng để lưu giá trị của a trước khi bị thay đổi
a=b;
b=tmp; 
console.log(a, b);
