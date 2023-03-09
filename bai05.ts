import {question} from 'readline-sync';

let a: number=Number(question("Nhap a: "));
let chucNghin: number=Math.floor(a/10000);
let nghin: number=Math.floor((a-chucNghin*10000)/1000);
let tram: number=Math.floor((a-chucNghin*10000-nghin*1000)/100);
let chuc: number=Math.floor((a-chucNghin*10000-nghin*1000-tram*100)/10);
let donVi: number=a%10;
let nut: number=(chucNghin+nghin+tram+chuc+donVi)%10;
console.log(nut);
